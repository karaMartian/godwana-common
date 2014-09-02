///////////////////////////////////////////////////////////////////////////
///////////////
function func_init_frm_011_layer_config_002() {
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.dataVizViewForm();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_layer_demo_sample_1;
    usecase_array[++index] = k_dv_dataviz_layer_demo_sample_2;
    usecase_array[++index] = k_dv_dataviz_layer_demo_sample_3;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
};
// /////////////
// /////////////
k_dv_dataviz_layer_demo_sample_1 = function() {
    var getChartData = function() {
            var getChartDataSet = function() {
                    var chartData = {
                        "rowNames": {
                            "values": ["Jun 01", "Jun 02", "Jun 03", "Jun 04", "Jun 05", "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05", "Jul 06", "Jul 07", "Jul 08", "Jul 09", "Jul 10", "Jul 11", "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20", "Jul 21", "Jul 22"]
                        },
                        "columnNames": {
                            "values": ["Stock"]
                        },
                        "data": {
                            "Stock": [44, 43, 38, 52, 54, 32, 46, 36, 36, 46, 42, 60, 54, 214, 232, 234, 242, 242, 236, 233, 236, 225, 184, 175, 277, 291, 275, 311, 319, 313, 326, 328, 354, 349, 371, 356, 355, 340, 360, 332, 310, 204, 213, 197, 195, 186, 182, 168, 96, 86, 76, 68]
                        }
                    };
                    return chartData;
                };
            var chartData = {
                "dataSets": ["dataset1"],
                "dataset1": getChartDataSet()
            };
            return chartData;
        };
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
    var getChartProperties_1 = function() {
            // ////////////
            var dataviz_chartproperties_areaChart_singleSeries_defaults = function() {
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
            chartProperties.dataSetMapping.setId = "dataset1";
            chartProperties.dataSetMapping.eventsSetId = "eventsMap1";
            chartProperties.position = [0, 0, 100, 70];
            chartProperties.title.visible = true;
            chartProperties.title.containerWt = 10;
            chartProperties.title.text = "Stock Timeline: MultiLayer with Crosshair";
            chartProperties.title.alignment = "left";
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.color = ["0x323232FF", "0x070707ff"];
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.gradientRatios = [0, 100];
            chartProperties.layerArea.background.color = ["0x323232FF", "0x070707ff"];
            chartProperties.enableScrolling = false;
            chartProperties.areaChart.lineType = "normal";
            chartProperties.areaChart.line.color = ["0xfbf56bff"];
            chartProperties.axis.yAxis.title.text = "Price";
            chartProperties.axis.yAxis.labels.font.style = ["bold"];
            chartProperties.axis.xAxis.labels.visible = false;
            // chartProperties.axis.xAxis.labels.font.size = [10];
            // chartProperties.axis.xAxis.labels.orientationAngle = 90;
            chartProperties.areaChart.line.width = [6];
            chartProperties.areaChart.area.color = ["0xff0000ff", "0x00ff00ff"];
            chartProperties.areaChart.area.fillType = ["gradient"];
            chartProperties.areaChart.area.colorAboveXAxis = [
                ["0x40a4bcff", "0x1d4e61ff"]
            ];
            chartProperties.areaChart.area.transparency = [0, 0];
            chartProperties.areaChart.plotPoints.visible = false;
            chartProperties.grid.xAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMajorGrid.visible = true;
            chartProperties.grid.xAxisMajorGrid.line.color = ["0x273241ff"];
            chartProperties.grid.yAxisMajorGrid.line.color = ["0x273241ff"];
            return chartProperties;
        };
    var getChartProperties_2 = function() {
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
            chartProperties.dataSetMapping.setId = "dataset1";
            chartProperties.dataSetMapping.eventsSetId = "eventsMap1";
            chartProperties.position = [0, 65, 100, 100];
            chartProperties.enableScrolling = false;
            chartProperties.columnChart.bar.fillType = ["gradient"];
            chartProperties.columnChart.bar.color = [
                ["0x40a4bcff", "0x1d4e61ff"]
            ];
            chartProperties.columnChart.border.visible = true;
            chartProperties.columnChart.border.line.visible = true;
            chartProperties.columnChart.border.line.color = ["0xfbf56bff"];
            chartProperties.axis.yAxis.title.text = "Volume";
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.labels.font.size = [10];
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.labels.orientationAngle = 90;
            chartProperties.axis.xAxis.labels.font.color = ["0xffffffff"];
            chartProperties.axis.xAxis.intervalMarks.major.visible = false;
            chartProperties.axis.xAxis.intervalMarks.minor.visible = false;
            chartProperties.axis.xAxis.axisLine.visible = true;
            chartProperties.axis.xAxis.axisLine.line.color = ["0xffffffff"];
            chartProperties.axis.yAxis.labels.visible = true;
            chartProperties.axis.yAxis.labels.font.style = ["bold"];
            // chartProperties.axis.yAxis.labels.font.color = ["0xffffffff"];
            chartProperties.axis.yAxis.intervalMarks.minor.visible = false;
            chartProperties.axis.yAxis.scale.maxValue = 500;
            chartProperties.axis.yAxis.scale.minValue = 0;
            chartProperties.axis.yAxis.axisLine.visible = false;
            chartProperties.axis.yAxis.scale.majorInterval = 250;
            chartProperties.grid.visible = true;
            chartProperties.grid.xAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.visible = true;
            chartProperties.grid.xAxisMajorGrid.line.color = ["0x273241ff"];
            chartProperties.grid.yAxisMajorGrid.line.color = ["0x273241ff"];
            chartProperties.title = null;
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.gradientRatios = [0, 100];
            chartProperties.layerArea.background.color = ["0x070707ff", "0x323232FF"];
            return chartProperties;
        };
    var getChartProperties = function() {
            var value = {
                "chartHeight": 75,
                "sharedLayerMode": true,
                "layers": ["layer1", "layer2"],
                "layer1": getChartProperties_1(),
                "layer2": getChartProperties_2()
            };
            return value;
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
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0xfbf56bff"];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0xfbf56bff"];
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 100];
            chartEvents.eventsMap1.onTouch.background.color = ["0x323232FF", "0x070707ff"];
            chartEvents.eventsMap1.onTouch.background.transparency = 10;
            chartEvents.eventsMap1.onTouch.dataLabels.indicators = ["columnName", "rowName", "numberValue"];
            chartEvents.eventsMap1.onTouch.dataLabels.separator = "newLine";
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0xfbf56bff"];
            chartEvents.eventsMap1.onPinchZoom = null;
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
k_dv_dataviz_layer_demo_sample_2 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["JAN/2009", "FEB/2009", "MAR/2009", "APR/2009", "MAY/2009", "JUN/2009", "JUL/2009", "AUG/2009", "SEP/2009", "OCT/2009", "NOV/2009", "DEC/2009"]
                },
                "columnNames": {
                    "values": ["C1"]
                },
                "data": {
                    "C1": [100, 20, 40, 30, 80, 65, 70, 50, 90, 75, 20, 70]
                }
            };
            return chartData;
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
            var getChartProperties_1 = function() {
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
                    chartProperties.layerArea.background.transparency = 0;
                    chartProperties.layerArea.background.gradientRatios = [0, 100];
                    chartProperties.layerArea.background.color = ["0x070707ff", "0x323232FF"];
                    chartProperties.axis.xAxis.visible = false;
                    chartProperties.axis.yAxis.visible = false;
                    chartProperties.grid.visible = false;
                    chartProperties.enableScrolling = true;
                    chartProperties.columnChart.bar.fillType = ["gradient"];
                    chartProperties.columnChart.bar.color = [
                        ["0xFFA300FF", "0xC85400FF"]
                    ];
                    chartProperties.title.text = "";
                    chartProperties.title.containerWt = 10;
                    return chartProperties;
                };
            var getChartProperties_2 = function() {
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
                            value.lineChart.dataLabels = null;
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
                    chartProperties.enableScrolling = true;
                    chartProperties.lineChart.lineType = "normal";
                    chartProperties.lineChart.line.visible = true;
                    chartProperties.lineChart.plotPoints.visible = true;
                    chartProperties.axis.xAxis.axisLine.visible = false;
                    chartProperties.axis.xAxis.labels.markingReference = "atMinor";
                    chartProperties.grid.yAxisMinorGrid.visible = false;
                    chartProperties.grid.yAxisMajorGrid.visible = false;
                    chartProperties.grid.xAxisMajorGrid.visible = false;
                    chartProperties.grid.xAxisMinorGrid.visible = false;
                    chartProperties.title.text = "Growth trend indicator: MultiLayer, Scroll, PinchToZoom with Crosshair";
                    chartProperties.title.alignment = "right";
                    chartProperties.title.containerWt = 10;
                    chartProperties.title.background.transparency = 0;
                    chartProperties.title.background.gradientRatios = [0, 100];
                    chartProperties.title.background.color = ["0x323232FF", "0x070707ff"];
                    return chartProperties;
                };
            var value = {
                "chartHeight": 60,
                "sharedLayerMode": true,
                "layers": ["layer1", "layer2"],
                "layer1": getChartProperties_1(),
                "layer2": getChartProperties_2()
            };
            return value;
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
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0x00FF00ff"];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0x00FF00ff"];
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 100];
            chartEvents.eventsMap1.onTouch.background.color = ["0x323232FF", "0x070707ff"];
            chartEvents.eventsMap1.onTouch.background.transparency = 10;
            chartEvents.eventsMap1.onTouch.dataLabels.indicators = ["columnName", "rowName", "numberValue"];
            chartEvents.eventsMap1.onTouch.dataLabels.separator = "newLine";
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0x00FF00ff"];
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
var k_dv_dataviz_layer_demo_sample_3 = function() {
        /////// chart data
        ////////// funtion begin getChartData()
        var getChartData = function() {
                /////// data
                var chartData = {
                    "rowNames": {
                        "values": ["01/2008", "02/2008", "03/2008", "04/2008", "05/2008", "06/2008", "07/2008", "08/2008", "09/2008", "10/2008", "11/2008", "12/2008", "01/2009", "02/2009", "03/2009", "04/2009", "05/2009", "06/2009", "07/2009", "08/2009", "09/2009", "10/2009", "11/2009", "12/2009"]
                    },
                    "columnNames": {
                        "values": ["Deposit", "Cash", "Credit", "Target", "Achieved"]
                    },
                    "data": {
                        "Deposit": [234, 236, 224, 244, 240, 218, 256, 254, 248, 226, 234, 228, 234, 236, 224, 344, 340, 318, 356, 324, 344, 340, 318, 356],
                        "Cash": [524, 512, 514, 526, 534, 536, 522, 544, 342, 318, 328, 324, 324, 312, 314, 326, 434, 436, 422, 455, 426, 434, 436, 422],
                        "Credit": [344, 335, 336, 334, 332, 324, 322, 425, 444, 446, 448, 446, 444, 435, 436, 434, 532, 524, 522, 536, 534, 532, 524, 522],
                        "Achieved": [78, 79, 67, 87, 76, 54, 34, 90, 87, 88, 59, 45, 78, 80, 80, 35, 68, 78, 75, 70, 75, 83, 78, 75, 70, 75, 83],
                        "Target": [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
                    }
                };
                return chartData;
            };
        //////////// function end - getChartData()
        /////// chart properties
        ////////// function begin - getChartProperties()
        var getChartProperties = function() {
                ///////  funtion begin - dataviz_chartproperties_defaults ////////
                var dataviz_chartproperties_defaults = function() {
                        var value = {};
                        /////// height with respect to screen height
                        value["chartHeight"] = 48;
                        /////// scrolling
                        value["enableScrolling"] = false;
                        value["position"] = [0, 0, 100, 100];
                        ///////
                        ///////title - available properties
                        value["title"] = {
                            "visible": true,
                            "text": "Chart",
                            /////// title font
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
                            ///////title border
                            "border": {
                                "visible": false,
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                }
                            },
                            ///////title bg
                            "background": {
                                "fillType": "gradient",
                                "transparency": 100,
                                "gradientType": "linearTopToBottom",
                                "gradientRatios": [0, 20, 50, 100],
                                "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                            }
                        };
                        ///////
                        /////legend - available properties
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
                            /////// legend font
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
                            ///////legend border
                            "border": {
                                "visible": false,
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                }
                            },
                            /////// legend bg
                            "background": {
                                "fillType": "gradient",
                                "transparency": 100,
                                "gradientType": "linearTopToBottom",
                                "gradientRatios": [0, 20, 50, 100],
                                "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                            }
                        };
                        ///////
                        ///layerarea - chart layer bg - available properties
                        value["layerArea"] = {
                            /////// layer area border
                            "border": {
                                "visible": false,
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                }
                            },
                            ///////layer area bg
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
                        ///////
                        ///// axis
                        value["axis"] = {
                            "visible": true,
                            "type": ["xAxis", "yAxis"]
                        };
                        ///////
                        /////  xAxis - - available properties
                        value["axis"]["xAxis"] = {
                            "visible": true,
                            /////// axis title
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
                            /////// axis scale
                            "scale": {
                                "type": "fixedGapMajorInterval",
                                "gap": 150,
                                "offset": {
                                    "value": [0, 0],
                                    "type": "pixels",
                                }
                            },
                            /////// axis line
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
                            /////// axis labels
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
                                /////// axis font
                                "font": {
                                    "size": [14],
                                    "family": ["Verdana"],
                                    "style": ["Bold"],
                                    "color": ["0xaaaaaaff"],
                                    "transparency": [0]
                                }
                            },
                            /////// axis intervalmarks
                            "intervalMarks": {
                                "visible": true,
                                /////// major interval marks
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
                                /////// minor interval marks
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
                        ///////
                        //////////yAxis - - available properties
                        value["axis"]["yAxis"] = {
                            "visible": true,
                            /////////title config
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
                            /////////axis scale config
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
                            /////////axisLine config
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
                            /////////axis labels config
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
                            /////////axis interval Marks config
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
                            //XAxis Major grid
                            "xAxisMajorGrid": {
                                "visible": true,
                                /////// grid line
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                }
                            },
                            //yAxis Major Grid
                            "yAxisMajorGrid": {
                                "visible": true,
                                ///////
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                }
                            },
                            //xAxis Minor Grid
                            "xAxisMinorGrid": {
                                "visible": true,
                                /////// grid line
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                }
                            },
                            //yAxis Minor Grid
                            "yAxisMinorGrid": {
                                "visible": true,
                                /////// grid line
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                }
                            },
                            //grid background
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
                ///////  funtion end - dataviz_chartproperties_defaults ////////
                // ////////dataviz_chartproperties_lineChart_singleSeries_defaults
                var dataviz_chartproperties_lineChart_singleSeries_defaults = function() {
                        // ///
                        var value = dataviz_chartproperties_defaults();
                        ///////////line chart - base available properties
                        value["lineChart"] = {
                            "columnId": [0],
                            "animations": {
                                "onInitAnimation": true,
                            },
                            "graphType": "normal",
                            "lineType": "normal",
                            "dataAlignToAxis": ["primaryYAxis"],
                            "plotMissingValues": "assumeZero",
                            /////////linchart line config
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0],
                            },
                            /////////line chart marker config
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
                            /////////linechart datalabels config
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
                        ///////// linechart config
                        value.lineChart.line.color = ["0x00ff00ff"];
                        value.lineChart.line.width = [3];
                        value.lineChart.plotPoints.size = [12];
                        value.lineChart.dataLabels = null;
                        ///////// axis config
                        value.axis.yAxis.axisLine.crossOtherAxisAt = "start";
                        value.axis.xAxis.title.alignment = "center";
                        value.axis.yAxis.labels.positionWrtMarkings = "middle";
                        value.axis.yAxis.labels.margin = [30, 0, 0, 0];
                        value.axis.xAxis.labels.margin = [0, 0, 30, 0];
                        ///////// grid config
                        // value.grid.yAxisMajorGrid.visible = false;
                        value.grid.yAxisMinorGrid.visible = false;
                        value.grid.xAxisMajorGrid.visible = false;
                        value.grid.xAxisMinorGrid.visible = false;
                        return value;
                    };
                // ///////// dataviz_chartproperties_lineChart_singleSeries_defaults
                var chartProperties = dataviz_chartproperties_lineChart_singleSeries_defaults();
                chartProperties["drawEntities"] = ["axis", "grid", "areaChart", "lineChart"];
                /////areachart - base available properties
                chartProperties["areaChart"] = {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true,
                    },
                    "graphType": "normal",
                    "lineType": "normal",
                    "dataAlignToAxis": ["primaryYAxis"],
                    "plotMissingValues": "assumeZero",
                    /////////areachart area fill config
                    "area": {
                        "fillType": ["color"],
                        "transparency": [0],
                        "color": ["0x00ff00ff"],
                        "colorAboveXAxis": ["0x00ff00ff"],
                        "colorBelowXAxis": ["0xff0000ff"],
                    },
                    /////////area chart line config
                    "line": {
                        "visible": true,
                        "color": ["0x000000FF"],
                        "width": [1],
                        "transparency": [0],
                    },
                    /////////areachart plot markers config
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
                    /////////area chart datalabels config
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
                chartProperties.chartHeight = 72;
                chartProperties.enableScrolling = false;
                ///////// title configuration
                chartProperties.title.visible = true;
                chartProperties.title.text = "Production Output indicator: Multi Chart, PinchToZoom, Crosshair";
                chartProperties.title.alignment = "center";
                chartProperties.title.font.color = ["0x000000ff"];
                chartProperties.title.font.style = ["Bold"];
                chartProperties.title.font.size = ["20"];
                chartProperties.title.font.transparency = [30];
                chartProperties.title.containerWt = 10;
                chartProperties.title.background.transparency = 0;
                chartProperties.title.background.color = ["0xffffffff"];
                ///////// layerarea - bg config
                chartProperties.layerArea.background.transparency = 0;
                chartProperties.layerArea.background.color = ["0xffffffff"];
                ///////// linechart - config
                // multiseries
                chartProperties.lineChart.columnId = [0, 1, 2, 4];
                chartProperties.lineChart.lineType = "normal";
                chartProperties.lineChart.line.color = ["0x9fd500ff", "0x22b8dbff", "0x0D0664ff", "0x949094FF"];
                chartProperties.lineChart.plotPoints.visible = false;
                chartProperties.lineChart.plotPoints.color = ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"];
                chartProperties.lineChart.plotPoints.marker.type = ["bubble", "bubble", "bubble"];
                ///////// areaChart - config
                chartProperties.areaChart.columnId = [3];
                chartProperties.areaChart.graphType = "normal";
                chartProperties.areaChart.lineType = "normal";
                chartProperties.areaChart.dataAlignToAxis = ["primaryYAxis"];
                chartProperties.areaChart.line.visible = false;
                chartProperties.areaChart.line.color = ["0xff0000ff"];
                chartProperties.areaChart.line.transparency = [0];
                chartProperties.areaChart.dataLabels = null;
                chartProperties.areaChart.area.visible = true;
                chartProperties.areaChart.area.fillType = ["color"];
                chartProperties.areaChart.area.colorAboveXAxis = ["0xB4B4B4FF"];
                chartProperties.areaChart.area.transparency = [20];
                chartProperties.areaChart.plotPoints.visible = false;
                ///////// axis - config
                chartProperties.axis.yAxis.axisLine.visible = false;
                chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"];
                chartProperties.axis.yAxis.labels.font.style = ["normal"];
                chartProperties.axis.yAxis.labels.font.size = [12];
                chartProperties.axis.yAxis.labels.font.transparency = [10];
                chartProperties.axis.yAxis.intervalMarks.visible = false;
                chartProperties.axis.xAxis.axisLine.visible = false;
                chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"];
                chartProperties.axis.xAxis.labels.font.style = ["normal"];
                chartProperties.axis.xAxis.labels.font.size = [12];
                chartProperties.axis.yAxis.labels.font.transparency = [10];
                chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
                chartProperties.axis.xAxis.labels.orientationAngle = 0;
                chartProperties.axis.xAxis.labels.visible = true;
                chartProperties.axis.xAxis.labels.orientationAngle = 90;
                chartProperties.axis.xAxis.intervalMarks.visible = false;
                ///////// grid config
                chartProperties.grid.xAxisMinorGrid.visible = false;
                chartProperties.grid.xAxisMajorGrid.visible = true;
                chartProperties.grid.yAxisMinorGrid.visible = false;
                chartProperties.grid.yAxisMajorGrid.visible = false;
                chartProperties.grid.yAxisMajorGrid.line.width = [1];
                chartProperties.grid.yAxisMinorGrid.visible = false;
                chartProperties.grid.background.visible = false;
                chartProperties.grid.background.transparency = [0];
                chartProperties.grid.background.fillType = "alternateColor";
                chartProperties.grid.background.transparency = 50;
                chartProperties.grid.background.alternateColorPattern = "yMajorMajor";
                chartProperties.grid.background.color = ["0xaaaaaaff", "0xeeeeeeff"];
                ///////// legend config
                chartProperties.legend.visible = true;
                chartProperties.legend.indicators = ["marker", "textLabel"];
                chartProperties.legend.marker.type = "colorBox";
                chartProperties.legend.marker.color = ["0x9fd500ff", "0x22b8dbff", "0x0D0664ff", "0x949094FF"];
                chartProperties.legend.textLabel.text = ["Entity1", "Entity2", "Entity3", "Entity4"];
                chartProperties.legend.textLabel.color = ["0x9fd500ff", "0x22b8dbff", "0x0D0664ff", "0x949094FF"];
                chartProperties.legend.textLabel.margin = [3, 5, 1, 1];
                chartProperties.legend.position = "bottom";
                chartProperties.legend.layout = "horizantal";
                chartProperties.legend.alignment = "right";
                chartProperties.legend.containerWt = 8;
                chartProperties.legend.padding = [1, 1, 1, 1];
                chartProperties.legend.font.style = ["normal"];
                chartProperties.legend.font.size = [12];
                // events
                chartProperties.dataSetMapping.eventsSetId = null;
                return chartProperties;
            };
        /////////// function end - getChartProperties()
        ///////// chart events
        var getChartEvents = function() {
                ///////// events
                var chartEventsDefaults = function() {
                        /////////JS callback for onTap event
                        var onTap = function(args) {
                                var widgetId = args["widgetId"];
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
                        /////////JS callback onDoubleTap event
                        var onDoubleTap = function(args) {
                                var widgetId = args["widgetId"];
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
                        /////////JS Callback onLongPress event
                        var onLongPress = function(args) {
                                var widgetId = args["widgetId"];
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
                        /////////JS CallBack for onPinch event
                        var onPinch = function(args) {
                                var widgetId = args["widgetId"];
                                kony.print("chartevents");
                                kony.print("chartevents_onPinch - begin");
                                kony.print("chartevents_onPinch - end");
                            };
                        /////////JS Callback for onSwipe event
                        var onSwipe = function(args) {
                                var widgetId = args["widgetId"];
                                kony.print("chartevents");
                                kony.print("chartevents_onSwipe - begin");
                                kony.print("chartevents_onSwipe - end");
                            };
                        /////////JS callback for onScrollDidReachEnd event
                        var onScrollDidReachEnd = function(args) {
                                var widgetId = args["widgetId"];
                                kony.print("chartevents");
                                kony.print("chartevents_onScrollDidReachEnd - begin");
                                kony.print("chartevents_onScrollDidReachEnd - end");
                            };
                        /////////JS callback for onScrollDidReachBegin
                        var onScrollDidReachBegin = function(args) {
                                var widgetId = args["widgetId"];
                                kony.print("chartevents");
                                kony.print("chartevents_onScrollDidReachBegin - begin");
                                kony.print("chartevents_onScrollDidReachBegin - end");
                            };
                        var value = {
                            "events": ["eventsMap1"],
                            "eventsMap1": {
                                /////////register all the JS callback here
                                "onTap": onTap,
                                "onDoubleTap": onDoubleTap,
                                "onLongPress": onLongPress,
                                "onPinch": onPinch,
                                "onSwipe": onSwipe,
                                "onScrollDidReachBegin": onScrollDidReachBegin,
                                "onScrollDidReachEnd": onScrollDidReachEnd,
                                /////////onPinchToZoom zoomin , zoomout scale config
                                "onPinchZoom": {
                                    "minimumZoomScale": 1,
                                    "maximumZoomScale": 2
                                },
                                //////// onTouch config
                                "onTouch": {
                                    /////// onTouch CrossHair
                                    "crossHair": {
                                        "line": {
                                            "color": ["0xAAAAAAFF"],
                                            "width": [1],
                                            "transparency": [0],
                                        }
                                    },
                                    /////////onTouch datalabels
                                    "dataLabels": {
                                        "visible": true,
                                        "indicators": ["numberValue"],
                                        "separator": "space",
                                        /////////onTouch datalabels font
                                        "font": {
                                            "size": [14],
                                            "family": ["Verdana"],
                                            "style": ["Bold"],
                                            "color": ["0xAAAAAAFF"],
                                            "transparency": [0],
                                        }
                                    },
                                    /////////ontouch datalabels border
                                    "border": {
                                        "visible": false,
                                        "line": {
                                            "color": ["0x000000FF"],
                                            "width": [1],
                                            "transparency": [0],
                                        }
                                    },
                                    /////////ontouch datalabels bg
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
                var chartEvents = chartEventsDefaults()["eventsMap1"];
                chartEvents.onTouch.dataLabels.indicators = ["numberValue"];
                chartEvents.onTouch.border.visible = true;
                chartEvents.onTouch.background.transparency = 0;
                chartEvents.onTouch.background.fillType = "color";
                chartEvents.onTouch.background.color = ["0xffffffff"];
                chartEvents.onTouch.border.line.color = ["0x9fd500ff"];
                return chartEvents;
            };
        var chartInfo = {};
        chartInfo.chartProperties = getChartProperties();
        chartInfo.chartData = getChartData();
        chartInfo.chartEvents = getChartEvents();
        return chartInfo;
    };
// /////////////
// /////////////////////////////////////////////////////////////////////////