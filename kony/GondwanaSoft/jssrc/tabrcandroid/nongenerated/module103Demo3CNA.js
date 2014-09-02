///////////////////////////////////////////////////////////////////////////
///////////////
///////////////
function func_103_demo_animation_bar_3D_001() {
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.demoFormCNA();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_demo3_cna_proportionalBarChart1;
    usecase_array[++index] = k_dv_dataviz_demo3_cna_scatterplot;
    usecase_array[++index] = k_dv_dataviz_demo3_cna_proportionalBarChart2;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
};
// /////////////
// /////////////
// /////////////
k_dv_dataviz_demo3_cna_proportionalBarChart1 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["STARTING BALANCE", "CREDITS", "DEBITS"]
                },
                "columnNames": {
                    "values": ["Amount"]
                },
                "data": {
                    "Amount": [80, 40, 50]
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
                    /////////
                    return value;
                };
            var chartProperties = {};
            var properties = dataviz_chartproperties_defaults();
            chartProperties["chartHeight"] = properties["chartHeight"];
            chartProperties["enableScrolling"] = properties["enableScrolling"];
            chartProperties["position"] = properties["position"];
            chartProperties["title"] = properties["title"];
            chartProperties["layerArea"] = properties["layerArea"];
            chartProperties["drawArea"] = {
                "margin": [5, 5, 5, 5],
                "padding": [0, 0, 0, 0],
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
            chartProperties["dataSetMapping"] = properties["dataSetMapping"];
            chartProperties["drawEntities"] = ["barChart"];
            chartProperties["barChart"] = {
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
            chartProperties.chartHeight = 30;
            // title
            chartProperties.title = null;
            // layerarea
            chartProperties.layerArea.background.color = ["0x0B4475FF"];
            chartProperties.layerArea.background.fillType = "color";
            chartProperties.layerArea.background.transparency = 0;
            // drawarea
            chartProperties.drawArea.margin = [20, 20, 40, 0];
            chartProperties.drawArea.background.gradientRatios = [0, 50, 50, 100];
            chartProperties.drawArea.background.color = ["0x02112DFF", "0x144068FF", "0x144068FF", "0x02112DFF"];
            chartProperties.drawArea.background.fillType = "gradient";
            chartProperties.drawArea.background.gradientType = "linearLeftToRight";
            chartProperties.drawArea.background.transparency = 0;
            // barchart
            chartProperties.barChart.columnId = [0];
            chartProperties.barChart.graphType = "proportional";
            chartProperties.barChart.bar.fillType = ["color"];
            chartProperties.barChart.bar.color = ["0x319349FF", "0x153D4EFF", "0xA20F17FF"];
            chartProperties.barChart.bar.height = [85];
            chartProperties.barChart.bar.depth = [14];
            chartProperties.barChart.dataLabels.font.size = [12, 18];
            chartProperties.barChart.dataLabels.font.color = ["0x81878DFF", "0xFFFFFFFF"];
            chartProperties.barChart.dataLabels.font.family = ["Verdana"];
            chartProperties.barChart.dataLabels.font.style = ["normal"];
            return chartProperties;
        };
    var getChartEvents = function() {
            var chartEvents = null;
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
k_dv_dataviz_demo3_cna_proportionalBarChart2 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["BALANCE", "DEBITS"]
                },
                "columnNames": {
                    "values": ["Amount"]
                },
                "data": {
                    "Amount": [80, 30]
                }
            };
            return chartData;
        };
    var getChartProperties = function() {
            var chartProperties = k_dv_dataviz_demo3_cna_proportionalBarChart1()["chartProperties"];
            chartProperties.chartHeight = 30;
            // title
            chartProperties.title = null;
            // layerarea
            chartProperties.layerArea.background.color = ["0x0B4475FF"];
            chartProperties.layerArea.background.fillType = "color";
            chartProperties.layerArea.background.transparency = 0;
            // drawarea
            chartProperties.drawArea.margin = [20, 20, 40, 0];
            chartProperties.drawArea.background.gradientRatios = [0, 50, 50, 100];
            chartProperties.drawArea.background.color = ["0x02112DFF", "0x144068FF", "0x144068FF", "0x02112DFF"];
            chartProperties.drawArea.background.fillType = "gradient";
            chartProperties.drawArea.background.gradientType = "linearLeftToRight";
            chartProperties.drawArea.background.transparency = 0;
            // barchart
            chartProperties.barChart.columnId = [0];
            chartProperties.barChart.graphType = "proportional";
            chartProperties.barChart.bar.fillType = ["color"];
            chartProperties.barChart.bar.color = ["0x319349FF", "0x153D4EFF", "0xA20F17FF"];
            chartProperties.barChart.bar.height = [85];
            chartProperties.barChart.bar.depth = [14];
            chartProperties.barChart.dataLabels.font.size = [12, 18];
            chartProperties.barChart.dataLabels.font.color = ["0x81878DFF", "0xFFFFFFFF"];
            chartProperties.barChart.dataLabels.font.family = ["Verdana"];
            chartProperties.barChart.dataLabels.font.style = ["normal"];
            chartProperties.barChart.bar.color = ["0x319349FF", "0xA20F17FF"];
            return chartProperties;
        };
    var getChartEvents = function() {
            var chartEvents = null;
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
k_dv_dataviz_demo3_cna_scatterplot = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["Jun1", "Jun2", "Jun3", "Jun4", "Jun5", "Jun6", "Jun7", "Jun8", "Jun9", "Jun10", "Jun11", "Jun12", "Jun13", "Jun14", "Jun15", "Jun16", "Jun17", "Jun18", "Jun19", "Jun20", "Jun21", "Jun22", "Jun23", "Jun24", "Jun25", "Jun26", "Jun27", "Jun28"]
                },
                "columnNames": {
                    "values": ["Payment", "Transfer"]
                },
                "data": {
                    "Payment": [400, 350, 500, 14700, 5100, 3750, 2200, 1200, 100, 300, 2550, 6000, 5000, 2400, 150, 3040, 1000, 4350, 3440, 2240, 6000, 3240, 1250, 700, 3550, 5555, 2000, 700],
                    "Transfer": [17500, 4959, 2050, 1600, 14907, 16100, 6500, 13100, 5900, 3500, 12700, 4100, 13100, 17300, 4050, 2900, 13200, 17400, 2600, 1200, 9938, 6200, 65, 4400, 5200, 4700, 1500, 1300],
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
            var dataviz_chartproperties_scatterPlotChart_singleSeries_defaults = function() {
                    // ////
                    var value = {};
                    var properties = dataviz_chartproperties_defaults();
                    value["chartHeight"] = properties["chartHeight"];
                    value["enableScrolling"] = properties["enableScrolling"];
                    value["position"] = properties["position"];
                    value["title"] = properties["title"];
                    value["legend"] = properties["legend"];
                    value["layerArea"] = properties["layerArea"];
                    value["drawArea"] = {
                        "margin": [5, 5, 5, 5],
                        "padding": [0, 0, 0, 0],
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
                    value["dataSetMapping"] = properties["dataSetMapping"];
                    value["axis"] = properties["axis"];
                    value["grid"] = properties["grid"];
                    // //////
                    value["drawEntities"] = ["axis", "grid", "scatterPlotChart"];
                    value["scatterPlotChart"] = {
                        "columnId": [0],
                        "animations": {
                            "onInitAnimation": true,
                        },
                        "dataAlignToAxis": ["primaryYAxis"],
                        "plotMissingValues": "assumeZero",
                        "plotPoints": {
                            "colorIndicator": "columns",
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
                    value.chartHeight = 50;
                    value.scatterPlotChart.dataLabels = null;
                    value.scatterPlotChart.plotPoints.color = ["0x00FF00FF"];
                    value.scatterPlotChart.plotPoints.size = [25];
                    value.axis.xAxis.labels.markingReference = "atMinor";
                    value.title.alignment = "left";
                    value.title.background.transparency = 0;
                    value.title.background.gradientRatios = [0, 100];
                    value.title.background.color = ["0x323232FF", "0x070707ff"];
                    value.layerArea.background.transparency = 0;
                    value.layerArea.background.gradientRatios = [0, 100];
                    value.layerArea.background.color = ["0x323232FF", "0x070707ff"];
                    return value;
                };
            // /////////////
            var chartProperties = dataviz_chartproperties_scatterPlotChart_singleSeries_defaults();
            chartProperties.chartHeight = 40;
            chartProperties.enableScrolling = true;
            // title
            chartProperties.title = null;
            // layerarea
            chartProperties.layerArea.background.color = ["0x0B4475FF"];
            chartProperties.layerArea.background.fillType = "color";
            chartProperties.layerArea.background.transparency = 0;
            // drawarea
            chartProperties.drawArea.margin = [20, 20, 0, 0];
            chartProperties.drawArea.background.gradientRatios = [0, 50, 50, 100];
            chartProperties.drawArea.background.color = ["0x02112DFF", "0x144068FF", "0x144068FF", "0x02112DFF"];
            chartProperties.drawArea.background.fillType = "gradient";
            chartProperties.drawArea.background.gradientType = "linearLeftToRight";
            chartProperties.drawArea.background.transparency = 0;
            // yAxis
            chartProperties.axis.yAxis.labels.font.color = ["0xA8C7E3FF"];
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.font.size = [12];
            chartProperties.axis.yAxis.labels.format.prefix = ["$"];
            chartProperties.axis.yAxis.axisLine.visible = true;
            chartProperties.axis.yAxis.axisLine.line.color = ["0x000000ff"];
            chartProperties.axis.yAxis.scale.offset.value = [1, 0];
            chartProperties.axis.yAxis.scale.offset.type = "numberOfIntervals";
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.intervalMarks.major.visible = true;
            chartProperties.axis.yAxis.intervalMarks.major.line.color = ["0xA8C7E3FF"];
            chartProperties.axis.yAxis.intervalMarks.minor.visible = false;
            // xAxis
            chartProperties.axis.xAxis.axisLine.visible = true;
            chartProperties.axis.xAxis.axisLine.line.color = ["0x000000ff"];
            chartProperties.axis.xAxis.scale.offset.value = [1, 0];
            chartProperties.axis.xAxis.scale.offset.type = "numberOfIntervals";
            chartProperties.axis.xAxis.scale.gap = 75;
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "start";
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.font.size = [12];
            chartProperties.axis.xAxis.labels.font.color = ["0xA8C7E3FF"];
            chartProperties.axis.xAxis.labels.markingReference = "atMajor";
            chartProperties.axis.xAxis.intervalMarks.major.visible = true;
            chartProperties.axis.xAxis.intervalMarks.major.line.color = ["0xA8C7E3FF"];
            chartProperties.axis.xAxis.intervalMarks.minor.visible = false;
            // grid
            chartProperties.grid.yAxisMajorGrid.line.color = ["0x000000ff"];
            chartProperties.grid.yAxisMinorGrid.visible = true;
            chartProperties.grid.yAxisMinorGrid.line.color = ["0x000000ff"];
            chartProperties.grid.xAxisMajorGrid.line.color = ["0x000000ff"];
            chartProperties.grid.xAxisMinorGrid.visible = true;
            chartProperties.grid.xAxisMinorGrid.line.color = ["0x000000ff"];
            // scatterplot
            chartProperties.scatterPlotChart.plotPoints.color = ["0x85BC4DFF", "0x03B1FFFF"];
            chartProperties.scatterPlotChart.plotPoints.colorIndicator = "columns";
            chartProperties.scatterPlotChart.plotPoints.transparency = [0, 0];
            chartProperties.scatterPlotChart.plotPoints.marker.type = ["bubble"];
            chartProperties.scatterPlotChart.plotPoints.size = [25, 25];
            chartProperties.scatterPlotChart.columnId = [0, 1];
            // legend
            chartProperties.legend.visible = true;
            chartProperties.legend.indicators = ["marker", "textLabel"];
            chartProperties.legend.marker.type = "colorCircle";
            chartProperties.legend.marker.color = ["0x85BC4DFF", "0x03B1FFFF"];
            chartProperties.legend.textLabel.text = ["Payment", "Transfer"];
            chartProperties.legend.textLabel.color = ["0xA8C7E3FF", "0xA8C7E3FF"];
            chartProperties.legend.textLabel.margin = [3, 5, 1, 1];
            chartProperties.legend.position = "bottom";
            chartProperties.legend.layout = "horizantal";
            chartProperties.legend.alignment = "left";
            chartProperties.legend.containerWt = 15;
            chartProperties.legend.padding = [1, 1, 1, 1];
            return chartProperties;
        };
    // popup
    var showPopup = function(widgetId, argx, argy) {
            var context1 = [];
            var mypopup = k_dv.dataviz.app.frm.popUpForm();
            var widget = widgetId;
            // kony.print("demo_CNA : showPopup : " + widget);
            context1["widget"] = widget;
            context1["sizetoanchorwidth"] = false;
            context1["anchor"] = "top";
            context1["anchorFrame"] = {
                "x": argx,
                "y": argy
                /* ,"width":2,"height":2 */
            };
            mypopup.setContext(context1);
            mypopup.show();
        };
    // onTap
    var onTap = function(args) {
            var widgetId = args["widgetId"];
            var columnNumber = args["columnNumber"];
            var rowNumber = args["rowNumber"];
            var dataElement = args["dataElement"];
            var argx = args["anchorX"];
            var argy = args["anchorY"];
            kony.print("demo_CNA : chartevents");
            kony.print("demo_CNA : chartevents_onTap - begin");
            kony.print(columnNumber);
            kony.print(rowNumber);
            kony.print(dataElement);
            showPopup(widgetId, argx, argy);
            kony.print("demo_CNA : chartevents_onTap - end");
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
            // ontouch data labels
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.background.transparency = 0;
            chartEvents.eventsMap1.onTouch.background.fillType = "gradient";
            chartEvents.eventsMap1.onTouch.background.gradientRatios = [0, 50, 50, 100];
            chartEvents.eventsMap1.onTouch.background.gradientType = "linearTopToBottom";
            chartEvents.eventsMap1.onTouch.background.color = ["0x02112DFF", "0x144068FF", "0x144068FF", "0x02112DFF"];
            chartEvents.eventsMap1.onTouch.border.line.color = ["0x000000ff"];
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0xA8C7E3FF"];
            // crosshair
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0xA8C7E3FF"];
            // onTap
            chartEvents.eventsMap1.onTap = onTap;
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