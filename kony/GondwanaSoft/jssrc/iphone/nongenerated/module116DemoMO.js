///////////////////////////////////////////////////////////////////////////
///////////////
///////////////
function func_116_demo_16() {
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.demoFormSeaGrey();
    // read
    var usecase_array = [];
    var index = 0;
    usecase_array[index++] = k_dv_dataviz_demo16_mo_demo_sample_1;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
    // swipe gesture
    k_dv.dataviz.app.installSwipeGestureOnForm(demoViewForm);
};
// /////////////
// /////////////
// /////////////
k_dv_dataviz_demo16_mo_demo_sample_1 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["01/2008", "02/2008", "03/2008", "04/2008", "05/2008", "06/2008", "07/2008", "08/2008", "09/2008", "10/2008", "11/2008", "12/2008", "01/2009", "02/2009", "03/2009", "04/2009", "05/2009", "06/2009", "07/2009", "08/2009", "09/2009", "10/2009", "11/2009", "12/2009"]
                },
                "columnNames": {
                    "values": ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"]
                },
                "data": {
                    "C0": [78, 79, 167, 87, 76, 154, 134, 90, 137, 88, 159, 145, 78, 160, 80, 135, 68, 78, 75, 150, 155, 83, 78, 65, 40, 75, 83],
                    "C1": [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
                    "C2": [340, 370, 400, 370, 350, 320, 360, 390, 420, 450, 410, 470, 500, 560, 590, 560, 620, 690, 610, 700, 740, 760, 780, 740],
                    "C3": [250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 380, 410, 440, 470, 500, 530, 560, 580, 600, 620, 640, 660, 680],
                    "C4": [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
                    "C5": [740, 750, 760, 640, 660, 680, 700, 620, 600, 630, 680, 710, 690, 660, 638, 617, 595, 630, 640, 660, 627, 604, 574, 540],
                    "C6": [600, 595, 590, 585, 580, 575, 570, 565, 560, 555, 550, 545, 540, 535, 530, 525, 520, 515, 510, 505, 500, 495, 490, 485],
                    "C7": [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
                    "C8": [344, 335, 336, 334, 332, 324, 322, 315, 304, 296, 288, 276, 264, 255, 260, 274, 282, 294, 302, 316, 324, 332, 344, 356],
                }
            };
            return chartData;
        };
    var max_y_axis_ascale = 900;
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
    // axis, grid, title, legend
    var getLayerProperties_0_axis_grid_title = function() {
            // ////////
            var dataviz_chartproperties_lineChart_singleSeries_defaults = function() {
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
            // axis, grid, title, legend
            var chartProperties = dataviz_chartproperties_lineChart_singleSeries_defaults();
            chartProperties["drawEntities"] = ["axis", "grid"];
            chartProperties.dataSetMapping.eventsSetId = "events0";
            chartProperties.enableScrolling = false;
            chartProperties.position = [0, 0, 100, 100];
            // title
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
            // layerarea
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.color = ["0xffffffff"];
            // axis
            chartProperties.axis.yAxis.scale.maxValue = max_y_axis_ascale;
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
            // grid
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.xAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.visible = false;
            // legend
            chartProperties.legend.visible = false;
            return chartProperties;
        };
    // /////////////
    var getLayerProperties_1_areachart_bottom_step_line = function() {
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
            chartProperties["drawEntities"] = ["axis", "areaChart"];
            chartProperties["grid"] = null;
            chartProperties.dataSetMapping.eventsSetId = "events1";
            chartProperties.enableScrolling = false;
            chartProperties.position = [0, 10, 100, 100];
            // title
            chartProperties.title = null;
            // layerarea
            chartProperties.layerArea.background.transparency = 100;
            // areaChart
            chartProperties.areaChart.columnId = [1];
            chartProperties.areaChart.graphType = "normal";
            chartProperties.areaChart.lineType = "normal";
            chartProperties.areaChart.dataAlignToAxis = ["primaryYAxis"];
            chartProperties.areaChart.line.visible = false;
            chartProperties.areaChart.dataLabels = null;
            chartProperties.areaChart.area.fillType = ["color"];
            chartProperties.areaChart.area.colorAboveXAxis = ["0xB4B4B4FF"];
            chartProperties.areaChart.area.transparency = [20];
            chartProperties.areaChart.plotPoints.visible = false;
            // axis
            chartProperties.axis.yAxis.scale.maxValue = max_y_axis_ascale;
            chartProperties.axis.yAxis.axisLine.visible = false;
            chartProperties.axis.yAxis.labels.visible = false;
            chartProperties.axis.yAxis.intervalMarks.visible = false;
            chartProperties.axis.xAxis.axisLine.visible = false;
            chartProperties.axis.xAxis.labels.visible = false;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            return chartProperties;
        };
    // /////////////
    var getLayerProperties_2_linechart_step_line = function() {
            var chartProperties = getLayerProperties_1_areachart_bottom_step_line();
            chartProperties["areaChart"] = null;
            chartProperties["drawEntities"] = ["axis", "lineChart"];
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
            chartProperties.dataSetMapping.eventsSetId = "events2";
            // step line
            chartProperties.lineChart.columnId = [0];
            chartProperties.lineChart.lineType = "stepLine";
            chartProperties.lineChart.line.color = ["0x949094FF"];
            chartProperties.lineChart.line.width = [2];
            chartProperties.lineChart.plotPoints.visible = false;
            chartProperties.lineChart.dataLabels = null;
            return chartProperties;
        };
    // /////////////
    var getLayerProperties_3_areachart_top = function() {
            // blue - area
            var chartProperties = getLayerProperties_1_areachart_bottom_step_line();
            chartProperties.dataSetMapping.eventsSetId = "events3";
            // areaChart
            chartProperties.areaChart.columnId = [3, 4];
            chartProperties.areaChart.graphType = "stacked";
            chartProperties.areaChart.lineType = "smooth";
            chartProperties.areaChart.area.colorAboveXAxis = ["0xFF0000FF", "0x65AAB0FF"];
            chartProperties.areaChart.area.transparency = [100, 10];
            return chartProperties;
        };
    // /////////////
    var getLayerProperties_4_linechart_top_areachart = function() {
            // blue area line
            var chartProperties = getLayerProperties_2_linechart_step_line();
            chartProperties.dataSetMapping.eventsSetId = "events4";
            // linechart
            chartProperties.lineChart.columnId = [2];
            chartProperties.lineChart.lineType = "smooth";
            chartProperties.lineChart.line.color = ["0xFFFFFFFF"];
            chartProperties.lineChart.plotPoints.visible = true;
            chartProperties.lineChart.plotPoints.size = [8];
            chartProperties.lineChart.plotPoints.color = ["0xED5230ff"];
            chartProperties.lineChart.plotPoints.transparency = [20];
            chartProperties.lineChart.plotPoints.marker.type = ["circle"];
            chartProperties.lineChart.dataLabels = null;
            return chartProperties;
        };
    // /////////////
    var getLayerProperties_5_areachart_middle = function() {
            // green area
            var chartProperties = getLayerProperties_1_areachart_bottom_step_line();
            chartProperties.dataSetMapping.eventsSetId = "events5";
            // areaChart
            chartProperties.areaChart.columnId = [6, 7];
            chartProperties.areaChart.graphType = "stacked";
            chartProperties.areaChart.lineType = "smooth";
            chartProperties.areaChart.area.colorAboveXAxis = ["0xFF0000FF", "0x455A73FF"];
            chartProperties.areaChart.area.transparency = [100, 10];
            return chartProperties;
        };
    // /////////////
    var getLayerProperties_6_linechart_middle_areachart = function() {
            // green area lines
            var chartProperties = getLayerProperties_2_linechart_step_line();
            chartProperties.dataSetMapping.eventsSetId = "events6";
            // linechart
            chartProperties.lineChart.columnId = [5];
            chartProperties.lineChart.lineType = "smooth";
            chartProperties.lineChart.line.color = ["0xFFFFFFFF"];
            chartProperties.lineChart.plotPoints.visible = true;
            chartProperties.lineChart.plotPoints.size = [8];
            chartProperties.lineChart.plotPoints.color = ["0xED5230ff"];
            chartProperties.lineChart.plotPoints.transparency = [20];
            chartProperties.lineChart.plotPoints.marker.type = ["circle"];
            chartProperties.lineChart.dataLabels = null;
            return chartProperties;
        };
    // /////////////
    var getLayerProperties_7_linechart_only = function() {
            // only blue line
            var chartProperties = getLayerProperties_2_linechart_step_line();
            chartProperties.dataSetMapping.eventsSetId = "events7";
            // linechart
            chartProperties.lineChart.columnId = [8];
            chartProperties.lineChart.lineType = "smooth";
            chartProperties.lineChart.line.color = ["0x0D0664ff"];
            chartProperties.lineChart.plotPoints.visible = false;
            chartProperties.lineChart.dataLabels = null;
            return chartProperties;
        };
    // /////////////
    var getChartProperties = function() {
            var value = {
                "chartHeight": 100,
                "sharedLayerMode": true,
                "layers": ["layer0", "layer1", "layer2", "layer3", "layer4", "layer5", "layer6", "layer7"],
                "layer0": getLayerProperties_0_axis_grid_title(),
                "layer1": getLayerProperties_1_areachart_bottom_step_line(),
                "layer2": getLayerProperties_2_linechart_step_line(),
                "layer3": getLayerProperties_3_areachart_top(),
                "layer4": getLayerProperties_4_linechart_top_areachart(),
                "layer5": getLayerProperties_5_areachart_middle(),
                "layer6": getLayerProperties_6_linechart_middle_areachart(),
                "layer7": getLayerProperties_7_linechart_only()
            };
            return value;
        };
    // /////////////
    var getChartEvents = function() {
            var getChartEvents_0 = function() {
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
                    var chartEvents = chartEventsDefaults()["eventsMap1"];
                    chartEvents.onTouch.dataLabels.visible = true;
                    chartEvents.onTouch.dataLabels.indicators = ["numberValue"];
                    chartEvents.onTouch.border.visible = true;
                    chartEvents.onTouch.background.transparency = 0;
                    chartEvents.onTouch.background.fillType = "color";
                    chartEvents.onTouch.background.gradientRatios = [];
                    chartEvents.onTouch.background.color = ["0xffffffff"];
                    chartEvents.onTouch.border.line.color = ["0x9fd500ff"];
                    chartEvents.onSwipe = null;
                    return chartEvents;
                };
            var getChartEvents_1 = function() {
                    var chartEvents = getChartEvents_0();
                    // chartEvents.eventsMap1.onTouch.dataLabels = null;
                    return chartEvents;
                };
            var getChartEvents_2 = function() {
                    var chartEvents = getChartEvents_0();
                    // chartEvents.eventsMap1.onTouch.dataLabels = null;
                    return chartEvents;
                };
            var getChartEvents_3 = function() {
                    var chartEvents = getChartEvents_0();
                    // chartEvents.eventsMap1.onTouch.dataLabels = null;
                    return chartEvents;
                };
            var getChartEvents_4 = function() {
                    var chartEvents = getChartEvents_0();
                    // chartEvents.eventsMap1.onTouch.dataLabels = null;
                    return chartEvents;
                };
            var getChartEvents_5 = function() {
                    var chartEvents = getChartEvents_0();
                    // chartEvents.eventsMap1.onTouch.dataLabels = null;
                    return chartEvents;
                };
            var getChartEvents_6 = function() {
                    var chartEvents = getChartEvents_0();
                    // chartEvents.eventsMap1.onTouch.dataLabels = null;
                    return chartEvents;
                };
            var getChartEvents_7 = function() {
                    var chartEvents = getChartEvents_0();
                    // chartEvents.eventsMap1.onTouch.dataLabels = null;
                    return chartEvents;
                };
            var chartEvents = {
                "events": ["events0", "events1", "events2", "events3", "events4", "events5", "events6", "events7"],
                "events0": getChartEvents_0(),
                "events1": getChartEvents_1(),
                "events2": getChartEvents_2(),
                "events3": getChartEvents_3(),
                "events4": getChartEvents_4(),
                "events5": getChartEvents_5(),
                "events6": getChartEvents_6(),
                "events7": getChartEvents_7()
            };
            return chartEvents;
        };
    // /////////////
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// /////////////
// /////////////////////////////////////////////////////////////////////////