datelist = new Array()
productlist = new Array()

function getBrandsByRepByDateService() {
    var inputparam = {};
    inputparam["serviceID"] = "getBrandsByRepByDate";
    inputparam["repId"] = "0008";
    inputparam["startDate"] = "2013-01-01";
    inputparam["endDate"] = "2013-06-30";
    appmiddlewareinvokerasync(inputparam, getBrandsByRepByDateCallback);
}

function getDateFilterService() {
    var inputparam = {};
    inputparam["serviceID"] = "getDateFilter";
    inputparam["date"] = "2013";
    appmiddlewareinvokerasync(inputparam, getDateFilterCallback);
}

function getBrandsByRepByDateCallback(status, getBrandsByRepByDate) {
    if (status == 400) {
        if (getBrandsByRepByDate["products"] != null && getBrandsByRepByDate["products"].length > 0) {
            var columnValues = getBrandsByRepByDate["products"];
            var length = columnValues.length;
            for (var index = 0; index < length; index++) {
                productlist.push(columnValues[index]["item"]);
            }
            kony.print("-----> Global vars productlist " + JSON.stringify(productlist));
            //
            getDateFilterService();
        } else {
            var alert_seq5_act0 = kony.ui.Alert({
                "message": "Brands service failed.",
                "alertType": constants.ALERT_TYPE_ERROR,
                "alertTitle": "Error",
                "yesLabel": "Ok",
                "noLabel": "",
                "alertIcon": "",
                "alertHandler": null
            }, {});
        }
    }
}

