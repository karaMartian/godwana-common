///////////////////////////////////////////////////////////////////////////
///////////////
k_dv.dataviz.demos.demo9 = {};
// /////////////
function func_100_demo_9() {
    k_dv.dataviz.demos.demo9.chartWidgetId = [];
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.demoFormSeaGrey();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_demo9_demo_sample_0;
    usecase_array[++index] = k_dv_dataviz_demo9_demo_sample_1;
    // execute
    k_dv.dataviz.app.initViewForm(demoViewForm);
    for (var i = 0; i < usecase_array.length; i++) {
        var chartInfo = usecase_array[i]();
        var chartIndex = demoIndex++;
        var chart2d3d = k_dv.dataviz.app.showOnFormWithContainerIndex(
        chartIndex, chartInfo, demoViewForm);
        k_dv.dataviz.demos.demo9.chartWidgetId[i] = chart2d3d;
    }
    demoViewForm.show();
};
// /////////////
// /////////////
k_dv_dataviz_demo9_demo_sample_0 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["Gold", "Silver", "Bronze"]
                },
                "columnNames": {
                    "values": ["Medals"]
                },
                "data": {
                    "Medals": [20, 30, 20]
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
            // /////////////
            var dataviz_chartproperties_columnChart_singleSeries_defaults = function() {
                    // ////
                    var value = {};
                    var properties = dataviz_chartproperties_defaults();
                    value["chartHeight"] = properties["chartHeight"];
                    value["enableScrolling"] = properties["enableScrolling"];
                    value["position"] = properties["position"];
                    value["title"] = properties["title"];
                    // value["legend"] = properties["legend"];
                    value["layerArea"] = properties["layerArea"];
                    // value["drawArea"] = properties["drawArea"];
                    value["dataSetMapping"] = properties["dataSetMapping"];
                    value["axis"] = properties["axis"];
                    value["grid"] = properties["grid"];
                    // //////
                    value["chartHeight"] = 40;
                    value["drawEntities"] = ["axis", "grid", "columnChart"];
                    value["columnChart"] = {
                        "columnId": [0],
                        "animations": {
                            "onInitAnimation": true
                        },
                        "graphType": "normal",
                        "dataAlignToAxis": ["primaryYAxis"],
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
                    // columnchart
                    value.columnChart.dataLabels = null;
                    // axis
                    value.axis.yAxis.axisLine.crossOtherAxisAt = "start";
                    value.axis.xAxis.title.alignment = "center";
                    value.axis.xAxis.labels.markingReference = "atMinor";
                    value.axis.yAxis.labels.positionWrtMarkings = "middle";
                    value.axis.yAxis.labels.margin = [30, 0, 0, 0];
                    value.axis.xAxis.labels.margin = [0, 0, 30, 0];
                    // grid
                    value.grid.xAxisMajorGrid.visible = false;
                    value.grid.xAxisMinorGrid.visible = false;
                    value.title.alignment = "right";
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
            var chartProperties = dataviz_chartproperties_columnChart_singleSeries_defaults();
            chartProperties.chartHeight = 40;
            chartProperties.title.background.transparency = 100;
            chartProperties.title.font.color = ["0x000000ff"];
            chartProperties.title.text = null;
            chartProperties.layerArea.background.gradientType = "linearTopToBottom";
            chartProperties.layerArea.background.fillType = "gradient";
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.gradientRatios = [0, 30, 70, 100];
            // chartProperties.layerArea.background.color = ["0xecedf0FF",
            // "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"];
            chartProperties.layerArea.background.color = ["0xffffffFF"];
            chartProperties.enableScrolling = false;
            chartProperties.columnChart.bar.fillType = ["gradient"];
            chartProperties.columnChart.bar.color = [
                ["0xF41717FF", "0x9B0A0AFF"],
                ["0xF524F2FF", "0x520851FF"],
                ["0x5E4FEEFF", "0x0D083FFF"]
            ];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.yAxis.axisLine.visible = false;
            // chartProperties.axis.yAxis.intervalMarks.visible = false;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
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
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
k_dv_dataviz_demo9_demo_sample_1 = function() {
    k_dv_dataviz_setdata_donutchart_chartinfo = function() {
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
                var dataviz_chartproperties_donutChart_singleSeries_defaults = function() {
                        // ////
                        var value = {};
                        var properties = dataviz_chartproperties_defaults();
                        value["chartHeight"] = properties["chartHeight"];
                        value["enableScrolling"] = properties["enableScrolling"];
                        value["position"] = properties["position"];
                        value["title"] = properties["title"];
                        // value["legend"] = properties["legend"];
                        value["layerArea"] = properties["layerArea"];
                        // value["drawArea"] = properties["drawArea"];
                        value["dataSetMapping"] = properties["dataSetMapping"];
                        value["axis"] = properties["axis"];
                        value["grid"] = properties["grid"];
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
                    /* [inside, edge, outside, "center"] */
                    "indicators": ["rowName"],
                    /* ["numberValue","percentValue","columnName","rowName"] */
                    "orientationAngle": 0,
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
    // /////////////
    // /////////////
    onTapFunction = function(args) {
        //var widgetId = args["widgetId"];
        var columnNumber = args["columnNumber"];
        var rowNumber = args["rowNumber"];
        var dataElement = args["dataElement"];
        kony.print("chartevents --- usecase_1_onTap");
        kony.print("chartevents_onTap - begin");
        kony.print("chartevents_onTap - columnNumber");
        kony.print(columnNumber);
        kony.print("chartevents_onTap - rowNumber");
        kony.print(rowNumber);
        kony.print(dataElement);
        var getChartDataSrc = function() {
                var chartData = {
                    "rowNames": {
                        "values": ["Aus", "Bel", "Can", "Denm", "Egy", "Fin", "Fra", "Chin", "Ind", "Bri", "Ita", "Lib", "Mal", "Pak", "Rom", "USA"]
                    },
                    "columnNames": {
                        "values": ["GOLD", "SLIVER", "BRONZ", "TOTAL", "AMOUNT"]
                    },
                    "data": {
                        "GOLD": [30, 40, 50, 60, 12, 15, 11, 13, 34, 78, 50, 10, 56, 15, 67, 11],
                        "SLIVER": [10, 70, 30, 80, 90, 11, 40, 80, 75, 98, 50, 0, 50, 65, 60, 23],
                        "BRONZ": [34, 50, 55, 60, 16, 19, 77, 54, 35, 89, 50, 100, 56, 52, 74, 78],
                        "TOTAL": [74, 160, 135, 200, 118, 45, 128, 147, 144, 265, 150, 110, 162, 132, 201, 112],
                        "AMOUNT": [3400, 5000, 505, 600, 1600, 1978, 7547, 5224, 3532, 8009, 2350, 1300, 5006, 5222, 7884, 7128]
                    }
                };
                return chartData;
            };
        var getChartData = function() {
                var chartData = {
                    "rowNames": {
                        "values": ["Gold", "Silver", "Bronze"]
                    },
                    "columnNames": {
                        "values": ["Medals"]
                    },
                    "data": {
                        "Medals": [40, 50, 20]
                    }
                };
                return chartData;
            };
        if (rowNumber >= 0) {
            var chartDataSrc = getChartDataSrc();
            var chartData = getChartData();
            chartData.data.Medals[0] = chartDataSrc.data.GOLD[rowNumber];
            chartData.data.Medals[1] = chartDataSrc.data.SLIVER[rowNumber];
            chartData.data.Medals[2] = chartDataSrc.data.BRONZ[rowNumber];
            k_dv.dataviz.demos.demo9.chartWidgetId[0].setData(chartData);
        }
        kony.print("chartevents_onTap - end");
    };
    // /////////////
    var chartInfo = k_dv_dataviz_setdata_donutchart_chartinfo();
    chartInfo.chartEvents.eventsMap1.onTap = onTapFunction;
    chartInfo.chartProperties.title.text = "Olympic Medals: SpinWheel onTap sets ColumnChart data";
    chartInfo.chartProperties.chartHeight = 58;
    return chartInfo;
};
// /////////////////////////////////////////////////////////////////////////