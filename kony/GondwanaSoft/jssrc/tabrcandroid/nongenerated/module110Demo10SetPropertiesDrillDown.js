///////////////////////////////////////////////////////////////////////////
///////////////
k_dv.dataviz.demos.demo10 = {};
// /////////////
function func_110_demo_10() {
    var frm = k_dv.dataviz.demos.demo10.viewForm();
    k_dv.dataviz.app.initViewForm(frm);
    k_dv.dataviz.demos.demo10.usecases();
    frm.show();
};
// /////////////
k_dv.dataviz.demos.demo10.viewForm = function() {
    var frm = k_dv.dataviz.app.frm.demoFormWhite();
    return frm;
};
// /////////////
k_dv.dataviz.demos.demo10.usecases = function() {
    k_dv.dataviz.demos.demo10.index = 0;
    k_dv.dataviz.demos.demo10.counterIndex = 0;
    k_dv.dataviz.demos.demo10.chartWidgetId = [];
    k_dv.dataviz.demos.demo10.usecase_1();
};
// /////////////
k_dv.dataviz.demos.demo10.showOnFormWithContainerIndex = function(
chartInfoTable) {
    var frm = k_dv.dataviz.demos.demo10.viewForm();
    k_dv.dataviz.demos.demo10.index++;
    var index = k_dv.dataviz.demos.demo10.index;
    var containerBox = k_dv.dataviz.app.getContainerOnFormWithIndex(index, frm);
    var chartid = "chart2d3d_" + index.toString();
    var chart2d3d = k_dv.dataviz.chartwidget.createWithChartInfoTable(chartid, chartInfoTable);
    containerBox.add(chart2d3d);
    k_dv.dataviz.demos.demo10.chartWidgetId[index] = chart2d3d;
};
// /////////////
k_dv.dataviz.demos.demo10.usecase_1_onTap = function(args) {
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
                    "values": []
                },
                "columnNames": {
                    "values": ["Firefox", "MSIE", "Chrome", "Safari", "Opera"]
                },
                "data": {
                    "Firefox": [0.2, 0.83, 1.58, 13.12, 5.43],
                    "MSIE": [10.85, 7.35, 33.06, 2.81],
                    "Chrome": [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.5, 0.22],
                    "Safari": [4.55, 1.42, 0.23, 0.21, 0.2, 0.33],
                    "Opera": [0.12, 0.37, 1.65]
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
                    "values": ["perCentofMarketShare"]
                },
                "data": {
                    "perCentofMarketShare": [40, 50, 60]
                }
            };
            return chartData;
        };
    if (rowNumber >= 0 && columnNumber >= 0 && dataElement != -1) {
        var chartInfo = k_dv.dataviz.demos.demo10.properties();
        var chartDataSrc = getChartDataSrc();
        var chartData = getChartData();
        var chartProperties = chartInfo.chartProperties;
        if (rowNumber == 0) {
            chartDataSrc.rowNames.values = ["Firefox 2.0", "Firefox 3.0", "Firefox 3.5", "Firefox 3.6", "Firefox 4.0"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Firefox;
            chartProperties.columnChart.bar.color = ["0x4f7cdbff"];
            chartProperties.axis.xAxis.title.text = "Firefox Versions";
        } else if (rowNumber == 1) {
            chartDataSrc.rowNames.values = ["MSIE 6.0", "MSIE 7.0", "MSIE 8.0", "MSIE 9.0"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.MSIE;
            chartProperties.columnChart.bar.color = ["0x1c283eff"];
            chartProperties.axis.xAxis.title.text = "MSIE Versions";
        } else if (rowNumber == 2) {
            chartDataSrc.rowNames.values = ["Chrome 5.0", "Chrome 6.0", "Chrome 7.0", "Chrome 8.0", "Chrome 9.0", "Chrome 10.0", "Chrome 11.0", "Chrome 12.0"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Chrome;
            chartProperties.columnChart.bar.color = ["0x9bbbc0ff"];
            chartProperties.axis.xAxis.title.text = "Chrome Versions";
            chartProperties.axis.xAxis.labels.font.size = [10];
        } else if (rowNumber == 3) {
            chartDataSrc.rowNames.values = ["Safari 3.1", "Safari 4.0", "Safari 4.1", "Safari 4.2", "Safari 5.0", "Safari 5.2"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Safari;
            chartProperties.columnChart.bar.color = ["0x7b0c00ff"];
            chartProperties.axis.xAxis.title.text = "Safari Versions";
        } else if (rowNumber == 4) {
            chartDataSrc.rowNames.values = ["Opera 9.x", "Opera 10.x", "Opera 11.x"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Opera;
            chartProperties.columnChart.bar.color = ["0x63abcfff"];
            chartProperties.axis.xAxis.title.text = "Opera Versions";
        }
        chartProperties.axis.xAxis.title.font.color = chartProperties.columnChart.bar.color;
        chartData.rowNames = chartDataSrc.rowNames;
        chartInfo.chartEvents.eventsMap1.onTap = k_dv.dataviz.demos.demo10.usecase_1_onTap2;
        chartInfo.chartProperties = chartProperties;
        chartInfo.chartData = chartData;
        k_dv.dataviz.demos.demo10.chartWidgetId[1].setProperties(chartInfo);
    }
    kony.print("chartevents_onTap - end");
};
// /////////////
k_dv.dataviz.demos.demo10.usecase_1_onTap2 = function(args) {
    //var widgetId = args["widgetId"];
    var columnNumber = args["columnNumber"];
    var rowNumber = args["rowNumber"];
    var dataElement = args["dataElement"];
    kony.print("chartevents --- usecase_2_onTap");
    kony.print("chartevents_onTap - begin");
    kony.print("chartevents_onTap - columnNumber");
    kony.print(columnNumber);
    kony.print("chartevents_onTap - rowNumber");
    kony.print(rowNumber);
    kony.print(dataElement);
    if (rowNumber >= 0 && columnNumber >= 0 && dataElement != -1) {
        var chartInfo = k_dv.dataviz.demos.demo10.properties();
        chartInfo.chartEvents.eventsMap1.onTap = k_dv.dataviz.demos.demo10.usecase_1_onTap;
        k_dv.dataviz.demos.demo10.chartWidgetId[1].setProperties(chartInfo);
    }
};
// /////////////
k_dv.dataviz.demos.demo10.usecase_1 = function() {
    var chartInfo = k_dv.dataviz.demos.demo10.properties();
    chartInfo.chartEvents.eventsMap1.onTap = k_dv.dataviz.demos.demo10.usecase_1_onTap;
    k_dv.dataviz.demos.demo10.showOnFormWithContainerIndex(chartInfo);
};
// /////////////
k_dv.dataviz.demos.demo10.properties = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["Firefox", "MSIE", "Chrome", "Safari", "Opera"]
                },
                "columnNames": {
                    "values": ["% of Market Share"]
                },
                "data": {
                    "% of Market Share": [55.11, 21.63, 11.94, 7.15, 2.14]
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
            chartProperties.chartHeight = 99;
            chartProperties.columnChart.dataAlignToAxis = ["primaryYAxis"];
            chartProperties.layerArea.background.gradientType = "linearTopToBottom";
            chartProperties.layerArea.background.fillType = "gradient";
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.gradientRatios = [0, 30, 70, 100];
            chartProperties.layerArea.background.color = ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF", ];
            chartProperties.columnChart.bar.color = ["0x4f7cdbff", "0x1c283eff", "0x9bbbc0ff", "0x7b0c00ff", "0x63abcfff"];
            chartProperties.columnChart.dataLabels.visible = true;
            chartProperties.columnChart.dataLabels.font.color = ["0x000000ff"]; // "0x4c4c4cff"
            chartProperties.columnChart.dataLabels.font.size = [14];
            chartProperties.columnChart.dataLabels.font.style = ["normal"];
            chartProperties.columnChart.dataLabels.placement = "above";
            chartProperties.axis.yAxis.axisLine.visible = false;
            chartProperties.axis.yAxis.intervalMarks.visible = false;
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.yAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.yAxis.labels.font.size = [14];
            chartProperties.axis.yAxis.labels.positionWrtMarkings = "middle";
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.intervalMarks.major.line.color = ["0x00000ff"];
            chartProperties.axis.yAxis.intervalMarks.minor.line.color = ["0x00000ff"];
            chartProperties.axis.yAxis.title.text = "Total Percentage of Market Share";
            chartProperties.axis.yAxis.title.font.color = ["0x4f7cdbff"];
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"]; // "0x5b5b5bff"
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.labels.font.size = [14];
            chartProperties.axis.xAxis.axisLine.crossOtherAxisAt = "start";
            chartProperties.axis.xAxis.labels.markingReference = "atMinor";
            chartProperties.axis.xAxis.labels.positionWrtMarkings = "center";
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            chartProperties.axis.xAxis.title.text = "Browser Bands";
            chartProperties.axis.xAxis.title.font.color = ["0x00000ff"];
            chartProperties.axis.xAxis.title.margin = [0, 0, 10, 0];
            chartProperties.axis.yAxis.title.margin = [10, 0, 0, 0];
            chartProperties.grid.yAxisMajorGrid.line.color = ["0x000000ff"];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.fillType = "color";
            chartProperties.grid.background.color = ["0xffffffff"];
            chartProperties.title.visible = true;
            chartProperties.title.background.transparency = 100;
            chartProperties.title.text = "Browser Market Share April 2011";
            chartProperties.title.font.color = ["0x000000ff"];
            chartProperties.title.font.size = [20];
            chartProperties.title.font.family = ["Helvetica"];
            chartProperties.title.alignment = "center";
            chartProperties.title.font.style = ["normal"];
            chartProperties.title.containerWt = 10;
            // legend
            chartProperties.legend.visible = true;
            chartProperties.legend.indicators = ["marker", "textLabel"];
            chartProperties.legend.marker.type = "colorBox";
            chartProperties.legend.marker.color = ["0x4f7cdbff", "0x1c283eff", "0x9bbbc0ff", "0x7b0c00ff", "0x63abcfff"];
            chartProperties.legend.textLabel.text = ["Firefox", "MSIE", "Chrome", "Safari", "Opera"];
            chartProperties.legend.textLabel.color = ["0x000000ff", "0x000000ff", "0x000000ff", "0x000000ff", "0x000000ff"];
            chartProperties.legend.textLabel.margin = [3, 5, 1, 1];
            chartProperties.legend.position = "bottom";
            chartProperties.legend.layout = "horizantal";
            chartProperties.legend.alignment = "left";
            chartProperties.legend.containerWt = 8;
            chartProperties.legend.padding = [1, 1, 1, 1];
            chartProperties.legend.font.style = ["normal"];
            chartProperties.legend.font.size = [14];
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
            chartEvents.eventsMap1.onTouch.crossHair.line.color = ["0x000000ff"];
            chartEvents.eventsMap1.onTouch.border.visible = true;
            chartEvents.eventsMap1.onTouch.border.line.color = ["0x000000ff"];
            chartEvents.eventsMap1.onTouch.background.color = ["0xffffffff"];
            chartEvents.eventsMap1.onTouch.background.transparency = 0;
            chartEvents.eventsMap1.onTouch.background.fillType = "color";
            chartEvents.eventsMap1.onTouch.dataLabels.indicators = ["rowName", "numberValue"];
            chartEvents.eventsMap1.onTouch.dataLabels.font.color = ["0x000000ff"];
            chartEvents.eventsMap1.onTouch.dataLabels.font.size = [14];
            chartEvents.eventsMap1.onTouch.dataLabels.font.style = ["normal"];
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