function getDateFilterCallback(status, getDateFilter) {
    if (status == 400) {
        alert("date filter : " + JSON.stringify(getDateFilter["date"]));
        if (getDateFilter["date"] != null && getDateFilter["date"].length > 0) {
            var rowValues = getDateFilter["date"];
            var length = rowValues.length;
            for (var index = 0; index < length; index++) {
                datelist.push(rowValues[index]["item"]);
            }
            kony.print("-----> Global vars datelist " + JSON.stringify(datelist));
            //
            //func_init_frm_001_line_chart_001();
        } else {
            var alert_seq11_act0 = kony.ui.Alert({
                "message": "Date service failed.",
                "alertType": constants.ALERT_TYPE_ERROR,
                "alertTitle": "Error",
                "yesLabel": "Ok",
                "noLabel": "",
                "alertIcon": "",
                "alertHandler": null
            }, {});
        }
    }
}
///////////////////////////////////////////////////////////////////////////
///////////////
function func_init_frm_001_line_chart_001() {
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.demoFormSeaGrey();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_linechart_demo_sample_1;
    //    usecase_array[++index] = k_dv_dataviz_linechart_demo_sample_2;
    //    usecase_array[++index] = k_dv_dataviz_linechart_demo_sample_3;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
    // swipe gesture
    k_dv.dataviz.app.installSwipeGestureOnForm(demoViewForm);
};
// /////////////
// //////////// Doc purpose //////////////////////
var k_dv_dataviz_linechart_demo_sample_1 = function() {
        /////// chart data
        // --------------------------
        //		var countcollection = 5;
        //		var yearcollection = 12;
        //		brandlist = new Array();
        ////		for (var jk = 0; jk < countcollection; jk++) {
        ////			brandlist[jk] = " " + jk;
        ////		}
        //
        //		brandlist[0] = "Product 2";
        //		brandlist[1] = "Product 3";
        //		brandlist[2] = "Product 7";
        //		brandlist[3] = "Product 9";
        //		brandlist[4] = "Product 34";
        //		
        //		
        //		periodlist = new Array();
        ////		for (var ck = 0; ck < yearcollection; ck++){
        ////			periodlist[ck] = " " + ck;
        ////		}
        //		periodlist[0] = "Jan 1990";
        //		periodlist[1] = "Feb 1990";
        //		periodlist[2] = "Mar 1990";
        //		periodlist[3] = "Apr 1990";
        //		periodlist[4] = "May 1990";
        //		periodlist[5] = "Jun 1990";
        //		periodlist[6] = "Jul 1990";
        //		periodlist[7] = "Aug 1990";
        //		periodlist[8] = "Sep 1990";
        //		periodlist[9] = "Aug 1990";
        //		periodlist[10] = "Nov 1990";
        //		periodlist[11] = "Dec 1990";
        //		var tempbrandlist = new Array();
        //		var tempperiodlist = new Array();
        //		
        //		for (var cb = 0; cb < brandlist.length; cb++) {
        //			tempbrandlist.push(brandlist[cb]);
        //		}
        //
        //		alert(tempbrandlist);
        // --------------------- end --------------------------
        ////////// funtion begin getChartData()
        var getChartData = function() {
                alert("---> Row Data : " + datelist);
                alert("---> Column Data : " + productlist);
                /////// data
                var chartData = {
                    "rowNames": {
                        //"values": ["Jan 2008", "Feb 2008", "Mar 2008", "Apr 2008", "May 2008", "Jun 2008", "Jul 2008", "Aug 2008", "Sep 2008", "Aug 2008", "Nov 2008", "Dec 2008"]
                        "values": datelist
                    },
                    "columnNames": {
                        //   "values": ["Deposit", "Cash", "Credit", "Target", "Achieved"]
                        //"values": ["Product 2", "Product 6", "Product 7", "Product 11", "Product 12"]
                        "values": productlist
                    },
                    "data": {
                        //                        "Deposit": [234, 236, 224, 244, 240, 218, 256, 254, 248, 226, 234, 228, 234, 236, 224, 344, 340, 318, 356, 324, 344, 340, 318, 356],
                        //                        "Cash": [524, 512, 514, 526, 534, 536, 522, 544, 342, 318, 328, 324, 324, 312, 314, 326, 434, 436, 422, 455, 426, 434, 436, 422],
                        //                        "Credit": [344, 335, 336, 334, 332, 324, 322, 425, 444, 446, 448, 446, 444, 435, 436, 434, 532, 524, 522, 536, 534, 532, 524, 522],
                        //                        "Achieved": [78, 79, 67, 87, 76, 54, 34, 90, 87, 88, 59, 45, 78, 80, 80, 35, 68, 78, 75, 70, 75, 83, 78, 75, 70, 75, 83],
                        //                        "Target": [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
                        "Product 2": [234, 236, 224, 244, 240, 218, 256, 254, 248, 226, 234, 228],
                        "Product 6": [524, 512, 514, 526, 534, 536, 522, 544, 342, 318, 328, 324],
                        "Product 7": [344, 335, 336, 334, 332, 324, 322, 425, 444, 446, 448, 446],
                        "Product 11": [78, 79, 67, 87, 76, 54, 34, 90, 87, 88, 59, 45],
                        "Product 12": [120, 125, 135, 155, 170, 128, 67, 169, 215, 190, 145, 180]
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
                chartProperties.title.text = "Sales Rep Luckson Karikoga, Sales Trend";
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
                //               chartProperties.legend.textLabel.text = ["Product 2", "Product 6", "Product 7", "Product 11"];
                chartProperties.legend.textLabel.text = productlist;
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
                chartEvents.onTouch.background.gradientRatios = [];
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
// ///////////////
var chartInfoTable = k_dv_dataviz_linechart_demo_sample_1();
var konyDVWidget = new kony.ui.Chart2D3D({
    "id": "chartWidget",
    "isVisible": true
}, {
    "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
    "vExpand": true,
    "hExpand": true,
    "margin": [0, 0, 0, 0],
    "padding": [0, 0, 0, 0],
    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
    "marginInPixel": true,
    "paddingInPixel": true,
    "containerWeight": 100
}, chartInfoTable);
///////////////////////////////////////////////////
// //////////// Doc purpose //////////////////////
////////////////////
k_dv_dataviz_linechart_demo_sample_2 = function() {
    /////// data
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["Jan 2008", "Feb 2008", "Mar 2008", "Apr 2008", "May 2008", "Jun 2008", "Jul 2008", "Aug 2008", "Sep 2008", "Oct 2008", "Nov 2008", "Dec 2008"]
                },
                "columnNames": {
                    //   "values": ["Cash", "Deposit", "Credit"]
                    "values": ["Product 2", "Product 6", "Product 7"]
                },
                "data": {
                    //                    "Cash": [24, 12, 14, 26, 34, 36, 22, 44, 42, 18, 28, 24],
                    //                    "Deposit": [34, 36, 24, 44, 40, 18, 56, 54, 48, 26, 34, 28],
                    //                    "Credit": [44, 35, 36, 34, 32, 24, 22, 25, 44, 46, 48, 46],
                    "Product 2": [24, 12, 14, 26, 34, 36, 22, 44, 42, 18, 28, 24],
                    "Product 6": [34, 36, 24, 44, 40, 18, 56, 54, 48, 26, 34, 28],
                    "Product 7": [44, 35, 36, 34, 32, 24, 22, 25, 44, 46, 48, 46],
                }
            };
            return chartData;
        };
    /////// chart properties
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
            var chartProperties = dataviz_chartproperties_lineChart_singleSeries_defaults();
            chartProperties.chartHeight = 60;
            chartProperties.lineChart.columnId = [0, 1, 2];
            chartProperties.enableScrolling = false;
            chartProperties.title.visible = true;
            chartProperties.title.text = "Sales Rep: Luckson Karikoga, Sales Trend from Jan 2008 - Dec 2009";
            chartProperties.title.alignment = "center";
            chartProperties.title.font.color = ["0x000000ff"];
            chartProperties.title.font.style = ["Bold"];
            chartProperties.title.font.size = ["20"];
            chartProperties.title.containerWt = 10;
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.color = ["0xffffffff"];
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.color = ["0xffffffff"];
            chartProperties.lineChart.lineType = "normal";
            chartProperties.lineChart.line.color = ["0x9fd500ff", "0x22b8dbff", "0xf7d700ff"];
            chartProperties.lineChart.plotPoints.color = ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"];
            chartProperties.lineChart.plotPoints.marker.type = ["bubble", "bubble", "bubble"];
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.xAxis.labels.font.style = ["Bold"];
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.scale.minValue = 0;
            chartProperties.axis.yAxis.scale.maxValue = 60;
            chartProperties.axis.yAxis.scale.majorInterval = 10;
            chartProperties.axis.yAxis.scale.minorInterval = 5;
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.orientationAngle = 0;
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.labels.font.size = [12];
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.labels.orientationAngle = 90;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.xAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.background.transparency = [0];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.fillType = "alternateColor";
            chartProperties.grid.background.transparency = 50;
            chartProperties.grid.background.alternateColorPattern = "yMajorMajor";
            chartProperties.grid.background.color = ["0xaaaaaaff", "0xeeeeeeff"];
            // legend
            chartProperties.legend.visible = true;
            chartProperties.legend.indicators = ["marker", "textLabel"];
            chartProperties.legend.marker.type = "colorBox";
            chartProperties.legend.marker.color = ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"];
            chartProperties.legend.textLabel.text = ["Product 2", "Product 6", "Product 7"];
            chartProperties.legend.textLabel.color = ["0x000000ff", "0x000000ff", "0x000000ff"];
            chartProperties.legend.textLabel.margin = [3, 5, 1, 1];
            chartProperties.legend.position = "top";
            chartProperties.legend.layout = "horizantal";
            chartProperties.legend.alignment = "left";
            chartProperties.legend.containerWt = 8;
            chartProperties.legend.padding = [1, 1, 1, 1];
            chartProperties.legend.font.style = ["normal"];
            chartProperties.legend.font.size = [12];
            // events
            chartProperties.dataSetMapping.eventsSetId = null;
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
            var chartEvents = chartEventsDefaults()["eventsMap1"];
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
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// ////////////////////////////////////
////////////////////
k_dv_dataviz_linechart_demo_sample_3 = function() {
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["01/2008", "02/2008", "03/2008", "04/2008", "05/2008", "06/2008", "07/2008", "08/2008", "09/2008", "10/2008", "11/2008", "12/2008"]
                },
                "columnNames": {
                    "values": ["Cash", "Deposit", "Credit"]
                },
                "data": {
                    "Cash": [24, 12, 14, 26, 34, 36, 22, 44, 42, 18, 28, 24],
                    "Deposit": [34, 36, 24, 44, 40, 18, 56, 54, 48, 26, 34, 28],
                    "Credit": [44, 35, 36, 34, 32, 24, 22, 25, 44, 46, 48, 46],
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
            var chartProperties = dataviz_chartproperties_lineChart_singleSeries_defaults();
            chartProperties.chartHeight = 60;
            chartProperties.lineChart.columnId = [0, 1, 2];
            chartProperties.enableScrolling = false;
            chartProperties.title.visible = true;
            chartProperties.title.text = "StepLine: MultiSeries, PinchToZoom, Crosshair";
            chartProperties.title.alignment = "center";
            chartProperties.title.font.color = ["0x000000ff"];
            chartProperties.title.font.style = ["Bold"];
            chartProperties.title.font.size = ["20"];
            chartProperties.title.containerWt = 10;
            chartProperties.title.background.transparency = 0;
            chartProperties.title.background.color = ["0xffffffff"];
            chartProperties.layerArea.background.transparency = 0;
            chartProperties.layerArea.background.color = ["0xffffffff"];
            chartProperties.lineChart.lineType = "stepLine";
            chartProperties.lineChart.line.color = ["0x9fd500ff", "0x22b8dbff", "0xf7d700ff"];
            chartProperties.lineChart.plotPoints.color = ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"];
            chartProperties.lineChart.plotPoints.marker.type = ["bubble", "bubble", "bubble"];
            chartProperties.axis.xAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.xAxis.labels.font.style = ["Bold"];
            chartProperties.axis.yAxis.labels.font.color = ["0x000000ff"];
            chartProperties.axis.yAxis.labels.font.style = ["normal"];
            chartProperties.axis.yAxis.scale.minValue = 0;
            chartProperties.axis.yAxis.scale.maxValue = 60;
            chartProperties.axis.yAxis.scale.majorInterval = 10;
            chartProperties.axis.yAxis.scale.minorInterval = 5;
            chartProperties.axis.xAxis.labels.margin = [0, 0, 0, 0];
            chartProperties.axis.xAxis.labels.orientationAngle = 0;
            chartProperties.axis.xAxis.labels.visible = true;
            chartProperties.axis.xAxis.labels.font.size = [12];
            chartProperties.axis.xAxis.labels.font.style = ["normal"];
            chartProperties.axis.xAxis.labels.orientationAngle = 90;
            chartProperties.axis.xAxis.intervalMarks.visible = false;
            chartProperties.grid.xAxisMinorGrid.visible = false;
            chartProperties.grid.xAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.yAxisMajorGrid.visible = true;
            chartProperties.grid.yAxisMajorGrid.line.width = [1];
            chartProperties.grid.background.transparency = [0];
            chartProperties.grid.yAxisMinorGrid.visible = false;
            chartProperties.grid.background.fillType = "alternateColor";
            chartProperties.grid.background.transparency = 50;
            chartProperties.grid.background.alternateColorPattern = "yMajorMajor";
            chartProperties.grid.background.color = ["0xaaaaaaff", "0xeeeeeeff"];
            // legend
            chartProperties.legend.visible = true;
            chartProperties.legend.indicators = ["marker", "textLabel"];
            chartProperties.legend.marker.type = "colorBox";
            chartProperties.legend.marker.color = ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"];
            chartProperties.legend.textLabel.text = ["Stock1", "Stock2", "Stock3"];
            chartProperties.legend.textLabel.color = ["0x000000ff", "0x000000ff", "0x000000ff"];
            chartProperties.legend.textLabel.margin = [3, 5, 1, 1];
            chartProperties.legend.position = "top";
            chartProperties.legend.layout = "horizantal";
            chartProperties.legend.alignment = "left";
            chartProperties.legend.containerWt = 8;
            chartProperties.legend.padding = [1, 1, 1, 1];
            chartProperties.legend.font.style = ["normal"];
            chartProperties.legend.font.size = [12];
            // events
            chartProperties.dataSetMapping.eventsSetId = null;
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
            var chartEvents = chartEventsDefaults()["eventsMap1"];
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
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
// ////////////////////////////////////
// /////////////
// /////////////////////////////////////////////////////////////////////////