export const metricReference: { [index: string]: string[] } = {
  Year: ["Year", "year"],
  Avg: ["AllYear", "average"],
  Std: ["AllYear", "standardDeviation"],
  CV: ["AllYear", "coeffientVariance"],
  SP_Tim: ["Spring", "timing"],
  SP_Mag: ["Spring", "magnitude"],
  SP_Dur: ["Spring", "duration"],
  SP_ROC: ["Spring", "rateOfChange"],
  DS_Tim: ["Summer", "timing"],
  DS_Mag_10: ["Summer", "magnitude10"],
  DS_Mag_50: ["Summer", "magnitude50"],
  DS_Dur_WSI: ["Summer", "durationFlush"],
  DS_Dur_WS: ["Summer", "durationWet"],
  DS_No_Flow: ["Summer", "noFlowCount"],
  WSI_Tim: ["Fall", "timing"],
  WSI_Mag: ["Fall", "magnitude"],
  Wet_Tim: ["Fall", "timingWet"],
  WSI_Dur: ["Fall", "duration"],
  Wet_BFL_Mag: ["FallWinter", "magWet"],
  Peak_Tim_2: ["Winter", "timing2"],
  Peak_Dur_2: ["Winter", "duration2"],
  Peak_Fre_2: ["Winter", "frequency2"],
  Peak_Mag_2: ["Winter", "magnitude2"],
  Peak_Tim_5: ["Winter", "timing5"],
  Peak_Dur_5: ["Winter", "duration5"],
  Peak_Fre_5: ["Winter", "frequency5"],
  Peak_Mag_5: ["Winter", "magnitude5"],
  Peak_Tim_10: ["Winter", "timing10"],
  Peak_Dur_10: ["Winter", "duration10"],
  Peak_Fre_10: ["Winter", "frequency10"],
  Peak_Mag_10: ["Winter", "magnitude10"],
  Peak_Tim_20: ["Winter", "timing20"],
  Peak_Dur_20: ["Winter", "duration20"],
  Peak_Fre_20: ["Winter", "frequency20"],
  Peak_Mag_20: ["Winter", "magnitude20"],
  Peak_Tim_50: ["Winter", "timing50"],
  Peak_Dur_50: ["Winter", "duration50"],
  Peak_Fre_50: ["Winter", "frequency50"],
  Peak_Mag_50: ["Winter", "magnitude50"]
};

export interface IMetricRef {
  name: string;
  display: string;
  isBoxplotOverlay: boolean;
  tableName: string;
  short: string;
  as: string;
  columnName: string;
  boxPlotOverLayMethods: string[];
  colors: string[];
}

