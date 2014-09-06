///////////////////////////////////////////////////////////////////////////
///////////////
/////////////// Form
function func_100_demo_5_theme_001() {
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.demoFormSeaGrey();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_demo5_demo_sample_1;
    usecase_array[++index] = k_dv_dataviz_demo5_demo_sample_2;
    usecase_array[++index] = k_dv_dataviz_demo5_demo_sample_3;
    usecase_array[++index] = k_dv_dataviz_demo5_demo_sample_4;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
};
// /////////////
// /////////////
// /////////////
k_dv_dataviz_demo5_demo_sample_1 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
                },
                "columnNames": {
                    "values": ["Amount1", "Amount2"]
                },
                "data": {
                    "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                    "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
                }
            };
            return chartData;
        };
    var getChartProperties = function() {
            ///////
            var dataviz_chartproperties_defaults = function() {
                    var value = {};
                    value["chartHeight"] = 48;
                    value["enableScrolling"] = false;
                    value["position"] = [0, 0, 100, 100];
                    ///
                    value["title"] = {
                        "visible": true,
                        "text": "Chart",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"],
                            "transparency": [0]
                        },
                        "position": "top",
                        "alignment": "center",
                        "direction": "up",
                        "containerWt": 15,
                        "margin": [0, 0, 0, 0],
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    ///
                    value["layerArea"] = {
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    // value["drawArea"] = properties["drawArea"];
                    ///
                    value["dataSetMapping"] = {
                        "setId": "dataset1",
                        "eventsSetId": "eventsMap1"
                    };
                    /////
                    return value;
                };
            // /////////////
            var dataviz_chartproperties_donutChart_singleSeries_defaults = function() {
                    // ////
                    var value = {};
                    var properties = dataviz_chartproperties_defaults();
                    value["chartHeight"] = properties["chartHeight"];
                    value["enableScrolling"] = properties["enableScrolling"];
                    value["position"] = properties["position"];
                    value["title"] = properties["title"];
                    value["layerArea"] = properties["layerArea"];
                    value["dataSetMapping"] = properties["dataSetMapping"];
                    // //////
                    value["drawEntities"] = ["donutChart"];
                    value["donutChart"] = {
                        "columnId": [0],
                        "animations": {
                            "onInitAnimation": true
                        },
                        "spinWheel": false,
                        "plotZeroValues": false,
                        "plotMissingValues": "assumeZero",
                        "direction": "clockWise",
                        "startAngle": 90,
                        "holeRadius": "auto",
                        "exploded": false,
                        "pieSlice": {
                            "fillType": ["color"],
                            "transparency": [0],
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                            "explodedIndex": [0, 1, 2],
                        },
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "dataLabels": {
                            "visible": true,
                            "indicators": ["numberValue"],
                            "separator": "space",
                            "placement": "inside",
                            "orientationAngle": 0,
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "connector": {
                                "visible": false,
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                            }
                        }
                    };
                    value.donutChart.dataLabels.visible = true;
                    value.donutChart.spinWheel = true;
                    return value;
                };
            // /////////////
            var chartProperties = dataviz_chartproperties_donutChart_singleSeries_defaults();
            chartProperties.chartHeight = 70;
            // title
            chartProperties.title.visible = true;
            chartProperties.title.text = "Olympic Medals : SpinWheel, onTouch indicators";
            chartProperties.title.font.color = ["0x000000ff"];
            chartProperties.title.font.size = [18];
            chartProperties.title.font.family = ["Helvetica"];
            chartProperties.title.alignment = "center";
            chartProperties.title.font.style = ["normal"];
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.color = ["0xF4F5F7FF", "0xAAAEB9FF"];
            chartProperties.title.containerWt = 10;
            chartProperties.layerArea.background.gradientType = "linearTopToBottom";
            chartProperties.layerArea.background.fillType = "gradient";
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.gradientRatios = [0, 30, 70, 100];
            chartProperties.layerArea.background.color = ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"];
            chartProperties.donutChart.holeRadius = 50;
            chartProperties.donutChart.margin = [0, 0, 0, 0];
            chartProperties.donutChart.exploded = false;
            chartProperties.donutChart.direction = "clockWise";
            /*
             * "clockWise",
             * "antiClockWise"
             */
            chartProperties.donutChart.startAngle = 0;
            chartProperties.donutChart.plotZeroValues = false;
            chartProperties.donutChart.columnId = [0];
            chartProperties.donutChart.pieSlice = {
                "fillType": ["gradient"],
                "gradientType": ["linearTopToBottom"],
                "transparency": [0],
                "color": [
                    ["0xf91818ff", "0x980a0aff"],
                    ["0xf31515ff", "0x500b0bff"],
                    ["0xcd3539ff", "0x470305ff"],
                    ["0xe53340ff", "0x6d030bff"],
                    ["0xf415f1ff", "0x460745ff"],
                    ["0xf415f1ff", "0x460745ff"],
                    ["0xf415f1ff", "0x460745ff"],
                    ["0x6253f6ff", "0x0a0538ff"],
                    ["0x6253f6ff", "0x0a0538ff"],
                    ["0x6253f6ff", "0x0a0538ff"]
                ]
            };
            chartProperties.donutChart.border = {
                "visible": true,
                "line": {
                    "width": [1],
                    "style": ["continuous"],
                    "visible": true,
                    "color": ["0xffffffff"],
                    "transparency": [0]
                }
            };
            chartProperties.donutChart.dataLabels = {
                "visible": true,
                "separator": "space",
                "placement": "inside",
                /* [inside, edge, outside, "center"] */"indicators": ["rowName"],
                /* ["numberValue","percentValue","columnName","rowName"] */"orientationAngle": 0,
                "connector": {
                    "visible": true,
                    "line": {
                        "width": [1],
                        "style": ["continuous"],
                        "visible": true,
                        "color": ["aaaaaaff"],
                        "transparency": [0]
                    }
                },
                "font": {
                    "family": ["HelveticaNeue"],
                    "style": ["Bold"],
                    "size": [15],
                    "transparency": [0],
                    "color": ["0xffffffff"]
                }
            };
            chartProperties.donutChart.animations = {
                "onInitAnimation": true
            };
            return chartProperties;
        };
    var getChartEvents = function() {
            var chartEventsDefaults = function() {
                    var onTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onTap - end");
                        };
                    var onDoubleTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onDoubleTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onDoubleTap - end");
                        };
                    var onLongPress = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onLongPress - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onLongPress - end");
                        };
                    var onPinch = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onPinch - begin");
                            kony.print("chartevents_onPinch - end");
                        };
                    var onSwipe = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onSwipe - begin");
                            kony.print("chartevents_onSwipe - end");
                        };
                    var onScrollDidReachEnd = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachEnd - begin");
                            kony.print("chartevents_onScrollDidReachEnd - end");
                        };
                    var onScrollDidReachBegin = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachBegin - begin");
                            kony.print("chartevents_onScrollDidReachBegin - end");
                        };
                    var value = {
                        "events": ["eventsMap1"],
                        "eventsMap1": {
                            "onTap": onTap,
                            "onDoubleTap": onDoubleTap,
                            "onLongPress": onLongPress,
                            "onPinch": onPinch,
                            "onSwipe": onSwipe,
                            "onScrollDidReachBegin": onScrollDidReachBegin,
                            "onScrollDidReachEnd": onScrollDidReachEnd,
                            "onPinchZoom": {
                                "minimumZoomScale": 1,
                                "maximumZoomScale": 2
                            },
                            "onTouch": {
                                "crossHair": {
                                    "line": {
                                        "color": ["0xAAAAAAFF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "dataLabels": {
                                    "visible": true,
                                    "indicators": ["numberValue"],
                                    "separator": "space",
                                    "font": {
                                        "size": [14],
                                        "family": ["Verdana"],
                                        "style": ["Bold"],
                                        "color": ["0xAAAAAAFF"],
                                        "transparency": [0],
                                    }
                                },
                                "border": {
                                    "visible": false,
                                    "line": {
                                        "color": ["0x000000FF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "background": {
                                    "fillType": "gradient",
                                    "transparency": 100,
                                    "gradientType": "linearTopToBottom",
                                    "gradientRatios": [0, 20, 50, 100],
                                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"],
                                }
                            }
                        }
                    };
                    return value;
                };
            var chartEvents = chartEventsDefaults();
            chartEvents.eventsMap1.onTouch = {
                "crossHair": null,
                "dataLabels": {
                    "visible": true,
                    "indicators": ["rowName", "numberValue"],
                    "separator": "space",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xffffffff"],
                        "transparency": [0]
                    },
                },
                "border": {
                    "visible": true,
                    "roundedCorner": false,
                    "line": {
                        "color": ["0xffffffff"],
                        "width": [2],
                        "transparency": [0]
                    }
                },
                "background": {
                    "fillType": "color",
                    "transparency": 30,
                    "color": ["0x000000ff"]
                }
            };
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////////////
k_dv_dataviz_demo5_demo_sample_2 = function() {
    // Bubble
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["01/2011", "02/2011", "03/2011", "04/2011", "05/2011", "06/2011", "07/2011", "08/2011", "09/2011", "10/2011", "11/2011", "12/2011", "01/2012", "02/2012", "03/2012", "04/2012"]
                },
                "columnNames": {
                    "values": ["Debit", "Credit"]
                },
                "data": {
                    "Debit": [300, 400, 500, 600, 1200, 1500, 1100, 1300, 345, 789, 50, 100, 56, 152, 67, 111],
                    "Credit": [100, 700, 300, 800, 900, 1100, 400, 800, 745, 989, 500, 400, 560, 652, 670, 1110]
                }
            };
            return chartData;
        };
    var getChartProperties = function() {
            ///////
            var dataviz_chartproperties_defaults = function() {
                    var value = {};
                    value["chartHeight"] = 48;
                    value["enableScrolling"] = false;
                    value["position"] = [0, 0, 100, 100];
                    ///
                    value["title"] = {
                        "visible": true,
                        "text": "Chart",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"],
                            "transparency": [0]
                        },
                        "position": "top",
                        "alignment": "center",
                        "direction": "up",
                        "containerWt": 15,
                        "margin": [0, 0, 0, 0],
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    ///
                    value["layerArea"] = {
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    // value["drawArea"] = properties["drawArea"];
                    ///
                    value["dataSetMapping"] = {
                        "setId": "dataset1",
                        "eventsSetId": "eventsMap1"
                    };
                    /////
                    value["axis"] = {
                        "visible": true,
                        "type": ["xAxis", "yAxis"]
                    };
                    /////    //
                    value["axis"]["xAxis"] = {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "fixedGapMajorInterval",
                            "gap": 150,
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels",
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": 0,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [1, 1, 1, 1],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    };
                    //////////
                    value["axis"]["yAxis"] = {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "linear",
                            "minValue": "auto",
                            "maxValue": "auto",
                            "majorInterval": "auto",
                            "minorInterval": "auto",
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels",
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": 0,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [1, 1, 1, 1],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    };
                    ///////////
                    /////////
                    value["grid"] = {
                        "visible": true,
                        "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid"],
                        "xAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "yAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "xAxisMinorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "yAxisMinorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "alternateGradientColor",
                            "alternateColorPattern": "xMajorMajor",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    return value;
                };
            // /////////////
            var dataviz_chartproperties_bubbleChart_singleSeries_defaults = function() {
                    // ////
                    var value = {};
                    var properties = dataviz_chartproperties_defaults();
                    value["chartHeight"] = properties["chartHeight"];
                    value["enableScrolling"] = properties["enableScrolling"];
                    value["position"] = properties["position"];
                    value["title"] = properties["title"];
                    value["layerArea"] = properties["layerArea"];
                    // value["drawArea"] = properties["drawArea"];
                    value["dataSetMapping"] = properties["dataSetMapping"];
                    value["axis"] = properties["axis"];
                    value["grid"] = properties["grid"];
                    // //////
                    value["drawEntities"] = ["axis", "grid", "bubbleChart"];
                    value["bubbleChart"] = {
                        "columnId": [0, 1],
                        "animations": {
                            "onInitAnimation": true,
                        },
                        "dataAlignToAxis": ["primaryYAxis"],
                        "plotMissingValues": "assumeZero",
                        "plotPoints": {
                            "marker": {
                                "type": ["circle"],
                                "fillType": "color",
                            },
                            "color": ["0x2a99ceff"],
                            "transparency": [0],
                            "size": [8]
                        },
                        "dataLabels": {
                            "visible": true,
                            "indicators": ["numberValue"],
                            "separator": "space",
                            "placement": "inside",
                            "orientationAngle": 0,
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                        }
                    };
                    value.chartHeight = 48;
                    value.bubbleChart.plotPoints.size = [30];
                    value.bubbleChart.plotPoints.color = ["0x7dc41bff"];
                    value.axis.xAxis.labels.markingReference = "atMinor";
                    value.bubbleChart.dataLabels = null;
                    return value;
                };
            // /////////////
            var chartProperties = dataviz_chartproperties_bubbleChart_singleSeries_defaults();
            chartProperties.chartHeight = 60;
            chartProperties.title.text = "Comparision Bubble Chart: PinchToZoom with onTouch indicators";
            chartProperties.title.font.color = ["0x000000ff"];
            chartProperties.title.alignment = "right";
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.color = ["0xF4F5F7FF", "0xAAAEB9FF"];
            chartProperties.title.containerWt = 10;
            chartProperties.enableScrolling = false;
            chartProperties.layerArea.background.color = ["0xAAAEB9FF", "0xF4F5F7FF"]
            /*
             * ["0xbfc0c1ff", "0x9da3a8ff", "0x8f969cff",
             * "0xa5a8aaff"]
             */
            ;
            chartProperties.layerArea.background.fillType = "gradient";
            chartProperties.layerArea.background.gradientType = "linearTopToBottom";
            chartProperties.layerArea.background.gradientRatios = [0, 100]
            /*
             * [0,
             * 20,
             * 40,
             * 100]
             */
            ;
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.font.size = [14];
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.intervalMarks.major.visible = true;
            chartProperties.axis.yAxis.intervalMarks.major.line.color = ["0x00000ff"];
            chartProperties.axis.xAxis.intervalMarks.major.line.color = ["0x00000ff"];
            chartProperties.axis.yAxis.intervalMarks.minor.line.color = ["0x00000ff"];
            chartProperties.axis.xAxis.intervalMarks.minor.line.color = ["0x00000ff"];
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.xAxis.labels.font.size = [14];
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.labels.orientationAngle = 90;
            chartProperties.grid.yAxisMajorGrid.line.color = ["0xbc7b82ff"];
            chartProperties.grid.xAxisMajorGrid.line.color = ["0x8b7fc0ff"];
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.axis.yAxis.scale.offset.value = [50, 50];
            chartProperties.axis.xAxis.scale.offset.value = [50, 50];
            chartProperties.axis.yAxis.axisLine.visible = false;
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "start";
            chartProperties.bubbleChart.plotPoints.color = ["0x4410c2ff", "0xe21926ff", "0xbb7e17ff", "0xdb9cd3ff", "0xe6550dff", "0xc3d021ff", "0xd53e37ff", "0x29c1cfff", "0x007877ff", "0x96bfdfff", "0x1281c3ff", "0xe01b08ff", "0x7dc41bff", "0xfc7f0eff", "0x725595ff", "0x32a3c3ff"];
            // ["0x4410c2ff", "0x89545cff", "0xbb7e17ff", "0x5d377dff",
            // "0xd76d4dff", "0xa58a4cff", "0xd53e37ff", "0xc6712fff", "0xc8af52ff",
            // "0xc4ad4dff"];
            chartProperties.bubbleChart.plotPoints.colorIndicator = "rows";
            chartProperties.bubbleChart.plotPoints.transparency = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
            chartProperties.bubbleChart.plotPoints.marker.type = ["bubble"];
            chartProperties.bubbleChart.plotPoints.size = [120];
            return chartProperties;
        };
    var getChartEvents = function() {
            var chartEventsDefaults = function() {
                    var onTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onTap - end");
                        };
                    var onDoubleTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onDoubleTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onDoubleTap - end");
                        };
                    var onLongPress = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onLongPress - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onLongPress - end");
                        };
                    var onPinch = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onPinch - begin");
                            kony.print("chartevents_onPinch - end");
                        };
                    var onSwipe = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onSwipe - begin");
                            kony.print("chartevents_onSwipe - end");
                        };
                    var onScrollDidReachEnd = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachEnd - begin");
                            kony.print("chartevents_onScrollDidReachEnd - end");
                        };
                    var onScrollDidReachBegin = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachBegin - begin");
                            kony.print("chartevents_onScrollDidReachBegin - end");
                        };
                    var value = {
                        "events": ["eventsMap1"],
                        "eventsMap1": {
                            "onTap": onTap,
                            "onDoubleTap": onDoubleTap,
                            "onLongPress": onLongPress,
                            "onPinch": onPinch,
                            "onSwipe": onSwipe,
                            "onScrollDidReachBegin": onScrollDidReachBegin,
                            "onScrollDidReachEnd": onScrollDidReachEnd,
                            "onPinchZoom": {
                                "minimumZoomScale": 1,
                                "maximumZoomScale": 2
                            },
                            "onTouch": {
                                "crossHair": {
                                    "line": {
                                        "color": ["0xAAAAAAFF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "dataLabels": {
                                    "visible": true,
                                    "indicators": ["numberValue"],
                                    "separator": "space",
                                    "font": {
                                        "size": [14],
                                        "family": ["Verdana"],
                                        "style": ["Bold"],
                                        "color": ["0xAAAAAAFF"],
                                        "transparency": [0],
                                    }
                                },
                                "border": {
                                    "visible": false,
                                    "line": {
                                        "color": ["0x000000FF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "background": {
                                    "fillType": "gradient",
                                    "transparency": 100,
                                    "gradientType": "linearTopToBottom",
                                    "gradientRatios": [0, 20, 50, 100],
                                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"],
                                }
                            }
                        }
                    };
                    return value;
                };
            var chartEvents = chartEventsDefaults();
            chartEvents.eventsMap1.onTouch.crossHair.line.width = [1];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0xd53e37ff"];
            chartEvents.eventsMap1.onTouch.background.color = ["0xAAAEB9FF", "0xF4F5F7FF", "0xF4F5F7FF", "0xAAAEB9FF"];
            chartEvents.eventsMap1.onTouch.background.transparency = 10;
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 40, 60, 100];
            chartEvents.eventsMap1.onTouch.dataLabels.indicators = ["columnName", "rowName", "numberValue"];
            chartEvents.eventsMap1.onTouch.dataLabels.separator = "newLine";
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0xd53e37ff"];
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
// /////////////
k_dv_dataviz_demo5_demo_sample_3 = function() {
    // area chart
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["01/2011", "02/2011", "03/2011", "04/2011", "05/2011", "06/2011", "07/2011", "08/2011", "09/2011", "10/2011", "11/2011", "12/2011", "01/2012", "02/2012", "03/2012", "04/2012", "05/2012", "06/2012", "07/2012", "08/2012", "09/2012", "10/2012", "11/2012", "12/2012"]
                },
                "columnNames": {
                    "values": ["Debit", "Credit", "Amount"]
                },
                "data": {
                    "Amount": [400, 350, 500, 5700, 5100, 3750, 2200, 1200, 100, 300, 2550, 6000, 5000, 2400, 150, 3040, 1000, 4350, 3440, 2240, 6000, 3240, 1250, 700, 3550, 5555, 2000, 700],
                    "Credit": [17500, 4959, 2050, 1600, 14907, 16100, 6500, 13100, 5900, 3500, 12700, 4100, 13100, 17300, 4050, 2900, 13200, 17400, 2600, 1200, 9938, 6200, 65, 4400, 5200, 4700, 1500, 1300],
                    "Debit": [2484, 3750, 50, 8200, 600, 4800, 4850, 5100, 4400, 5300, 6200, 8100, 7200, 7450, 3600, 4200, 3700, 8500, 1900, 3200, 2900, 2300, 2100]
                }
            };
            return chartData;
        };
    var getChartProperties = function() {
            ///////
            var dataviz_chartproperties_defaults = function() {
                    var value = {};
                    value["chartHeight"] = 48;
                    value["enableScrolling"] = false;
                    value["position"] = [0, 0, 100, 100];
                    ///
                    value["title"] = {
                        "visible": true,
                        "text": "Chart",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"],
                            "transparency": [0]
                        },
                        "position": "top",
                        "alignment": "center",
                        "direction": "up",
                        "containerWt": 15,
                        "margin": [0, 0, 0, 0],
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    /////
                    value["legend"] = {
                        "visible": false,
                        "indicators": ["marker", "rowName", "numberValue"],
                        "separator": "space",
                        "marker": {
                            "type": "roundedEdgeHorizontalColorBox",
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                        },
                        "rowName": {
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                            "margin": [5, 5, 0, 0],
                        },
                        "numberValue": {
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                            "margin": [5, 5, 0, 0],
                        },
                        "percentValue": {
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                            "margin": [5, 5, 0, 0],
                        },
                        "columnName": {
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                            "margin": [5, 5, 0, 0],
                        },
                        "textLabel": {
                            "text": ["Mortgages", "CreditCards", "Loans"],
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                            "margin": [5, 5, 0, 0],
                        },
                        "textValue": {
                            "text": ["$909", "$309", "$609"],
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                            "margin": [5, 5, 0, 0]
                        },
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"],
                            "transparency": [0]
                        },
                        "position": "right",
                        "alignment": "center",
                        "layout": "vertical",
                        "containerWt": 40,
                        "margin": [10, 10, 10, 10],
                        "padding": [10, 10, 10, 10],
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    ///
                    value["layerArea"] = {
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    // value["drawArea"] = properties["drawArea"];
                    ///
                    value["dataSetMapping"] = {
                        "setId": "dataset1",
                        "eventsSetId": "eventsMap1"
                    };
                    /////
                    value["axis"] = {
                        "visible": true,
                        "type": ["xAxis", "yAxis"]
                    };
                    /////    //
                    value["axis"]["xAxis"] = {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "fixedGapMajorInterval",
                            "gap": 150,
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels",
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": 0,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [1, 1, 1, 1],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    };
                    //////////
                    value["axis"]["yAxis"] = {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "linear",
                            "minValue": "auto",
                            "maxValue": "auto",
                            "majorInterval": "auto",
                            "minorInterval": "auto",
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels",
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": 0,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [1, 1, 1, 1],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    };
                    ///////////
                    /////////
                    value["grid"] = {
                        "visible": true,
                        "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid"],
                        "xAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "yAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "xAxisMinorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "yAxisMinorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "alternateGradientColor",
                            "alternateColorPattern": "xMajorMajor",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    return value;
                };
            // ////////////
            var dataviz_chartproperties_areaChart_singleSeries_defaults = function() {
                    // ////
                    var value = {};
                    var properties = dataviz_chartproperties_defaults();
                    value["chartHeight"] = properties["chartHeight"];
                    value["enableScrolling"] = properties["enableScrolling"];
                    value["position"] = properties["position"];
                    value["title"] = properties["title"];
                    value["legend"] = properties["legend"];
                    value["layerArea"] = properties["layerArea"];
                    // value["drawArea"] = properties["drawArea"];
                    value["dataSetMapping"] = properties["dataSetMapping"];
                    value["axis"] = properties["axis"];
                    value["grid"] = properties["grid"];
                    // //////
                    value["drawEntities"] = ["axis", "grid", "areaChart"];
                    value["areaChart"] = {
                        "columnId": [0],
                        "animations": {
                            "onInitAnimation": true,
                        },
                        "graphType": "normal",
                        "lineType": "normal",
                        "dataAlignToAxis": ["primaryYAxis"],
                        "plotMissingValues": "assumeZero",
                        "area": {
                            "fillType": ["color"],
                            "transparency": [0],
                            "color": ["0x00ff00ff"],
                            "colorAboveXAxis": ["0x00ff00ff"],
                            "colorBelowXAxis": ["0xff0000ff"],
                        },
                        "line": {
                            "visible": true,
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0],
                        },
                        "plotPoints": {
                            "visible": true,
                            "colorIndicator": "columns",
                            "marker": {
                                "type": ["circle"],
                                "fillType": "color",
                            },
                            "color": ["0x2a99ceff"],
                            "transparency": [0],
                            "size": [8],
                        },
                        "dataLabels": {
                            "visible": true,
                            "indicators": ["numberValue"],
                            "separator": "space",
                            "placement": "inside",
                            "orientationAngle": 0,
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                        }
                    };
                    value.chartHeight = 47;
                    // area chart
                    value.areaChart.line.color = ["0x2a99ceff"];
                    value.areaChart.line.width = [3];
                    value.areaChart.plotPoints.size = [12];
                    value.areaChart.area.transparency = [50];
                    value.areaChart.dataLabels = null;
                    // axis
                    value.axis.yAxis.axisLine.crossOtherAxisAt = "start";
                    value.axis.xAxis.title.alignment = "center";
                    value.axis.yAxis.labels.positionWrtMarkings = "middle";
                    value.axis.yAxis.labels.margin = [30, 0, 0, 0];
                    value.axis.xAxis.labels.margin = [0, 0, 30, 0];
                    // grid
                    value.grid.yAxisMajorGrid.visible = false;
                    value.grid.yAxisMinorGrid.visible = false;
                    value.grid.xAxisMajorGrid.visible = false;
                    value.grid.xAxisMinorGrid.visible = false;
                    return value;
                };
            // /////////////
            var chartProperties = dataviz_chartproperties_areaChart_singleSeries_defaults();
            chartProperties.chartHeight = 60;
            // title
            chartProperties.title.visible = true;
            chartProperties.title.containerWt = 10;
            chartProperties.title.text = "Agriculture Produce: MultiSeries, PinchToZoom, Crosshair";
            chartProperties.title.alignment = "right";
            chartProperties.title.font.color = ["0x000000FF"];
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.color = ["0xF4F5F7FF", "0xAAAEB9FF"];
            // layerarea
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.gradientRatios = [0, 30, 70, 100];
            chartProperties.layerArea.background.color = ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"];
            chartProperties.enableScrolling = false;
            // areachart
            chartProperties.areaChart.lineType = "smooth";
            chartProperties.areaChart.graphType = "stacked";
            chartProperties.areaChart.columnId = [0, 1, 2];
            chartProperties.areaChart.area.fillType = ["gradient"];
            chartProperties.areaChart.dataAlignToAxis = ["primaryYAxis", "primaryYAxis", "primaryYAxis"];
            chartProperties.areaChart.line.width = [2];
            chartProperties.areaChart.line.color = ["0x5c5ddc32", "0x6845aeff", "0xc15760b4"];
            chartProperties.areaChart.line.transparency = [30, 30, 30];
            chartProperties.areaChart.area.color = ["0x00ff00ff", "0x00ff00ff"];
            chartProperties.areaChart.area.colorAboveXAxis = [
                ["0x7e7fe1ff", "0xa6a7e8ff"],
                ["0x912CEEff", "0xb09ab4ff"],
                ["0xca573dff", "0xdac159ff"]
            ]; // ["0xce8747ff",
            // "0x8466b2ff",
            // "0x8e90e0ff"];
            chartProperties.areaChart.area.transparency = [0, 0, 0];
            chartProperties.areaChart.plotPoints.visible = false;
            // axis
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.font.size = [12];
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.scale.maxValue = 21000;
            chartProperties.axis.yAxis.scale.minValue = 0;
            chartProperties.axis.yAxis.scale.majorInterval = 3000;
            // chartProperties.axis.yAxis.scale.minorInterval = 1.5;
            chartProperties.axis.yAxis.intervalMarks.major.visible = true;
            chartProperties.axis.yAxis.intervalMarks.major.line.color = ["0x00000ff"];
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "start";
            chartProperties.axis.xAxis.labels.markingReference = "atMinor";
            chartProperties.axis.xAxis.labels.positionWrtMarkings = "center";
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.orientationAngle = 90;
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.background.transparency = [0];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.fillType = "alternateColor";
            chartProperties.grid.background.alternateColorPattern = "yMajorMajor";
            chartProperties.grid.background.color = ["0xcdcfd7FF", "0xdee0e6FF"];
            // legend
            chartProperties.legend.visible = true;
            chartProperties.legend.indicators = ["marker", "textLabel"];
            chartProperties.legend.marker.type = "colorBox";
            chartProperties.legend.marker.color = ["0x7e7fe1ff", "0x912CEEff", "0xca573dff"];
            chartProperties.legend.textLabel.text = ["Rice", "Wheat", "Barley"];
            chartProperties.legend.textLabel.color = ["0x000000ff", "0x000000ff", "0x000000ff"];
            chartProperties.legend.textLabel.margin = [3, 5, 1, 1];
            chartProperties.legend.position = "bottom";
            chartProperties.legend.layout = "horizantal";
            chartProperties.legend.alignment = "center";
            chartProperties.legend.containerWt = 8;
            chartProperties.legend.padding = [1, 1, 1, 1];
            chartProperties.legend.font.style = ["normal"];
            chartProperties.legend.font.size = [12];
            return chartProperties;
        };
    var getChartEvents = function() {
            var chartEventsDefaults = function() {
                    var onTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onTap - end");
                        };
                    var onDoubleTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onDoubleTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onDoubleTap - end");
                        };
                    var onLongPress = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onLongPress - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onLongPress - end");
                        };
                    var onPinch = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onPinch - begin");
                            kony.print("chartevents_onPinch - end");
                        };
                    var onSwipe = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onSwipe - begin");
                            kony.print("chartevents_onSwipe - end");
                        };
                    var onScrollDidReachEnd = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachEnd - begin");
                            kony.print("chartevents_onScrollDidReachEnd - end");
                        };
                    var onScrollDidReachBegin = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachBegin - begin");
                            kony.print("chartevents_onScrollDidReachBegin - end");
                        };
                    var value = {
                        "events": ["eventsMap1"],
                        "eventsMap1": {
                            "onTap": onTap,
                            "onDoubleTap": onDoubleTap,
                            "onLongPress": onLongPress,
                            "onPinch": onPinch,
                            "onSwipe": onSwipe,
                            "onScrollDidReachBegin": onScrollDidReachBegin,
                            "onScrollDidReachEnd": onScrollDidReachEnd,
                            "onPinchZoom": {
                                "minimumZoomScale": 1,
                                "maximumZoomScale": 2
                            },
                            "onTouch": {
                                "crossHair": {
                                    "line": {
                                        "color": ["0xAAAAAAFF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "dataLabels": {
                                    "visible": true,
                                    "indicators": ["numberValue"],
                                    "separator": "space",
                                    "font": {
                                        "size": [14],
                                        "family": ["Verdana"],
                                        "style": ["Bold"],
                                        "color": ["0xAAAAAAFF"],
                                        "transparency": [0],
                                    }
                                },
                                "border": {
                                    "visible": false,
                                    "line": {
                                        "color": ["0x000000FF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "background": {
                                    "fillType": "gradient",
                                    "transparency": 100,
                                    "gradientType": "linearTopToBottom",
                                    "gradientRatios": [0, 20, 50, 100],
                                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"],
                                }
                            }
                        }
                    };
                    return value;
                };
            var chartEvents = chartEventsDefaults();
            chartEvents.eventsMap1.onTouch.crossHair.line.width = [1];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0x7e7fe1ff"];
            chartEvents.eventsMap1.onTouch.background.color = ["0xAAAEB9FF", "0xF4F5F7FF", "0xF4F5F7FF", "0xAAAEB9FF"];
            chartEvents.eventsMap1.onTouch.background.transparency = 10;
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 40, 60, 100];
            chartEvents.eventsMap1.onTouch.dataLabels.indicators = ["columnName", "rowName", "numberValue"];
            chartEvents.eventsMap1.onTouch.dataLabels.separator = "newLine";
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0x7e7fe1ff"];
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
k_dv_dataviz_demo5_demo_sample_4 = function() {
    // Bar - multiseries - stacked
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["KKR-Won", "KKR-Lost", "KKR-Tie", "KKR", "RCB-Won", "RCB-Lost", "RCB-Tie", "RCB", "DC-Won", "DC-Lost", "DC-Tie", "DC", "CSK-Won", "CSK-Lost", "CSK-Tie", "CSK"]
                },
                "columnNames": {
                    "values": ["Won", "Lost", "Tie", ]
                },
                "data": {
                    "Won": [51, null, null, 51, 23, null, null, 23, 28, null, null, 28, 21, null, null, 21],
                    "Lost": [null, 28, null, 28, null, 28, null, 28, null, 15, null, 15, null, 10, null, 10],
                    "Tie": [null, null, 27, 27, null, null, 21, 21, null, null, 17, 17, null, null, 15, 15]
                }
            };
            return chartData;
        };
    var getChartProperties = function() {
            ///////
            var dataviz_chartproperties_defaults = function() {
                    var value = {};
                    value["chartHeight"] = 48;
                    value["enableScrolling"] = false;
                    value["position"] = [0, 0, 100, 100];
                    ///
                    value["title"] = {
                        "visible": true,
                        "text": "Chart",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"],
                            "transparency": [0]
                        },
                        "position": "top",
                        "alignment": "center",
                        "direction": "up",
                        "containerWt": 15,
                        "margin": [0, 0, 0, 0],
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    /////
                    ///
                    value["layerArea"] = {
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "gradient",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    // value["drawArea"] = properties["drawArea"];
                    ///
                    value["dataSetMapping"] = {
                        "setId": "dataset1",
                        "eventsSetId": "eventsMap1"
                    };
                    /////
                    value["axis"] = {
                        "visible": true,
                        "type": ["xAxis", "yAxis"]
                    };
                    /////    //
                    value["axis"]["xAxis"] = {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "fixedGapMajorInterval",
                            "gap": 150,
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels",
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": 0,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [1, 1, 1, 1],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    };
                    //////////
                    value["axis"]["yAxis"] = {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "linear",
                            "minValue": "auto",
                            "maxValue": "auto",
                            "majorInterval": "auto",
                            "minorInterval": "auto",
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels",
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": 0,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [1, 1, 1, 1],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    };
                    /////////
                    value["grid"] = {
                        "visible": true,
                        "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid"],
                        "xAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "yAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "xAxisMinorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "yAxisMinorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "alternateGradientColor",
                            "alternateColorPattern": "xMajorMajor",
                            "transparency": 100,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [0, 20, 50, 100],
                            "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                        }
                    };
                    return value;
                };
            // /////////////
            var dataviz_chartproperties_barChart_singleSeries_defaults = function() {
                    // ////
                    var value = {};
                    var properties = dataviz_chartproperties_defaults();
                    value["chartHeight"] = properties["chartHeight"];
                    value["enableScrolling"] = properties["enableScrolling"];
                    value["position"] = properties["position"];
                    value["title"] = properties["title"];
                    value["layerArea"] = properties["layerArea"];
                    // value["drawArea"] = properties["drawArea"];
                    value["dataSetMapping"] = properties["dataSetMapping"];
                    value["axis"] = properties["axis"];
                    value["grid"] = properties["grid"];
                    // //////
                    value["chartHeight"] = 40;
                    value["drawEntities"] = ["axis", "grid", "barChart"];
                    value["barChart"] = {
                        "columnId": [0],
                        "animations": {
                            "onInitAnimation": true
                        },
                        "graphType": "normal",
                        "dataAlignToAxis": ["primaryXAxis"],
                        "plotMissingValues": "assumeZero",
                        "bar": {
                            "width": [400],
                            "fillType": ["color"],
                            "transparency": [0],
                            "gradientType": ["linearTopToBottom"],
                            "gradientRatios": [
                                [0, 20, 50, 100]
                            ],
                            "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF", "0xff0000ff", "0x00ff00ff", "0x0000ffff"],
                        },
                        "border": {
                            "visible": false,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "dataLabels": {
                            "visible": true,
                            "indicators": ["numberValue"],
                            "separator": "space",
                            "placement": "inside",
                            "orientationAngle": 0,
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                        }
                    };
                    // barchart
                    // axis
                    value.axis.type = ["xAxis", "yAxis"];
                    var xScale = value.axis.xAxis.scale;
                    value.axis.xAxis.scale = value.axis.yAxis.scale;
                    value.axis.yAxis.scale = xScale;
                    value.axis.xAxis.axisLine.crossOtherAxisAt = "start";
                    // grid
                    value.grid.yAxisMajorGrid.visible = false;
                    value.grid.yAxisMinorGrid.visible = false;
                    value.title.alignment = "left";
                    value.title.containerWt = 10;
                    value.title.background.transparency = 0;
                    value.title.background.gradientRatios = [0, 100];
                    value.title.background.color = ["0x146EBDFF", "0x05102Bff"];
                    value.layerArea.background.transparency = 0;
                    value.layerArea.background.gradientRatios = [0, 100];
                    value.layerArea.background.color = ["0x146EBDFF", "0x05102Bff"];
                    return value;
                };
            // /////////////
            var chartProperties = dataviz_chartproperties_barChart_singleSeries_defaults();
            chartProperties.barChart.columnId = [0, 1, 2];
            chartProperties.barChart.graphType = "stacked";
            chartProperties.chartHeight = 50;
            chartProperties.barChart.bar.fillType = ["gradient"];
            chartProperties.barChart.bar.gradientType = ["linearTopToBottom"];
            chartProperties.barChart.plotMissingValues = "leaveGap";
            chartProperties.layerArea.background.color = ["0xAAAEB9FF", "0xF4F5F7FF"];
            chartProperties.layerArea.background.fillType = "gradient";
            chartProperties.layerArea.background.gradientRatios = [0, 100];
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.barChart.dataAlignToAxis = ["primaryXAxis"];
            chartProperties.barChart.bar.color = [
                [
                    ["0xd23535ff", "0xea4342ff"], null, null, ["0xd23535ff", "0xea4342ff"],
                    ["0xbd3546ff", "0xbe487cff"], null, null, ["0xbd3546ff", "0xbe487cff"],
                    ["0x8e398fff", "0xb247b2ff"], null, null, ["0x8e398fff", "0xb247b2ff"],
                    ["0x5439bdff", "0x7a47bfff"], null, null, ["0x5439bdff", "0x7a47bfff"]
                ],
                [
                    ["0xe66136ff", "0xe07943ff"],
                    ["0xe66136ff", "0xe07943ff"], null, ["0xe66136ff", "0xe07943ff"], null, ["0xbc5e4aff", "0xbd7d72ff"], null, ["0xbc5e4aff", "0xbd7d72ff"], null, ["0xa56994ff", "0xb37aa7ff"], null, ["0xa56994ff", "0xb37aa7ff"], null, ["0x6664bcff", "0x7c7cbfff"], null, ["0x6664bcff", "0x7c7cbfff"]
                ],
                [
                    ["0xfb7f38ff", "0xf69644ff"], null, ["0xfb7f38ff", "0xf69644ff"],
                    ["0xfb7f38ff", "0xf69644ff"], null, null, ["0xbb7e44ff", "0xbe8783ff"],
                    ["0xbb7e44ff", "0xbe8783ff"], null, null, ["0xbf8186ff", "0xc1897eff"],
                    ["0xbf8186ff", "0xc1897eff"], null, null, ["0x7581bcff", "0x7d88bfff"],
                    ["0x7581bcff", "0x7d88bfff"]
                ], ];
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.xAxisMajorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.background.transparency = [0];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.fillType = "alternateColor";
            chartProperties.grid.background.alternateColorPattern = "xMajorMajor";
            chartProperties.grid.background.color = ["0xE9E9E9FF", "0xDEE0E5FF"];
            chartProperties.barChart.border.visible = true;
            chartProperties.barChart.border.line.width = [1];
            chartProperties.barChart.border.line.color = ["0xFFFFFFFF"
            /*
             * ,
             * "0xbca957ff",
             * "0xe9b51fff",
             * "0x000000ff",
             * "0xc7c7c7ff",
             * "0xb2d875ff"
             */];
            chartProperties.barChart.bar.transparency = [0];
            // datalabels
            chartProperties.barChart.dataLabels.visible = true;
            chartProperties.barChart.dataLabels.font.color = ["0x000000ff"]; // "0x4c4c4cff"
            chartProperties.barChart.dataLabels.font.size = [11];
            chartProperties.barChart.dataLabels.font.style = ["normal"];
            chartProperties.barChart.dataLabels.font.transparency = [30];
            // axis
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.font.size = [12];
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.scale.maxValue = 120;
            chartProperties.axis.xAxis.scale.minValue = 0;
            chartProperties.axis.xAxis.scale.majorInterval = 10;
            chartProperties.axis.xAxis.labels.positionWrtMarkings = "center";
            chartProperties.axis.xAxis.intervalMarks.major.line.color = ["0x000000ff"];
            chartProperties.axis.xAxis.intervalMarks.minor.line.color = ["0x000000ff"];
            chartProperties.axis.yAxis.intervalMarks.visible = false;
            chartProperties.axis.yAxis.labels.visible = true;
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.font.size = [12];
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.labels.markingReference = "atMinor";
            chartProperties.title.visible = true;
            chartProperties.title.text = "Team Win Analysis: MultiSeries, PichToZoom, onTouch indicators";
            chartProperties.title.font.color = ["0x000000FF"];
            chartProperties.title.font.size = [16];
            chartProperties.title.font.family = ["Helvetica"];
            chartProperties.title.alignment = "right";
            chartProperties.title.font.style = ["bold"];
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.color = ["0xF4F5F7FF", "0xAAAEB9FF"];
            chartProperties.title.containerWt = 10;
            chartProperties.title.border.visible = false;
            return chartProperties;
        };
    var getChartEvents = function() {
            var chartEventsDefaults = function() {
                    var onTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onTap - end");
                        };
                    var onDoubleTap = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onDoubleTap - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onDoubleTap - end");
                        };
                    var onLongPress = function(args) {
                            // var widgetId = args["widgetId"];
                            var columnNumber = args["columnNumber"];
                            var rowNumber = args["rowNumber"];
                            var dataElement = args["dataElement"];
                            kony.print("chartevents");
                            kony.print("chartevents_onLongPress - begin");
                            kony.print(columnNumber);
                            kony.print(rowNumber);
                            kony.print(dataElement);
                            kony.print("chartevents_onLongPress - end");
                        };
                    var onPinch = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onPinch - begin");
                            kony.print("chartevents_onPinch - end");
                        };
                    var onSwipe = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onSwipe - begin");
                            kony.print("chartevents_onSwipe - end");
                        };
                    var onScrollDidReachEnd = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachEnd - begin");
                            kony.print("chartevents_onScrollDidReachEnd - end");
                        };
                    var onScrollDidReachBegin = function(args) {
                            // var widgetId = args["widgetId"];
                            kony.print("chartevents");
                            kony.print("chartevents_onScrollDidReachBegin - begin");
                            kony.print("chartevents_onScrollDidReachBegin - end");
                        };
                    var value = {
                        "events": ["eventsMap1"],
                        "eventsMap1": {
                            "onTap": onTap,
                            "onDoubleTap": onDoubleTap,
                            "onLongPress": onLongPress,
                            "onPinch": onPinch,
                            "onSwipe": onSwipe,
                            "onScrollDidReachBegin": onScrollDidReachBegin,
                            "onScrollDidReachEnd": onScrollDidReachEnd,
                            "onPinchZoom": {
                                "minimumZoomScale": 1,
                                "maximumZoomScale": 2
                            },
                            "onTouch": {
                                "crossHair": {
                                    "line": {
                                        "color": ["0xAAAAAAFF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "dataLabels": {
                                    "visible": true,
                                    "indicators": ["numberValue"],
                                    "separator": "space",
                                    "font": {
                                        "size": [14],
                                        "family": ["Verdana"],
                                        "style": ["Bold"],
                                        "color": ["0xAAAAAAFF"],
                                        "transparency": [0],
                                    }
                                },
                                "border": {
                                    "visible": false,
                                    "line": {
                                        "color": ["0x000000FF"],
                                        "width": [1],
                                        "transparency": [0],
                                    }
                                },
                                "background": {
                                    "fillType": "gradient",
                                    "transparency": 100,
                                    "gradientType": "linearTopToBottom",
                                    "gradientRatios": [0, 20, 50, 100],
                                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"],
                                }
                            }
                        }
                    };
                    return value;
                };
            var chartEvents = chartEventsDefaults();
            chartEvents.eventsMap1.onTouch.crossHair.line.width = [1];
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0x000000FF"];
            chartEvents.eventsMap1.onTouch.crossHair.line.transparency = [20];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0x000000ff"];
            chartEvents.eventsMap1.onTouch.background.color = ["0xAAAEB9FF"];
            chartEvents.eventsMap1.onTouch.background.transparency = 20;
            chartEvents.eventsMap1.onTouch.background.fillType = "color";
            chartEvents.eventsMap1.onTouch.dataLabels.indicators = ["columnName", "rowName", "numberValue"];
            chartEvents.eventsMap1.onTouch.dataLabels.separator = "newLine";
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0x000000ff"];
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// //////////////////
// /////////////////////////////////////////////////////////////////////////