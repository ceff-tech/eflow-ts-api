import axios from "axios";
import {
  TsUpload,
  UploadTimeSeriesPL,
  RequestWithUser,
  TSCalcResponse
} from "./models";

import { params } from "../../static/params";

export class TsUploadServices {
  TsUpload = TsUpload;
  flaskServerUrl = process.env.EFLOW_FLASK_URL;

  _isInvalidInput(pl: UploadTimeSeriesPL) {
    const { dates, flows, name, startDate } = pl;
    return (
      !dates || !flows || !startDate || dates.length !== flows.length || !name
    );
  }

  public async uploadTimeSeries(pl: UploadTimeSeriesPL, req: RequestWithUser) {
    if (this._isInvalidInput(pl)) {
      throw new Error("dates, flows and startDate must be provided");
    }

    pl.params = pl.params ? pl.params : params;

    const { dates, flows, name, startDate } = pl;

    try {
      const axiosRes = await axios.post(`${this.flaskServerUrl}/api`, {
        ...pl,
        start_date: pl.startDate
      });
      const tsCal: TSCalcResponse = JSON.parse(axiosRes.data);

      return this.TsUpload.create({
        name,
        dates,
        flows,
        startDate,
        params: JSON.stringify(params),
        failed: false,
        userId: req.user.id,
        flowMatrix: tsCal.flow_matrix,
        DRH: tsCal.DRH,
        allYear: tsCal.all_year,
        winter: tsCal.winter,
        fall: tsCal.fall,
        summer: tsCal.summer,
        spring: tsCal.spring,
        fallWinter: tsCal.fall_winter,
        yearRanges: tsCal.year_ranges
      });
    } catch (err) {
      this.TsUpload.create({
        name,
        dates,
        flows,
        startDate,
        params: JSON.stringify(params),
        failed: true,
        userId: req.user.id
      }).catch(e => {
        throw new Error(`Database Error ${e.toString()}`);
      });
      throw new Error("Data could not be processed");
    }
  }
}