export const metricReferenceAs: IMetricRef[] = [
  {
    name: "allYearAverage",
    display: "All Year Average",
    isBoxplotOverlay: false,
    tableName: "AllYears",
    short: "Avg",
    as: "allYears",
    columnName: "average",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#f9a825", "#c17900"]
  },
  {
    name: "allYearStandardDeviation",
    display: "All Year Standard Deviation",
    isBoxplotOverlay: false,
    tableName: "AllYears",
    short: "Std",
    as: "allYears",
    columnName: "standardDeviation",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#fbc02d", "#c49000"]
  },
  {
    name: "allYearCoeffientVariance",
    display: "All Year Coeffient Variance",
    isBoxplotOverlay: false,
    tableName: "AllYears",
    short: "CV",
    as: "allYears",
    columnName: "coeffientVariance",
    boxPlotOverLayMethods: ["#fdd835", "#c6a700"],
    colors: ["", ""]
  },
  {
    name: "springTiming",
    display: "Spring Timing",
    isBoxplotOverlay: true,
    tableName: "Springs",
    columnName: "timing",
    short: "SP_Tim",
    as: "springs",
    boxPlotOverLayMethods: [
      "fetchSpringBoxPlotData",
      "removeSpringBoxPlotData"
    ],
    colors: ["#2e7d32", "#005005"]
  },
  {
    name: "springMagnitude",
    display: "Spring Magnitude",
    isBoxplotOverlay: true,
    tableName: "Springs",
    columnName: "magnitude",
    short: "SP_Mag",
    as: "springs",
    boxPlotOverLayMethods: [
      "fetchSpringBoxPlotData",
      "removeSpringBoxPlotData"
    ],
    colors: ["#388e3c", "#00600f"]
  },
  {
    name: "springDuration",
    display: "Spring Duration",
    isBoxplotOverlay: false,
    tableName: "Springs",
    columnName: "duration",
    short: "SP_Dur",
    as: "springs",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#43a047", "#00701a"]
  },
  {
    name: "springRateOfChange",
    display: "Spring Rate of Change",
    isBoxplotOverlay: false,
    tableName: "Springs",
    columnName: "rateOfChange",
    short: "SP_ROC",
    as: "springs",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#4caf50", "#087f23"]
  },
  {
    name: "summerTiming",
    display: "Summer Timing",
    isBoxplotOverlay: true,
    tableName: "Summers",
    columnName: "timing",
    as: "summers",
    short: "DS_Tim",
    boxPlotOverLayMethods: [
      "fetchSummerBoxPlotData",
      "removeSummerBoxPlotData"
    ],
    colors: ["#d84315", "#9f0000"]
  },
  {
    name: "summerMagnitude10",
    display: "Summer Magnitude 10P",
    isBoxplotOverlay: true,
    tableName: "Summers",
    columnName: "magnitude10",
    as: "summers",
    short: "DS_Mag_10",
    boxPlotOverLayMethods: [
      "fetchSummerBoxPlotData",
      "removeSummerBoxPlotData"
    ],
    colors: ["#e64a19", "#ac0800"]
  },
  {
    name: "summerMagnitude50",
    display: "Summer Magnitude 50P",
    isBoxplotOverlay: true,
    tableName: "Summers",
    columnName: "magnitude50",
    short: "DS_Mag_50",
    as: "summers",
    boxPlotOverLayMethods: [
      "fetchSummerBoxPlotData",
      "removeSummerBoxPlotData"
    ],
    colors: ["#f4511e", "#b91400"]
  },
  {
    name: "summerDurationFlush",
    display: "Summer Duration Flush",
    isBoxplotOverlay: false,
    tableName: "Summers",
    columnName: "durationFlush",
    short: "DS_Dur_WSI",
    as: "summers",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ff5722", "#c41c00"]
  },
  {
    name: "summerDurationWet",
    display: "Summer Duration Wet",
    isBoxplotOverlay: false,
    tableName: "Summers",
    columnName: "durationWet",
    as: "summers",
    short: "DS_Dur_WS",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ff7043", "#c63f17"]
  },
  {
    name: "summerNoFlow",
    display: "Summer No Flow Count",
    isBoxplotOverlay: false,
    tableName: "Summers",
    columnName: "noFlowCount",
    as: "summers",
    short: "DS_No_Flow",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ff8a65", "#c75b39"]
  },
  {
    name: "fallTiming",
    display: "Fall Timing",
    isBoxplotOverlay: true,
    tableName: "Falls",
    columnName: "timing",
    short: "WSI_Tim",
    as: "falls",
    boxPlotOverLayMethods: ["fetchFallBoxPlotData", "removeFallBoxPlotData"],
    colors: ["#ff8f00", "#c56000"]
  },
  {
    name: "fallMagnitude",
    display: "Fall Magnitude",
    isBoxplotOverlay: true,
    tableName: "Falls",
    columnName: "magnitude",
    as: "falls",
    short: "WSI_Mag",
    boxPlotOverLayMethods: ["fetchFallBoxPlotData", "removeFallBoxPlotData"],
    colors: ["#ffa000", "#c67100"]
  },
  {
    name: "fallTimingWet",
    display: "Fall Timing Wet",
    isBoxplotOverlay: true,
    tableName: "Falls",
    columnName: "timingWet",
    as: "falls",
    short: "Wet_Tim",
    boxPlotOverLayMethods: ["fetchFallBoxPlotData", "removeFallBoxPlotData"],
    colors: ["#ffb300", "#c68400"]
  },
  {
    name: "fallDuration",
    display: "Fall Duration",
    isBoxplotOverlay: false,
    tableName: "Falls",
    columnName: "duration",
    as: "falls",
    short: "WSI_Dur",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ffc107", "#c79100"]
  },
  {
    name: "fallWinterMagnitude",
    display: "Fall Winter Magnitude",
    isBoxplotOverlay: false,
    tableName: "FallWinters",
    columnName: "magWet",
    as: "fallWinters",
    short: "Wet_BFL_Mag",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#00695c", "#003d33"]
  },
  {
    name: "winterMagnitude2",
    display: "Winter Magnitude 2P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    columnName: "magnitude2",
    as: "winters",
    short: "Peak_Mag_2",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData"
    ],
    colors: ["#6a1b9a", "#38006b"]
  },
  {
    name: "winterMagnitude5",
    display: "Winter Magnitude 5P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Mag_5",
    columnName: "magnitude5",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData"
    ],
    colors: ["#8e24aa", "#5c007a"]
  },
  {
    name: "winterMagnitude10",
    display: "Winter Magnitude 10P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Mag_10",
    columnName: "magnitude10",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData"
    ],
    colors: ["#9c27b0", "#6a0080"]
  },
  {
    name: "winterMagnitude20",
    display: "Winter Magnitude 20P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    columnName: "magnitude20",
    short: "Peak_Mag_20",
    as: "winters",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData"
    ],
    colors: ["#ab47bc", "#790e8b"]
  },
  // {
  //   name: 'winterMagnitude50',
  //   display: 'Winter Magnitude 50P',
  //   isBoxplotOverlay: false,
  //   tableName: 'Winters',
  //   columnName: 'magnitude50',
  //   short: 'Peak_Mag_50',
  //   as: 'winters',
  //   boxPlotOverLayMethods: [
  //     'fetchWinterBoxPlotData',
  //     'removeWinterBoxPlotData',
  //   ],
  //   colors: ['#ba68c8', '#883997'],
  // },
  {
    name: "winterTiming2",
    display: "Winter Timing 2P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Tim_2",
    columnName: "timing2",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#6a1b9a", "#38006b"]
  },
  {
    name: "winterTiming5",
    display: "Winter Timing 5P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Tim_5",
    columnName: "timing5",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#8e24aa", "#5c007a"]
  },
  {
    name: "winterTiming10",
    display: "Winter Timing 10P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Tim_10",
    columnName: "timing10",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#9c27b0", "#6a0080"]
  },
  {
    name: "winterTiming20",
    display: "Winter Timing 20P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Tim_20",
    columnName: "timing20",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ab47bc", "#790e8b"]
  },
  // {
  //   name: 'winterTiming50',
  //   display: 'Winter Timing 50P',
  //   isBoxplotOverlay: false,
  //   tableName: 'Winters',
  //   as: 'winters',
  //   short: 'Peak_Tim_50',
  //   columnName: 'timing50',
  //   boxPlotOverLayMethods: ['', ''],
  //   colors: ['#ba68c8', '#883997'],
  // },
  {
    name: "winterDuration2",
    display: "Winter Duration 2P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Dur_2",
    columnName: "duration2",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#6a1b9a", "#38006b"]
  },
  {
    name: "winterDuration5",
    display: "Winter Duration 5P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Dur_5",
    columnName: "duration5",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#8e24aa", "#5c007a"]
  },
  {
    name: "winterDuration10",
    display: "Winter Duration 10P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Dur_10",
    columnName: "duration10",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#9c27b0", "#6a0080"]
  },
  {
    name: "winterDuration20",
    display: "Winter Duration 20P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Dur_20",
    columnName: "duration20",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ab47bc", "#790e8b"]
  },
  // {
  //   name: 'winterDuration50',
  //   display: 'Winter Duration 50P',
  //   isBoxplotOverlay: false,
  //   tableName: 'Winters',
  //   as: 'winters',
  //   short: 'Peak_Dur_50',
  //   columnName: 'duration50',
  //   boxPlotOverLayMethods: ['', ''],
  //   colors: ['#ba68c8', '#883997'],
  // },
  {
    name: "winterFrequency2",
    display: "Winter Frequency 2P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Fre_2",
    columnName: "frequency2",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#6a1b9a", "#38006b"]
  },
  {
    name: "winterFrequency5",
    display: "Winter Frequency 5P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Fre_5",
    columnName: "frequency5",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#8e24aa", "#5c007a"]
  },
  {
    name: "winterFrequency10",
    display: "Winter Frequency 10P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Fre_10",
    columnName: "frequency10",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#9c27b0", "#6a0080"]
  },
  {
    name: "winterFrequency20",
    display: "Winter Frequency 20P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    as: "winters",
    short: "Peak_Fre_20",
    columnName: "frequency20",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ab47bc", "#790e8b"]
  }
  // {
  //   name: 'winterFrequency50',
  //   display: 'Winter Frequency 50P',
  //   isBoxplotOverlay: false,
  //   tableName: 'Winters',
  //   as: 'winters',
  //   short: 'Peak_Fre_50',
  //   columnName: 'frequency50',
  //   boxPlotOverLayMethods: ['', ''],
  //   colors: ['#ba68c8', '#883997'],
  // },
];
