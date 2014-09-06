///////////////////////////////////////////////////////////////////////////
///////////////
///////////////
function func_100_demo_6() {
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.dataVizViewForm();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_demo6_demo_sample_1;
    usecase_array[++index] = k_dv_dataviz_demo6_demo_sample_2;
    usecase_array[++index] = k_dv_dataviz_demo6_demo_sample_3;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
};
// /////////////
// /////////////
k_dv_dataviz_demo6_demo_sample_1 = function() {
    /*
     * "16%:Direct Traffic","Direct(16%)","34%: Google","03%: Bing","Search
     * Engines (37%)","02%: Facebook","07%: LinkedIn","10%: StumbleUpon","13%:
     * Reddit","15%: Twitter","Referral Sites (47%)"
     */
    var getChartData = function() {
            var chartData = {
                "dataSets": ["dataset0", "dataset1", "dataset2", "dataset3"],
                "dataset0": {
                    "rowNames": {
                        "values": ["Twitter", "Reddit", "StumbleUpon", "LinkedIn", "Facebook", "Google", "Bing", "Direct Traffic"]
                    },
                    "columnNames": {
                        "values": ["Amount1"]
                    },
                    "data": {
                        "Amount1": [15, 13, 10, 7, 2, 34, 3, 16]
                    }
                },
                "dataset1": {
                    "rowNames": {
                        "values": ["16%:Direct Traffic", "Direct", "Google", "Bing", "Search Engines (37%)", "Facebook", "LinkedIn", "StumbleUpon", "Reddit", "Twitter", "Referral Sites (47%)"]
                    },
                    "columnNames": {
                        "values": ["c1"]
                    },
                    "data": {
                        "c1": [16, null, 3, 34, null, 2, 7, 10, 13, 15, null]
                    }
                },
                "dataset2": {
                    "rowNames": {
                        "values": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
                        // , "Jun 25", "Jun 26", "Jun 27", "Jun 28"]
                    },
                    "columnNames": {
                        "values": ["16%:Direct Traffic", "Direct", "Google", "Bing", "Search Engines (37%)", "Facebook", "LinkedIn", "StumbleUpon"]
                    },
                    "data": {
                        "LinkedIn": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                        "Facebook": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                        "Search Engines (37%)": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                        "Google": [5, 1, 11, 7, 2, 3, 4, 3, 6, 1, 6, 3, 4, 1, 6, 2, 3, 4, 6, 5, 2, 4, 1, 6],
                        "Direct": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                        "16%:Direct Traffic": [28, 20, 34, 36, 36, 18, 14, 26, 8, 8, 34, 62, 44, 28, 11, 26, 12, 23, 30, 26, 20, 44, 16]
                        // 10,5,10,12,15,7,13,15,18,16,9,12,16,18,15,12,15,16,13,18,14,16,18,19]
                    }
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
            var getChartProperties_0 = function() {
                    // /////////////
                    var dataviz_chartproperties_pieChart_singleSeries_defaults = function() {
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
                            // //////
                            value["drawEntities"] = ["pieChart"];
                            value["pieChart"] = {
                                "columnId": [0],
                                "animations": {
                                    "onInitAnimation": true
                                },
                                "spinWheel": false,
                                "plotZeroValues": false,
                                "plotMissingValues": "assumeZero",
                                "direction": "clockWise",
                                "startAngle": 90,
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
                            value.pieChart.dataLabels.visible = true;
                            value.pieChart.spinWheel = true;
                            return value;
                        };
                    // /////////////
                    var chartProperties = dataviz_chartproperties_pieChart_singleSeries_defaults();
                    chartProperties.title = null;
                    chartProperties.dataSetMapping.setId = "dataset0";
                    chartProperties.position = [0, 0, 55, 50];
                    chartProperties.layerArea.background.gradientType = "linearTopToBottom";
                    chartProperties.layerArea.background.fillType = "gradient";
                    chartProperties.layerArea.background.transparency = 0;
                    chartProperties.layerArea.background.gradientRatios = [0, 100];
                    chartProperties.layerArea.background.color = ["0xfbfbfbFF", "0xfefefeFF"];
                    chartProperties.pieChart.holeRadius = "auto";
                    chartProperties.pieChart.margin = [0, 0, 0, 0];
                    chartProperties.pieChart.exploded = false;
                    chartProperties.pieChart.direction = "clockWise";
                    /*
                     * "clockWise",
                     * "antiClockWise"
                     */
                    chartProperties.pieChart.startAngle = 0;
                    chartProperties.pieChart.plotZeroValues = false;
                    chartProperties.pieChart.columnId = [0];
                    chartProperties.pieChart.pieSlice = {
                        "fillType": ["color"],
                        "gradientType": ["linearTopToBottom"],
                        "transparency": [0],
                        "color": ["0x002642ff", "0x21425aff", "0x435f73ff", "0x657c8dff", "0x8799a6ff", "0xe28436ff", "0xedb485ff", "0xfe7f7fff"]
                    };
                    chartProperties.pieChart.border = {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "style": ["continuous"],
                            "visible": true,
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    };
                    chartProperties.pieChart.dataLabels = {
                        "visible": true,
                        "separator": "space",
                        "placement": "outside",
                        /* [inside, edge, outside, "center"] */"indicators": ["rowName"],
                        /* ["numberValue","percentValue","columnName","rowName"] */"connector": {
                            "visible": true,
                            "line": {
                                "width": [1],
                                "style": ["continuous"],
                                "visible": true,
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "font": {
                            "family": ["Marion"],
                            "style": ["Plain"],
                            "size": [11],
                            "transparency": [0],
                            "color": ["0x000000ff"]
                        }
                    };
                    chartProperties.pieChart.animations = {
                        "onInitAnimation": true
                    };
                    return chartProperties;
                };
            var getChartProperties_1 = function() {
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
                    chartProperties.dataSetMapping.setId = "dataset1";
                    chartProperties.position = [55, 0, 100, 50];
                    chartProperties.layerArea.background.gradientType = "linearTopToBottom";
                    chartProperties.layerArea.background.fillType = "gradient";
                    chartProperties.layerArea.background.transparency = 0;
                    chartProperties.layerArea.background.gradientRatios = [0, 100];
                    chartProperties.layerArea.background.color = ["0xfbfbfbFF", "0xfefefeFF"];
                    chartProperties.drawEntities = ["axis", "barChart"];
                    chartProperties.barChart.plotMissingValues = "leaveGap";
                    chartProperties.barChart.bar.fillType = ["color"];
                    chartProperties.barChart.border.visible = false;
                    chartProperties.barChart.bar.color = [
                        ["0xFE7E81FF"],
                        ["0x00000000"],
                        ["0xF4D5BEFF"],
                        ["0xE28336FF"],
                        ["0x00000000"],
                        ["0x8799a5ff"],
                        ["0x657c8bff"],
                        ["0x435f71ff"],
                        ["0x214258ff"],
                        ["0x012640ff"],
                        ["0x0000000"]
                    ];
                    chartProperties.axis.yAxis.axisLine.visible = false;
                    chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
                    chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
                    chartProperties.axis.yAxis.labels.font.size = [11];
                    chartProperties.axis.yAxis.labels.font.style = ["normal"];
                    chartProperties.axis.yAxis.labels.visible = true;
                    chartProperties.axis.yAxis.intervalMarks.visible = false;
                    chartProperties.axis.xAxis.visible = false;
                    chartProperties.barChart.dataLabels.visible = true;
                    chartProperties.barChart.dataLabels.placement = "inside";
                    chartProperties.barChart.dataLabels.font.color = ["0x000000ff"]; // "0x4c4c4cff"
                    chartProperties.barChart.dataLabels.font.size = [10];
                    chartProperties.barChart.dataLabels.font.style = ["normal"];
                    chartProperties.title = null;
                    return chartProperties;
                };
            var getChartProperties_2 = function() {
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
                    chartProperties.dataSetMapping.setId = "dataset2";
                    chartProperties.position = [0, 50, 100, 100];
                    // area chart
                    chartProperties.layerArea.background.transparency = 0;
                    chartProperties.layerArea.background.fillType = "gradient";
                    chartProperties.layerArea.background.gradientRatios = [0, 100];
                    chartProperties.layerArea.background.color = ["0xfefefeFF", "0xe3e3e3FF"];
                    chartProperties.enableScrolling = false;
                    chartProperties.areaChart.graphType = "stacked";
                    chartProperties.areaChart.lineType = "smooth";
                    chartProperties.areaChart.columnId = [0, 1, 2, 3, 4, 5];
                    chartProperties.areaChart.line.width = [1];
                    chartProperties.areaChart.area.fillType = ["color"];
                    chartProperties.areaChart.dataAlignToAxis = ["primaryYAxis"];
                    chartProperties.areaChart.line.visible = true;
                    chartProperties.areaChart.line.color = ["0xffffffff", "0xffffffff", "0xffffffff"];
                    chartProperties.areaChart.line.transparency = [30, 30, 30];
                    chartProperties.areaChart.area.color = ["0x00ff00ff", "0x00ff00ff"];
                    chartProperties.areaChart.area.colorAboveXAxis = ["0xf57773af", "0xe59b4eff", "0x8698a6ff", "0x8698a6ff", "0x62798cff", "0x425e74ff"]; // ["0xce8747ff", "0x8466b2ff",
                    // "0x8e90e0ff"];
                    chartProperties.areaChart.area.transparency = [0, 0, 0];
                    chartProperties.areaChart.plotPoints.visible = true;
                    chartProperties.areaChart.plotPoints.size = [0, 0, 0, 0, 0, 5];
                    chartProperties.areaChart.plotPoints.color = ["0xffffffff"];
                    chartProperties.areaChart.plotPoints.transparency = [50];
                    chartProperties.title = null;
                    // axis
                    chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
                    chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
                    chartProperties.axis.yAxis.labels.font.size = [12];
                    chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
                    chartProperties.axis.yAxis.labels.font.style = ["normal"];
                    // titles
                    chartProperties.axis.yAxis.title.text = "Visits";
                    chartProperties.axis.xAxis.title.text = "April";
                    chartProperties.axis.xAxis.title.font.color = ["0x000000ff"];
                    chartProperties.axis.yAxis.title.font.color = ["0x000000ff"];
                    chartProperties.axis.yAxis.scale.maxValue = "auto";
                    chartProperties.axis.yAxis.scale.minValue = 0;
                    chartProperties.axis.yAxis.scale.majorInterval = 300;
                    chartProperties.axis.yAxis.scale.minorInterval = 3;
                    chartProperties.axis.yAxis.intervalMarks.major.visible = true;
                    chartProperties.axis.yAxis.intervalMarks.major.line.color = ["0x00000ff"];
                    chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
                    chartProperties.axis.xAxis.labels.font.style = ["normal"];
                    chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "start";
                    chartProperties.axis.xAxis.labels.markingReference = "atMajor";
                    chartProperties.axis.xAxis.labels.positionWrtMarkings = "center";
                    chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
                    chartProperties.axis.xAxis.labels.orientationAngle = 0;
                    chartProperties.axis.xAxis.labels.visible = true;
                    chartProperties.axis.xAxis.intervalMarks.visible = false;
                    // ===
                    chartProperties.grid.xAxisMajorGrid.visible = true;
                    chartProperties.grid.xAxisMajorGrid.line.color = ["0x929292ff"];
                    chartProperties.grid.xAxisMajorGrid.line.transparency = [0];
                    chartProperties.grid.yAxisMajorGrid.visible = true;
                    chartProperties.grid.yAxisMajorGrid.line.color = ["0x929292ff"];
                    chartProperties.grid.yAxisMajorGrid.line.transparency = [0];
                    chartProperties.grid.yAxisMajorGrid.line.width = [1];
                    // grid background
                    chartProperties.grid.background.transparency = [0];
                    chartProperties.grid.yAxisMinorGrid.visible = true;
                    chartProperties.grid.background.fillType = "color";
                    chartProperties.grid.background.color = ["0xffffffff"];
                    return chartProperties;
                };
            var value = {
                "chartHeight": 65,
                "layers": ["layer0", "layer1", "layer2"],
                "layer0": getChartProperties_0(),
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
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0xf57773af"];
            chartEvents.eventsMap1.onTouch.background.transparency = 0;
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 100];
            chartEvents.eventsMap1.onTouch.background.color = ["0xfefefeFF", "0xe3e3e3FF"];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0xf57773af", "0xe59b4eff", "0x8698a6ff", "0x8698a6ff", "0x62798cff", "0x425e74ff"];
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0x000000ff"];
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
k_dv_dataviz_demo6_demo_sample_2 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["2007", "2008", "2009", "2010", "2011"]
                },
                "columnNames": {
                    "values": ["claims", "paid"]
                },
                "data": {
                    "claims": [6, 11, 20, 37, 19],
                    "paid": [5000, 30000, 75000, 228000, 125000]
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
                    value["axis"]["secondaryXAxis"] = {
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
                    ///////////
                    value["axis"]["secondaryYAxis"] = {
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
                        "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid", "secondaryXAxisMajorGrid", "secondaryYAxisMajorGrid", "secondaryXAxisMinorGrid", "secondaryYAxisMinorGrid"],
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
                        "secondaryXAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "secondaryYAxisMajorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "secondaryXAxisMinorGrid": {
                            "visible": true,
                            "line": {
                                "color": ["0xaaaaaaff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "secondaryYAxisMinorGrid": {
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
                    value["legend"] = properties["legend"];
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
            chartProperties.chartHeight = 60;
            // layer area
            chartProperties.layerArea.background.color = ["0x222222ff"];
            chartProperties.layerArea.background.fillType = "color";
            chartProperties.layerArea.background.transparency = 0;
            chartProperties["drawEntities"] = ["axis", "grid", "columnChart", "lineChart"];
            chartProperties["lineChart"] = {
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
            // align to
            chartProperties.columnChart.columnId = [0];
            chartProperties.lineChart.columnId = [1];
            chartProperties.lineChart.dataAlignToAxis = ["secondaryYAxis"];
            chartProperties.columnChart.dataAlignToAxis = ["primaryYAxis"];
            // column Chart
            chartProperties.columnChart.graphType = "normal"; // "clustered","stacked"
            chartProperties.columnChart.border.visible = true;
            chartProperties.columnChart.border.line.width = [1];
            chartProperties.columnChart.border.line.color = ["0x3d6290ff"];
            chartProperties.columnChart.bar.color = [
                ["0x1359acff", "0x53b9fcff"]
            ];
            chartProperties.columnChart.bar.fillType = ["gradient"];
            chartProperties.columnChart.bar.gradientType = ["linearLeftToRight"];
            chartProperties.columnChart.bar.transparency = [0];
            // line Chart
            chartProperties.lineChart.dataLabels = null;
            chartProperties.lineChart.line.color = ["0x996699ff"];
            chartProperties.lineChart.plotPoints.color = ["0x996699ff"];
            chartProperties.lineChart.line.width = [2];
            // axis
            // yAxis
            chartProperties.axis.yAxis.labels.font.color = ["0xffffffff"]; // "0x5b5b5bff"
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.font.size = [10];
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.labels.font.style = ["bold"];
            chartProperties.axis.yAxis.scale.maxValue = 40;
            chartProperties.axis.yAxis.scale.minValue = 0;
            chartProperties.axis.yAxis.scale.majorInterval = 2;
            chartProperties.axis.yAxis.intervalMarks.major.line.color = ["0xffffffff"];
            chartProperties.axis.yAxis.intervalMarks.minor.visible = false;
            chartProperties.axis.yAxis.title.text = "Total Claims";
            chartProperties.axis.yAxis.title.font.color = ["0xffffffff"];
            // secondary YAxis
            chartProperties.axis.secondaryYAxis.labels.font.color = ["0xffffffff"]; // "0x5b5b5bff"
            chartProperties.axis.secondaryYAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.secondaryYAxis.labels.font.size = [10];
            chartProperties.axis.secondaryYAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.secondaryYAxis.labels.font.style = ["bold"];
            chartProperties.axis.secondaryYAxis.scale.maxValue = 230000;
            chartProperties.axis.secondaryYAxis.scale.minValue = 0;
            chartProperties.axis.secondaryYAxis.scale.majorInterval = 10000;
            chartProperties.axis.secondaryYAxis.intervalMarks.major.line.color = ["0xffffffff"];
            chartProperties.axis.secondaryYAxis.intervalMarks.minor.visible = false;
            chartProperties.axis.secondaryYAxis.title.text = "Total Paid";
            chartProperties.axis.secondaryYAxis.title.font.color = ["0xffffffff"];
            chartProperties.axis.secondaryYAxis.axisLine.crossOtherAxisAt = "end";
            chartProperties.axis.secondaryYAxis.scale.offset.value = [0, 0];
            // xAxis
            chartProperties.axis.xAxis.labels.font.color = ["0xffffffff"]; // "0x5b5b5bff"
            chartProperties.axis.xAxis.labels.font.style = ["bold"];
            chartProperties.axis.xAxis.labels.font.size = [10];
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "start";
            chartProperties.axis.xAxis.axisLine.value = 0;
            chartProperties.axis.xAxis.axisLine.visible = true;
            chartProperties.axis.xAxis.labels.markingReference = "atMinor";
            chartProperties.axis.xAxis.labels.positionWrtMarkings = "left";
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.orientationAngle = 0;
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            chartProperties.axis.xAxis.intervalMarks.minor.visible = false;
            chartProperties.axis.xAxis.title = null;
            // grid
            // xMajorGrid
            chartProperties.grid.xAxisMajorGrid.visible = false;
            chartProperties.grid.xAxisMajorGrid.line.color = ["0xffffffff"];
            chartProperties.grid.xAxisMajorGrid.line.transparency = [0];
            chartProperties.grid.xAxisMajorGrid.line.color = ["0xffffffff"];
            chartProperties.grid.yAxisMajorGrid.line.transparency = [0];
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.yAxisMajorGrid.visible = false;
            chartProperties.grid.yAxisMinorGrid.visible = false;
            // grid background
            chartProperties.grid.background.transparency = [0];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.fillType = "color";
            chartProperties.grid.background.color = ["0xffffffff"];
            // chart title
            chartProperties.title.visible = true;
            chartProperties.title.text = "Toal claims vs Total Paid";
            chartProperties.title.background.color = ["0x505050ff", "0x040404ff"];
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.fillType = "gradient";
            chartProperties.title.font.color = ["0xffffffff"];
            chartProperties.title.font.size = [20];
            chartProperties.title.font.family = ["Helvetica"];
            chartProperties.title.alignment = "center";
            chartProperties.title.font.style = ["normal"];
            chartProperties.title.containerWt = 8;
            // legend
            chartProperties.legend.indicators = ["marker", "textLabel"];
            chartProperties.legend.marker.type = "colorBox";
            chartProperties.legend.textLabel = {
                "text": ["Total Claims", "Total Paid"],
                "color": ["0xffffffFF", "0xffffffFF"],
                "margin": [3, 5, 0, 0]
            };
            chartProperties.legend.position = "right";
            chartProperties.legend.alignment = "center";
            chartProperties.legend.layout = "vertical";
            chartProperties.legend.border.visible = false;
            chartProperties.legend.background = null;
            // chartProperties.legend.background.transparency = 0;
            // chartProperties.legend.background.color = ["0xf6f6f6ff"];
            chartProperties.legend.containerWt = 17;
            chartProperties.legend.visible = true;
            chartProperties.legend.margin = [0, 0, 0, 0];
            chartProperties.legend.marker.margin = [3, 3, 0, 0];
            chartProperties.legend.marker.color = ["0x3399ccff", "0x996699ff"];
            chartProperties.legend.font.size = [12];
            chartProperties.legend.font.style = ["normal"];
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
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0x996699ff"];
            chartEvents.eventsMap1.onTouch.background.transparency = 0;
            chartEvents.eventsMap1.onTouch.background.fillType = "color";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [];
            chartEvents.eventsMap1.onTouch.background.color = ["0x222222ff"];
            chartEvents.eventsMap1.onTouch.border.line.color = ["0x996699ff"];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            return chartEvents;
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
k_dv_dataviz_demo6_demo_sample_3 = function() {
    // area chart
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22"]
                },
                "columnNames": {
                    "values": ["Target", "Achieved"]
                },
                "data": {
                    "Target": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
                    "Achieved": [78, 79, 67, 87, 76, 54, 34, 90, 87, 88, 59, 45, 78, 80, 80, 35, 68, 78, 75, 70, 75, 83]
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
            chartProperties["drawEntities"] = ["axis", "grid", "areaChart", "lineChart"];
            chartProperties["lineChart"] = {
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
            // layer area
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.fillType = "color";
            chartProperties.layerArea.background.color = ["0xffffffFF"];
            // title
            // chart title
            chartProperties.chartHeight = 50;
            chartProperties.title.visible = true;
            chartProperties.title.text = "APPRAISALS COMPLETED ON TIME";
            chartProperties.title.alignment = "center";
            chartProperties.title.background.color = ["0xffffffff", "0xffffffff"];
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.gradientRatios = [0, 100];
            chartProperties.title.background.fillType = "gradient";
            chartProperties.title.font.color = ["0x000000ff"];
            chartProperties.title.font.size = [20];
            chartProperties.title.font.family = ["Helvetica"];
            chartProperties.title.font.style = ["normal"];
            chartProperties.title.containerWt = 8;
            // Area Chart
            chartProperties.areaChart.columnId = [0];
            chartProperties.enableScrolling = false;
            chartProperties.areaChart.graphType = "normal";
            chartProperties.areaChart.lineType = "normal";
            chartProperties.areaChart.dataAlignToAxis = ["primaryYAxis"];
            chartProperties.areaChart.line.visible = false;
            chartProperties.areaChart.area.visible = true;
            chartProperties.areaChart.line.color = ["0xff0000ff"];
            chartProperties.areaChart.area.fillType = ["gradient"];
            chartProperties.areaChart.line.transparency = [0];
            chartProperties.areaChart.area.colorAboveXAxis = [
                ["0xff0000ff", "0xfc7a93ff"]
            ]; // ,"0xff0000ff"]]; //["0xce8747ff",
            // "0x8466b2ff", "0x8e90e0ff"];
            // chartProperties.areaChart.area.transparency = [0];
            chartProperties.areaChart.plotPoints.visible = false;
            // linechart
            chartProperties.lineChart.dataAlignToAxis = ["primaryYAxis"];
            chartProperties.lineChart.columnId = [1];
            chartProperties.lineChart.line.width = [2];
            chartProperties.lineChart.plotPoints.visible = true;
            chartProperties.lineChart.plotPoints.color = ["0xffffffff"];
            chartProperties.lineChart.plotPoints.size = [4];
            chartProperties.lineChart.line.color = ["0x0b008fff"];
            chartProperties.lineChart.dataLabels.visible = true;
            chartProperties.lineChart.dataLabels.font.size = [9];
            chartProperties.lineChart.dataLabels.placement = "top";
            chartProperties.lineChart.dataLabels.font.style = ["Plain"];
            chartProperties.lineChart.dataLabels.font.color = ["0x000000ff"];
            // axis
            // yAxis
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.font.size = [10];
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.intervalMarks.major.line.color = ["0x000000ff"];
            chartProperties.axis.yAxis.intervalMarks.minor.visible = false;
            // xAxis
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.labels.font.size = [10];
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "value";
            chartProperties.axis.xAxis.axisLine.value = 0;
            chartProperties.axis.xAxis.axisLine.visible = true;
            chartProperties.axis.xAxis.labels.markingReference = "atMajor";
            chartProperties.axis.xAxis.labels.positionWrtMarkings = "left";
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.orientationAngle = 90;
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.intervalMarks.visible = true;
            chartProperties.axis.xAxis.intervalMarks.major.line.color = ["0x000000ff"];
            chartProperties.axis.xAxis.intervalMarks.minor.visible = false;
            chartProperties.axis.xAxis.title = null;
            chartProperties.axis.yAxis.title = null;
            // grid
            // xMajorGrid
            chartProperties.grid.xAxisMajorGrid.visible = true;
            chartProperties.grid.xAxisMajorGrid.line.color = ["0xffffffff"];
            chartProperties.grid.xAxisMajorGrid.line.transparency = [90];
            chartProperties.grid.yAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMajorGrid.line.color = ["0xffffffff"];
            chartProperties.grid.yAxisMajorGrid.line.transparency = [90];
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            // grid background
            chartProperties.grid.background.transparency = [0];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.fillType = "color";
            chartProperties.grid.background.color = ["0xAAAEB9FF"];
            // legend
            chartProperties.legend.indicators = ["marker", "textLabel"];
            chartProperties.legend.marker.type = "colorBox";
            chartProperties.legend.textLabel = {
                "text": ["Target", "Appraisals completed on time"],
                "color": ["0x000000FF", "0x000000FF"],
                "margin": [3, 5, 0, 0]
            };
            chartProperties.legend.position = "bottom";
            chartProperties.legend.alignment = "center";
            chartProperties.legend.layout = "horizantal";
            chartProperties.legend.border.visible = false;
            chartProperties.legend.background.transparency = 0;
            chartProperties.legend.background.color = ["0xf6f6f6ff"];
            chartProperties.legend.containerWt = 20;
            chartProperties.legend.visible = true;
            chartProperties.legend.margin = [0, 0, 0, 0];
            chartProperties.legend.marker.margin = [3, 3, 0, 0];
            chartProperties.legend.marker.color = ["0xfc7a93ff", "0x0b008fff"];
            chartProperties.legend.font.size = [12];
            chartProperties.legend.font.style = ["normal"];
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
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0x0b008fff"];
            chartEvents.eventsMap1.onTouch.background.transparency = 0;
            chartEvents.eventsMap1.onTouch.background.fillType = "color";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 100];
            chartEvents.eventsMap1.onTouch.background.color = ["0xffffffff"];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0x0b008fff"];
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0x000000ff"];
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