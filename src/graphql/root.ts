import {
  classificationQueries,
  classificationTypes
} from "./hydrology/classification";
import { gaugeQueries, gaugeMutations, gaugeTypes } from "./hydrology/gauge";
import { allYearQueries, allYearTypes } from "./hydrology/allYear";
import { userQueries, userMutations, userTypes } from "./user";
import { annualFlowQueries, annualFlowTypes } from "./hydrology/annualFlow";
import { hydrographTypes, hydrographQueries } from "./hydrology/hydrograph";
import { memberTypes, memberQueries, memberMutations } from "./member";
import { paperTypes, paperQueries, paperMutations } from "./paper";
import { memberPaperTypes, memberPaperMutations } from "./memberPaper";
import { tsUploadMutations, tsUploadTypes } from "./tsUpload";
import { summerQueries, summerTypes } from "./hydrology/summer";

const typeDefs = [
  classificationTypes,
  gaugeTypes,
  allYearTypes,
  userTypes,
  annualFlowTypes,
  hydrographTypes,
  memberTypes,
  paperTypes,
  memberPaperTypes,
  tsUploadTypes,
  summerTypes
];

const Query = {
  ...classificationQueries,
  ...gaugeQueries,
  ...allYearQueries,
  ...userQueries,
  ...annualFlowQueries,
  ...hydrographQueries,
  ...memberQueries,
  ...paperQueries,
  ...summerQueries
};

const Mutation = {
  ...gaugeMutations,
  ...userMutations,
  ...memberMutations,
  ...paperMutations,
  ...memberPaperMutations,
  ...tsUploadMutations
};

export { typeDefs, Query, Mutation };
