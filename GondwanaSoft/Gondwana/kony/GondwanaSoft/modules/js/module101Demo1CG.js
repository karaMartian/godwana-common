///////////////////////////////////////////////////////////////////////////
///////////////
///////////////
function func_100_demo_1_cg_main() {
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.demoFormCG();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_demo1_cg_demo_sample_1;
    usecase_array[++index] = k_dv_dataviz_demo1_cg_demo_sample_2;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
};
// /////////////
// /////////////
k_dv_dataviz_demo1_cg_demo_sample_1 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
                },
                "columnNames": {
                    "values": ["C1"]
                },
                "data": {
                    "C1": [52, -53, 17, 97, 79, -63, -39, -54, 23, -34, 56, 68, 89, 64, 35, -78, -9, 64, -73, 34, 76, -43, 23, 79, 45, -84, -19, -25, 12, -34]
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
                    ///////////
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
            chartProperties.columnChart.columnId = [0];
            chartProperties.chartHeight = 50;
            chartProperties.enableScrolling = true;
            // layer
            chartProperties.layerArea.background.gradientType = "linearTopToBottom";
            chartProperties.layerArea.background.color = ["0x054486FF", "0x0599D3FF", "0x054486FF", "0x0599D3FF"];
            chartProperties.layerArea.background.fillType = "gradient";
            chartProperties.layerArea.background.gradientRatios = [0, 50, 100];
            chartProperties.layerArea.background.transparency = 0;
            // columnchart
            chartProperties.columnChart.dataAlignToAxis = ["primaryYAxis"];
            chartProperties.columnChart.graphType = "normal"; // "clustered","stacked"
            chartProperties.columnChart.border.visible = true;
            chartProperties.columnChart.border.line.width = [1];
            chartProperties.columnChart.border.line.color = ["0xadc4d8ff"];
            chartProperties.columnChart.border.line.transparency = [90];
            chartProperties.columnChart.bar.color = [
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x37bbf2ff", "0x37b3f7ff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x37bbf2ff", "0x37b3f7ff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x2b9bd1ff", "0x2b639dff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0xaaaaaaff", "0xabc4dbff"],
                ["0x37bbf2ff", "0x37b3f7ff"],
                ["0x2b9bd1ff", "0x2b639dff"]
            ];
            chartProperties.columnChart.bar.fillType = ["gradient"];
            chartProperties.columnChart.bar.gradientType = ["linearTopToBottom"];
            chartProperties.columnChart.bar.transparency = [30];
            chartProperties.columnChart.dataLabels = null;
            // axis
            chartProperties.axis.margin = [0, 0, 0, 0];
            // yaxis
            chartProperties.axis.yAxis.labels.font.color = ["0xfefefeff"]; // "0x5b5b5bff"
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.markingReference = "atMajor";
            chartProperties.axis.yAxis.labels.font.size = [10];
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.labels.position = "inner";
            chartProperties.axis.yAxis.scale.minValue = -100;
            chartProperties.axis.yAxis.scale.maxValue = 100;
            chartProperties.axis.yAxis.scale.majorInterval = 25;
            chartProperties.axis.yAxis.scale.offset.value = [0, 0];
            chartProperties.axis.yAxis.scale.offset.type = "pixels";
            chartProperties.axis.yAxis.intervalMarks.visible = false;
            chartProperties.axis.yAxis.axisLine.visible = false;
            // xaxis
            chartProperties.axis.xAxis.scale.offset.type = "pixels";
            chartProperties.axis.xAxis.scale.offset.value = [150, 0];
            chartProperties.axis.xAxis.scale.gap = 40;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            chartProperties.axis.xAxis.labels.font.color = ["0xfefefeff"];
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.labels.font.size = [10];
            chartProperties.axis.xAxis.labels.markingReference = "atMinor";
            chartProperties.axis.xAxis.labels.positionWrtMarkings = "center";
            chartProperties.axis.xAxis.labels.placement = "oppositeAxis";
            chartProperties.axis.xAxis.labels.margin = [20, 0, 0, 0];
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "mid";
            chartProperties.axis.xAxis.axisLine.visible = false;
            // grid
            chartProperties.grid.xAxisMajorGrid.visible = false;
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.yAxisMajorGrid.line.transparency = [90];
            chartProperties.grid.xAxisMajorGrid.line.transparency = [90];
            chartProperties.grid.yAxisMajorGrid.line.color = ["0x0d76afff"];
            chartProperties.grid.xAxisMajorGrid.line.color = ["0x0d76afff"];
            chartProperties.grid.background.visible = false;
            // title
            chartProperties.title.visible = true;
            chartProperties.title.text = "Account Balance: Scrolling, PinchToZoom, Crosshair";
            chartProperties.title.font.color = ["0xffffffff"];
            chartProperties.title.font.size = [14];
            chartProperties.title.font.family = ["Helvetica"];
            chartProperties.title.alignment = "left";
            chartProperties.title.font.style = ["bold"];
            chartProperties.title.background.color = ["0x054486FF", "0x0599D3FF"];
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.fillType = "gradient";
            chartProperties.title.containerWt = 10;
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
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.background.transparency = 0;
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 50, 50, 100];
            chartEvents.eventsMap1.onTouch.background.gradientType = "linearTopToBottom";
            chartEvents.eventsMap1.onTouch.background.color = ["0x0599D3FF", "0x054486FF", "0x054486FF", "0x0599D3FF"];
            chartEvents.eventsMap1.onTouch.border.line.color = ["0xFFFFFFFF"];
            chartEvents.eventsMap1.onTouch.border.line.transparency = [80];
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0xA8C7E3FF"];
            // crosshair
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0xA8C7E3FF"];
            chartEvents.eventsMap1.onTouch.crossHair.line.transparency = [100];
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
k_dv_dataviz_demo1_cg_demo_sample_2 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["4/13", "4/15", "4/17", "4/18", "4/19", "4/21", "4/22", "4/23", "4/26", "4/27", "4/28", "4/29", "4/30"]
                },
                "columnNames": {
                    "values": ["Amount", "Credit"]
                },
                "data": {
                    "Amount": [3662, 2008, 4220, 4555, 4100, 3895, 2128, 2782, 3780, 3675, 5340, 5565, 6450],
                    "Credit": [35, 30, 44, 40, 38, 30, 25, 18, 34, 40, 45, 51, 48]
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
                    ///////////
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
            // ////////
            var dataviz_chartproperties_lineChart_singleSeries_defaults = function() {
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
                    value["drawEntities"] = ["axis", "grid", "lineChart"];
                    value["lineChart"] = {
                        "columnId": [0],
                        "animations": {
                            "onInitAnimation": true,
                        },
                        "graphType": "normal",
                        "lineType": "normal",
                        "dataAlignToAxis": ["primaryYAxis"],
                        "plotMissingValues": "assumeZero",
                        "line": {
                            "color": ["0xaaaaaaff"],
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
                        },
                    };
                    // ////
                    value.chartHeight = 48;
                    // linechart
                    value.lineChart.line.color = ["0x00ff00ff"];
                    value.lineChart.line.width = [3];
                    value.lineChart.plotPoints.size = [12];
                    // axis
                    value.axis.yAxis.axisLine.crossOtherAxisAt = "start";
                    value.axis.xAxis.title.alignment = "center";
                    value.axis.yAxis.labels.positionWrtMarkings = "middle";
                    value.axis.yAxis.labels.margin = [30, 0, 0, 0];
                    value.axis.xAxis.labels.margin = [0, 0, 30, 0];
                    // grid
                    // value.grid.yAxisMajorGrid.visible = false;
                    value.grid.yAxisMinorGrid.visible = false;
                    value.grid.xAxisMajorGrid.visible = false;
                    value.grid.xAxisMinorGrid.visible = false;
                    return value;
                };
            // /////////
            var chartProperties = dataviz_chartproperties_lineChart_singleSeries_defaults();
            chartProperties.chartHeight = 48;
            chartProperties.enableScrolling = true;
            // title
            chartProperties.title.visible = true;
            chartProperties.title.containerWt = 10;
            chartProperties.title.text = "Account Balance: Scrolling, PinchToZoom, Crosshair";
            chartProperties.title.alignment = "left";
            chartProperties.title.font.color = ["0xffffffff"];
            chartProperties.title.background.color = ["0x054486FF", "0x0599D3FF"];
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.fillType = "gradient";
            // line
            chartProperties.lineChart.columnId = [0];
            chartProperties.lineChart.lineType = "normal";
            chartProperties.lineChart.line.color = ["0xaaaaaaff"];
            chartProperties.lineChart.plotPoints.color = ["0xffffffff", "0x2a99ceff", "0xff0000ff"];
            chartProperties.lineChart.plotPoints.visible = true;
            chartProperties.lineChart.dataLabels.placement = "top";
            chartProperties.lineChart.dataLabels.font.size = [9];
            chartProperties.lineChart.dataLabels.font.color = ["0xaaaaaaff"];
            // axis
            // yaxis
            chartProperties.axis.yAxis.axisLine.line.transparency = [90];
            chartProperties.axis.yAxis.labels.font.color = ["0xfefefeff"]; // "0x5b5b5bff"
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.markingReference = "atMajor";
            chartProperties.axis.yAxis.labels.font.size = [10];
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.labels.position = "inner";
            chartProperties.axis.yAxis.scale.minValue = 0;
            chartProperties.axis.yAxis.scale.maxValue = 18000;
            chartProperties.axis.yAxis.scale.majorInterval = 6000;
            chartProperties.axis.yAxis.scale.minorInterval = 3;
            chartProperties.axis.yAxis.scale.offset.type = "percent";
            chartProperties.axis.yAxis.scale.offset.value = [20, 20];
            chartProperties.axis.yAxis.intervalMarks.visible = false;
            // xaxis
            chartProperties.axis.xAxis.axisLine.line.transparency = [90];
            chartProperties.axis.xAxis.labels.font.color = ["0xfefefeff"]; // "0x5b5b5bff"
            chartProperties.axis.xAxis.labels.font.style = ["Bold"];
            chartProperties.axis.xAxis.labels.markingReference = "atMinor";
            chartProperties.axis.xAxis.labels.positionWrtMarkings = "left";
            chartProperties.axis.xAxis.labels.margin = [20, 0, 0, 0];
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.labels.font.size = [9];
            chartProperties.axis.xAxis.scale.offset.type = "percent";
            chartProperties.axis.xAxis.scale.offset.value = [50, 50];
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "end";
            chartProperties.axis.margin = [0, 0, 0, 0];
            // grid
            chartProperties.grid.xAxisMajorGrid.visible = true;
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.xAxisMinorGrid.line.transparency = [90];
            chartProperties.grid.xAxisMajorGrid.line.transparency = [90];
            chartProperties.grid.yAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMinorGrid.visible = true;
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.yAxisMinorGrid.line.transparency = [90];
            chartProperties.grid.yAxisMajorGrid.line.transparency = [90];
            chartProperties.grid.background.visible = false;
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.gradientRatios = [0, 100];
            chartProperties.layerArea.background.color = ["0x0599D3FF", "0x054486FF"];
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
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.background.transparency = 0;
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 50, 50, 100];
            chartEvents.eventsMap1.onTouch.background.gradientType = "linearTopToBottom";
            chartEvents.eventsMap1.onTouch.background.color = ["0x0599D3FF", "0x054486FF", "0x054486FF", "0x0599D3FF"];
            chartEvents.eventsMap1.onTouch.border.line.color = ["0xFFFFFFFF"];
            chartEvents.eventsMap1.onTouch.border.line.transparency = [80];
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0xA8C7E3FF"];
            // crosshair
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0xA8C7E3FF"];
            chartEvents.eventsMap1.onTouch.crossHair.line.transparency = [90];
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
// //////////////////////////////////////////////////////////////////////////