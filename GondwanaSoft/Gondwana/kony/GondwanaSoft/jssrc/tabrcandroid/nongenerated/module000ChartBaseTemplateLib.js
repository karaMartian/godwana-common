/////////////////////////////////////////////////////////////////////////////////////
//// Version : 5.5.0016
//// Last Edited : 27/Jun/2013
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//// Info
/////////////////////////////////////////////////////////////////////////////////////
/*
 1) Namespace :- kony.ui.Chart2D3D()

 2) API :-
 frmMain = new kony.ui.Form2({}, {}, {});
 var chart2d3d = new kony.ui.Chart2D3D({},{},{});
 frmMain.add(chart2d3d);

 3) ChartConstructor :-
 var chartProperties = {} //described below
 var chartData = {} //described below
 var chartEvents = {} //described below

 var chartInfoTable = {
 "chartProperties": chartProperties,
 "chartData": chartData,
 "chartEvents": chartEvents
 };

 var chart2d3d = new kony.ui.Chart2D3D({}, {}, chartInfoTable[optional]);

 4) Supported API :-
 a) setProperties( jsonTableProperties ) 
 - Can be used to set properties, data and events, it replace existing properties, data and events with new set.
 - Signature : 

 var chartInfoTable = {
 "chartProperties": {},
 "chartData": {},
 "chartEvents": {}
 };

 chart2d3d.setProperties(chartInfoTable);

 b) setData( jsonTableData ) 
 - Can be used to set new data , it replaces the existing data with new data.
 - Signature : 

 var chartData = {};
 chart2d3d.setData(chartData);

 c) setEvents( jsonTable ) 
 - Can be used to set new Events set, it replaces the existing registered events.
 - Signature : 

 var chartEvents = {};
 chart2d3d.setEvents(chartEvents);

 c) addData( jsonTableData ) 
 - Can be used to append new data to the existing dataset .
 - Signature :

 var chartData = {};
 chart2d3d.addData(chartData);



 //outline
 var chartProperties = {
 "layers" : [ "layer1" ],
 "layer1" : {
 "layerArea" : {},
 "title" : {},
 "legend" : {},
 "drawArea" : {},
 "dataSetMapping" : {},
 "drawEntities" : {}
 }
 };

 /*

 */
/////////////////////////////////////////////////////////////////////////////////////
//// __kdv_base_properties
/////////////////////////////////////////////////////////////////////////////////////
var __kdv_base_properties = {};
// /////////////////////////////////////////////////////////////////////////
// ///////////// Font
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.font = function() {
    var value = {
        "size": [14]
        /* [Datatype : [number(range : 0-80) or "auto"]] */
        /* ["auto", or number] */
        /* [(missing = ["auto"]), (invalid = 0), (X<0 =0), (X>80 = 80)] */,
        "family": ["Verdana"]
        /* [Datatype : [string]] */
        /* ["auto", or "fontname"] */
        /* [(missing = ["auto"]), (invalid = ["auto"])] */,
        "style": ["Bold"]
        /* [Datatype : [string]] */
        /* ["auto", "normal", "bold", "italic" : not case sensitive] */
        /* [(missing = ["auto"]), (invalid = ["auto"])] */,
        "color": ["0x000000FF"]
        /* [Datatype : ["RGBA"]] */
        /* [RGBA format : 32 bit : hex value as string] */
        /* [(invalid values = "0x000000FF") ] */,
        "transparency": [0]
        /* [Datatype : [number : range : 0 - 100]] */
        /* [ % value ] */
        /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// Line
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.line = function() {
    var value = {
        "color": ["0x000000FF"]
        /* [Datatype : ["RGBA"]] */
        /* [RGBA format : 32 bit : hex value as string] */
        /* [(invalid values = "0x000000FF") ] */,
        "width": [1]
        /* [Datatype : [number]] */
        /* [(invalid values = 0), (missing key = 1) ] */,
        "transparency": [0]
        /* [Datatype : [number : range : 0 - 100]] */
        /* [ % value ] */
        /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// background
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.background = function() {
    var value = {
        "fillType": "gradient"
        /* [Datatype : string ] */
        /* ["color", "gradient"] */
        /* [(invalid values, missing key = "color") ] */,
        "transparency": 100
        /* [Datatype : [number : range : 0 - 100]] */
        /* [ % value ] */
        /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */,
        "gradientType": "linearTopToBottom"
        /* [Datatype : "string"] */
        /* ["linearTopToBottom", "linearLeftToRight"] */
        /* [key is valid only if "fillType": "gradient" ] */
        /* [(invalid values, missing key = "linearTopToBottom") ] */,
        "gradientRatios": [0, 20, 50, 100]
        /* [Datatype : [numbers]] */
        /* [key is valid only if "fillType": "gradient" ] */
        /* [% value : range : 0 - 100] */
        /*
         * [(invalid values = 0), (out of range : clamp), (missing key :
         * [0,100])]
         */,
        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
        /* [Datatype : ] */
        /* [RGBA format : 32 bit : hex value as string] */
        /*
         * [(invalid values = "0x000000FF"), (gradientRatios > colors = repeat
         * last color) ]
         */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// border
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.border = function() {
    var value = {
        "visible": false
        /* [Datatype : boolean] */
        /* [true, false, 1, 0] */
        /* [(invalid = false), (missing = true )] */,
        "line": __kdv_base_properties.line()
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// labelFormat
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.labelFormat = function() {
    var value = {
        "prefix": [""]
        /* [ Example :["$"] - $1000 ] */,
        "suffix": [""]
        /* [ Example :["$"] - 1000$ ] */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// dataLabels
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.dataLabels = function() {
    /* [(invalid, missing key = NULL)] */
    var value = {
        "visible": true
        /* [Datatype : boolean] */
        /* [true, false, 1, 0] */
        /* [(invalid = false), (missing = true )] */,
        "indicators": ["numberValue"]
        /* [Datatype : [strings]] */
        /*
         * [combination of one or more : "numberValue", "percentValue",
         * "columnName", "rowName"]
         */
        /* [(invalid = remove), (missing key = ["numberValue"])] */,
        "separator": "space"
        /* [Datatype : string] */
        /* ["space", "comma", "colon", "semicolon", "newLine"] */
        /* [(invalid, missing key = "space")] */,
        "placement": "inside"
        /* [Datatype : string] */
        /*
         * [Line, Area : Singleseries : ["right", "left", "top", "bottom",
         * "center" ] ]
         */
        /*
         * [Line, Area : Multiseries : ["right", "left", "top", "bottom",
         * "center" ] ]
         */
        /* [Pie, Donut : Singleseries : [inside, edge, outside] ] */
        /* [Pie, Donut : Multiseries : [inside, edge, outside] ] */
        /*
         * [Bar : Singleseries : ["right", "left", "center", "inside",
         * "nearOrigin"] ]
         */
        /*
         * [Bar : Multiseries normal/clustered : ["right", "left", "center",
         * "inside", "nearOrigin"] ]
         */
        /* [Bar : Multiseries stacked : ["center", "inside", "nearOrigin"] ] */
        /*
         * [Column : Singleseries : ["above", "below", "center", "inside",
         * "nearOrigin"] ]
         */
        /*
         * [Column : Multiseries normal/clustered : ["above", "below", "center",
         * "inside", "nearOrigin"] ]
         */
        /* [Bar : Multiseries stacked : ["center", "inside", "nearOrigin"] ] */
        /* [Bubble : ["right", "left", "top", "bottom", "center" ] ] */
        /* [ScatterPlot : ["right", "left", "top", "bottom", "center" ] ] */
        /* [CandleStick : N.A ] */,
        "orientationAngle": 0
        /* [Datatype : angle - positive - counter clock wise] */
        /* [degrees] */
        /* [(invalid = 0), (missing key = 0 - {Pie and Donut - NULL})] */,
        "font": __kdv_base_properties.font()
        /* [(invalid, missing key = default font map)] */,
        "connector": {
            /* key valid only for pie and donut */
            /* [(invalid, missing key = NULL)] */
            "visible": false
            /* [Datatype : boolean] */
            /* [true, false, 1, 0] */
            /* [(invalid = false), (missing = true )] */,
            "line": __kdv_base_properties.line()
            /* [(invalid, missing key = default line map)] */
        }
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// onTouchDataLabels
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.onTouchDataLabels = function() {
    /* [(invalid, missing key = NULL)] */
    var value = {
        "visible": true
        /* [Datatype : boolean] */
        /* [true, false, 1, 0] */
        /* [(invalid = false), (missing = true )] */,
        "indicators": ["numberValue"]
        /* [Datatype : [strings]] */
        /*
         * [combination of one or more : "numberValue", "percentValue",
         * "columnName", "rowName"]
         */
        /* [(invalid = remove), (missing key = ["numberValue"])] */,
        "separator": "space"
        /* [Datatype : string] */
        /* ["space", "comma", "colon", "semicolon", "newLine"] */
        /* [(invalid, missing key = "space")] */,
        "font": __kdv_base_properties.font()
        /* [(invalid, missing key = default font map)] */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// axisLine
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.axisLine = function() {
    var value = {
        "visible": true
        /* [Datatype : ] */
        /* [true, false] */
        ,
        "crossOtherAxisAt": "value"
        /* [Datatype : ] */
        /* ["start", "end", "mid", "value"] */,
        "value": 0
        /* [Datatype : ] */
        /* [if "crossOtherAxisAt":"value"] */,
        "line": __kdv_base_properties.line()
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// intervalMarks
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.intervalMarks = function() {
    var value = {
        "visible": true
        /* [Datatype : ] */
        /* [true, false] */,
        "major": {
            "visible": true
            /* [Datatype : ] */
            /* [true, false] */,
            "position": "outer"
            /* [Datatype : ] */
            /* ["outer", "inner"] */,
            "line": __kdv_base_properties.line(),
            "length": 10
            /* pixels */
        },
        "minor": {
            "visible": true
            /* [Datatype : ] */
            /* [true, false] */,
            "position": "outer"
            /* [Datatype : ] */
            /* ["outer", "inner"] */,
            "line": __kdv_base_properties.line(),
            "length": 5
            /* pixels */
        },
        "placement": "atLabels"
        /* [Datatype : ] */
        /* ["atLabels", "atAxis", "atAxisAndLabels"] */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// axisLabels
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.axisLabels = function() {
    var value = {
        "visible": true
        /* [Datatype : ] */
        /* [true, false] */,
        "allowOverlap": false
        /* [Datatype : ] */
        /* [true, false] */,
        "placement": "axis"
        /* [Datatype : ] */
        /* ["axis", "oppositeAxis"] */,
        "position": "outer"
        /* [Datatype : ] */
        /* ["outer", "inner"] */,
        "positionWrtMarkings": "center"
        /* [Datatype : ] */
        /* [XAxis - "left", "right", "center"] */
        /* [YAxis - "above", "below", "middle"] */,
        "markingReference": "atMajor"
        /* [Datatype : ] */
        /* [atMajor, atMinor, atMajorAndMinor] */,
        "margin": [1, 1, 1, 1]
        /* [Datatype : ] */
        /* [left, right, top, bottom] */,
        "orientationAngle": 0
        /* [Datatype : ] */
        /* [degrees] */,
        "format": __kdv_base_properties.labelFormat(),
        "font": __kdv_base_properties.font()
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// axisTitle
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.axisTitle = function() {
    var value = {
        "visible": true
        /* [Datatype : ] */
        /* [true, false] */,
        "text": ""
        /* [Datatype : ] */,
        "font": __kdv_base_properties.font(),
        "alignment": "middle"
        /* [Datatype : ] */
        /* [YAxis :- "top", "bottom", "middle"] */
        /* [XAxis : "left", "center", "right"] */,
        "position": "outer"
        /* [Datatype : ] */
        /* ["outer", "inner"] */,
        "direction": "up"
        /* [Datatype : ] */
        /* [Only for YAxis : "up", "down"] */,
        "margin": [1, 1, 1, 1]
        /* [Datatype : ] */
        /* [left, right, top, bottom] */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// plotPoints
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.plotPoints = function() {
    /* [(invalid, missing key = NULL)] */
    var value = {
        "visible": true
        /* [Not applicable for BubbleChart, ScatterPlot] */
        /* [Datatype : boolean] */
        /* [true, false, 1, 0] */
        /* [(invalid = false), (missing = true )] */,
        "colorIndicator": "columns"
        /* [Not applicable for BubbleChart] */
        /* [Datatype : ] */
        /* [rows, columns] */
        /* [(invalid = "columns"), (missing = "columns" )] */,
        "marker": {
            /* [(invalid = Default Map), (missing = Default Map )] */
            "type": ["circle"]
            /* [Datatype : ] */
            /* [Line, Area, ScatterPlot, Bubble : ["square", "circle", "bubble"] ] */
            /* [(invalid = "circle"), (missing = "circle" )] */,
            "fillType": "color"
            /* ["color", "none"] */
            /* [Datatype : ] */
            /* [(invalid = "color"), (missing = "color" )] */
        },
        "color": ["0x2a99ceff"]
        /* [Datatype : ] */
        /* [RGBA format : 32 bit : hex value as string] */
        /* [(invalid = [ "0x000000ff" ]), (missing = [ "0x000000ff" ] )] */,
        "transparency": [0]
        /* [Datatype : [number : range : 0 - 100]] */
        /* [ % value ] */
        /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */
        ,
        "size": [8]
        /* [indicates pointcircle diameter] */
        /* [BubbleChart : size indicates the max size] */
        /* [(invalid values, missing key = [5]) , ( X<0 = 0) ] */
        /* [Datatype : ] */
    };
    return value;
    /*
     * LineChart and AreaChart plotpoints Combinations : 1)"colorIndicator" :
     * "columns" : single/multi series { "colorIndicator" : "columns", "marker" : {
     * "type" : ["circle"], "fillType" : "color" }, "color" : ["0x2a99ceff"],
     * "transparency" : [0], "size" : [8] }
     * 
     * 2)"colorIndicator" : "columns" : multi series { "colorIndicator" :
     * "columns", "marker" : { "type" : ["circle"], "fillType" : "color" },
     * "color" : ["0x2a99ceff", "0xff0000ff"], "transparency" : [0], "size" :
     * [8] }
     * 
     * 3)"colorIndicator" : "columns" : multi series { "colorIndicator" :
     * "columns", "marker" : { "type" : ["circle", "square"], "fillType" :
     * "color" }, "color" : ["0x2a99ceff", "0xff0000ff"], "transparency" : [0,
     * 10], "size" : [8, 10] }
     * 
     * 4)"colorIndicator" : "rows" : single/multi series { "colorIndicator" :
     * "rows", "marker" : { "type" : ["circle"], "fillType" : "color" }, "color" :
     * ["0x2a99ceff"], "transparency" : [0], "size" : [8] }
     * 
     * 4)"colorIndicator" : "rows" : single/multi series { "colorIndicator" :
     * "rows", "marker" : { "type" : ["circle"], "fillType" : "color" }, "color" :
     * ["0x2a99ceff", "0xff0000ff", "0x00ff00ff", "0x0000ffff"], "transparency" :
     * [0], "size" : [8] }
     * 
     * 5)"colorIndicator" : "rows" : single/multi series { "colorIndicator" :
     * "rows", "marker" : { "type" : ["circle", "square", "circle", "square"],
     * "fillType" : "color" }, "color" : ["0x2a99ceff", "0xff0000ff",
     * "0x00ff00ff", "0x0000ffff"], "transparency" : [0, 10, 20, 30], "size" :
     * [8, 10, 12, 14] }
     * 
     */
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// pieSlice
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.pieSlice = function() {
    /* [invalid, missing = Default map] */
    var value = {
        "fillType": ["color"]
        /* ["color", "gradient"] */
        /* [ invalid, missing = ["color"] ] */,
        "transparency": [0]
        /* [Datatype : [number : range : 0 - 100]] */
        /* [ % value ] */
        /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */,
        "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
        /* [(invalid, missing = Default Color Array)] */
        /* [RGBA format : 32 bit : hex value as string] */
        /*
         * Notes : if fillType = [gradient] color : [["0x169EECFF",
         * "0xBE0056ff"], ["0x169EECFF", "0xBE0056ff"], ["0x169EECFF",
         * "0xBE0056ff"]];
         */
        ,
        "explodedIndex": [0, 1, 2]
        /* [pie slice index] */
        /* [ (invalid, missing = NULL), (only positive values) ] */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// bar
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.bar = function() {
    var value = {
        "width": [400]
        /*
         * [Max allowed bar width in pixels not exceeding 90% of Axis Interval,
         * optional : can be null]
         */
        /* [(invalid, missing = NULL), (only positive values)] */,
        "fillType": ["color"]
        /* ["color", "gradient"] */
        /* [(invalid, missing = [ "color" ])] */
        ,
        "transparency": [0]
        /* [Datatype : [number : range : 0 - 100]] */
        /* [ % value ] */
        /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */,
        "gradientType": ["linearTopToBottom"]
        /* ["linearTopToBottom", "linearLeftToRight"] */,
        "gradientRatios": [
            [0, 20, 50, 100]
        ]
        /* [% value] */,
        "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF", "0xff0000ff", "0x00ff00ff", "0x0000ffff"]
        /* [RGBA format : 32 bit : hex value as string] */
        /*
         * Notes : if fillType = [color] SingleSeries : color : ["0x169EECFF",
         * "0xBE0056ff", "0xFCC40EFF", "0xff0000ff", "0x00ff00ff", "0x0000ffff"];
         * MultiSeries : color : [["0x169EECFF"], ["0xBE0056ff"], ["0xFCC40EFF"],
         * ["0xff0000ff"], ["0x00ff00ff"], ["0x0000ffff"]]
         * 
         * if fillType = [gradient] SingleSeries : color : [["0x169EECFF",
         * "0xBE0056ff"], ["0x169EECFF", "0xBE0056ff"], ["0x169EECFF",
         * "0xBE0056ff"]]; MutliSeries : color : [[["0x169EECFF", "0xBE0056ff"]],
         * [["0x169EECFF", "0xBE0056ff"]], [["0x169EECFF", "0xBE0056ff"]],
         * [["0x169EECFF", "0xBE0056ff"]] ];
         */
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// CandleStick
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.candleStick = function() {
    /* [(invalid, missing = Default Map) ] */
    var value = {
        "width": [400]
        /*
         * [Max allowed bar width in pixels not exceeding 90% of Axis Interval,
         * optional : can be null]
         */
        /* [(invalid, missing = NULL), (only positive values)] */,
        "up": {
            /* [(invalid, missing = Default Map) ] */
            "fillType": ["color"]
            /* [(invalid, missing = [ "color" ])] */
            /* ["color", "none"] */
            /* [fillType : N.A for ticker] */,
            "transparency": [0]
            /* [Datatype : [number : range : 0 - 100]] */
            /* [ % value ] */
            /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */,
            "color": ["0x00FF00FF"]
            /* [RGBA format : 32 bit : hex value as string] */
            /* [(invalid, missing = "0x00FF00FF")] */
        },
        "down": {
            /* [(invalid, missing = Default Map) ] */
            "fillType": ["none"]
            /* [(invalid, missing = [ "color" ])] */
            /* ["color", "none"] */
            /* [fillType : N.A for ticker] */,
            "transparency": [0]
            /* [Datatype : [number : range : 0 - 100]] */
            /* [ % value ] */
            /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */,
            "color": ["0xFF0000FF"]
            /* [RGBA format : 32 bit : hex value as string] */
            /* [(invalid, missing = "0xFF0000FF")] */
        }
    };
    return value;
};
// /////////////////////////////////////////////////////////////////////////
// ///////////// animations
// /////////////////////////////////////////////////////////////////////////
__kdv_base_properties.animations = function() {
    /* [(missing, invalid = NULL)] */
    var value = {
        "onInitAnimation": true
        /* [true, false] */
    };
    return value;
};
// ///////////////////////////////////////////////////////////////////////////////////
// // chartProperties
// ///////////////////////////////////////////////////////////////////////////////////
__kdv_base_properties.kdv_base_chartProperties = function() {
    var value = {
        "chartHeight": 40
        /* [(invalid = 100), (missing key = 100 )] */,
        "sharedLayerMode": false
        /* [(invalid, missing key = false)] */,
        "layers": ["layer1"],
        "layer1": {
            "position": [0, 0, 100, 100],
            "enableScrolling": false
            /* [true, false] */
            /* [(invalid, missing key = false)] */,
            "layerArea": {
                /* [(invalid, missing key = NULL - Transparent Chart surface)] */
                "border": __kdv_base_properties.border()
                /* [(invalid, missing key = NULL )] */,
                "background": __kdv_base_properties.background()
                /* [(invalid, missing key = NULL )] */
            },
            "title": {
                /* [(invalid, missing key = NULL)] */
                "visible": true
                /* [Datatype : boolean] */
                /* [true, false, 1, 0] */
                /* [(invalid = false), (missing = true )] */,
                "text": "Chart"
                /* [(invalid, missing key = "")] */,
                "font": __kdv_base_properties.font()
                /* [(invalid, missing key = default font map)] */,
                "position": "top"
                /* ["top", "bottom", "left", "right"] */
                /* [(invalid, missing key = "top")] */,
                "alignment": "center"
                /* ["left", "center", "right" : if position = "top"/"bottom"] */
                /* ["top", "middle", "bottom" : if position = "left"/"right"] */
                /* [(invalid, missing key = "center"/"middle")] */,
                "direction": "up"
                /* [Datatype : ] */
                /*
                 * ["up", "down", "horizontal" : applicable only if position =
                 * left/right]
                 */
                /* [(invalid, missing key = "up")] */,
                "containerWt": 15
                /* [% value] */,
                /* [(invalid, missing key = 15), (clamp to 0 - 100)] */
                "margin": [0, 0, 0, 0]
                /* [left, right, top, bottom] */
                /* [(invalid, missing key = 15), (clamp to 0 - 100)] */,
                "border": __kdv_base_properties.border(),
                "background": __kdv_base_properties.background()
            },
            "legend": {
                "visible": false
                /* [true, false] */,
                "indicators": ["marker", "rowName", "numberValue"]
                /*
                 * SingleSeries : allowed indicators : ["marker", "rowName",
                 * "numberValue", "percentValue", "columnName", "textLabel",
                 * "textValue"]
                 * 
                 * MultiSeries : allowed indicators : ["marker", "rowName",
                 * "columnName", "textLabel", "textValue"]
                 * 
                 */,
                "marker": {
                    "type": "roundedEdgeHorizontalColorBox"
                    /*
                     * ["colorBox", "colorCircle",
                     * "roundedEdgeHorizontalColorBox","cellFill"]
                     */,
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
                },
                "rowName": {
                    /*
                     * optional if color: not given the color mentioned in font
                     * will be taken
                     */"color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
                    /*
                     * color: number : should be equal to 1 or the number of
                     * entities
                     */
                    ,
                    "margin": [5, 5, 0, 0]
                    /* [left, right, top, bottom] */
                    /* [only left and right margin are applicable] */
                },
                "numberValue": {
                    /*
                     * optional if color: not given the color mentioned in font
                     * will be taken
                     */"color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
                    /*
                     * color: number : should be equal to 1 or the number of
                     * entities
                     */
                    ,
                    "margin": [5, 5, 0, 0]
                    /* [left, right, top, bottom] */
                    /* [only left and right margin are applicable] */
                },
                "percentValue": {
                    /*
                     * optional if color: not given the color mentioned in font
                     * will be taken
                     */"color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
                    /*
                     * color: number : should be equal to 1 or the number of
                     * entities
                     */
                    ,
                    "margin": [5, 5, 0, 0]
                    /* [left, right, top, bottom] */
                    /* [only left and right margin are applicable] */
                },
                "columnName": {
                    /*
                     * optional if color: not given the color mentioned in font
                     * will be taken
                     */"color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
                    /*
                     * color: number : should be equal to 1 or the number of
                     * entities
                     */
                    ,
                    "margin": [5, 5, 0, 0]
                    /* [left, right, top, bottom] */
                    /* [only left and right margin are applicable] */
                },
                "textLabel": {
                    /*
                     * [text labels to be shown next to the marker in each
                     * legend line]
                     */"text": ["Mortgages", "CreditCards", "Loans"],
                    /*
                     * optional if color: not given the color mentioned in font
                     * will be taken
                     */"color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
                    /*
                     * color: number : should be equal to 1 or the number of
                     * entities
                     */
                    ,
                    "margin": [5, 5, 0, 0]
                    /* [left, right, top, bottom] */
                    /* [only left and right margin are applicable] */
                },
                "textValue": {
                    /*
                     * [text values to be shown next to textlabels in each
                     * legend line]
                     */"text": ["$909", "$309", "$609"],
                    /*
                     * optional if color: not given the color mentioned in font
                     * will be taken
                     */"color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"]
                    /*
                     * color: number : should be equal to 1 or the number of
                     * entities
                     */
                    ,
                    "margin": [5, 5, 0, 0]
                    /* [left, right, top, bottom] */
                    /* [only left and right margin are applicable] */
                },
                "font": __kdv_base_properties.font(),
                "position": "right"
                /* ["top", "bottom", "left", "right"] */,
                "alignment": "center"
                /* ["left", "center", "right" : if position = "top"/"bottom"] */
                /* ["top", "middle", "bottom" : if position = "left"/"right"] */,
                "layout": "vertical",
                /* ["vertical", "horizantal"] */"containerWt": 40,
                "margin": [10, 10, 10, 10]
                /* [left, right, top, bottom] */,
                "padding": [10, 10, 10, 10]
                /* [left, right, top, bottom] */,
                "border": __kdv_base_properties.border(),
                "background": __kdv_base_properties.background()
            },
            "drawArea": {
                "margin": [5, 5, 5, 5]
                /* [left, right, top, bottom] */,
                "padding": [5, 5, 5, 5]
                /* [left, right, top, bottom] */,
                "border": __kdv_base_properties.border(),
                "background": __kdv_base_properties.background()
            },
            "dataSetMapping": {
                "setId": "dataset1",
                /* setId is needed only in case of multiple sets mentioned */
                /*
                 * if only one dataset is given setId : is not
                 * required/considered
                 */
                /*
                 * if multiple datasets are given and setId is not mentioned :
                 * 1st dataset will be considered
                 */
                "eventsSetId": "eventsMap1"
                /*
                 * eventsSetId is needed only in case of multiple event sets
                 * mentioned
                 */
                /*
                 * if only one eventset is given eventsSetId : is not
                 * required/considered
                 */
                /*
                 * if multiple eventsets are given and eventsSetId is not mentioned :
                 * 1st eventset will be considered
                 */
            },
            "drawEntities": ["axis", "grid", "lineChart"],
            /*
             * ["axis", "grid", "lineChart", "areaChart", "barChart",
             * "columnChart", "pieChart", "donutChart", "scatterPlotChart",
             * "bubbleChart", "candleStickChart"]
             */"axis": {
                "visible": true,
                "type": ["xAxis", "yAxis"],
                "margin": [5, 5, 5, 5],
                "xAxis": {
                    "visible": true
                    /* [true, false] */,
                    "title": __kdv_base_properties.axisTitle(),
                    "scale": {
                        "type": "fixedGapMajorInterval"
                        /* ["auto", "fixedGapMajorInterval"] */
                        /*
                         * ["fixedGapMajorInterval" is applicable only when
                         * "enableScrolling" : true ]
                         */,
                        "gap": 150
                        /* if type is "fixedGapMajorInterval" */,
                        "offset": {
                            "value": [0, 0]
                            /* start offset, end offset */,
                            "type": "pixels"
                            /* ["pixels", "percent", "numberOfIntervals"] */
                        }
                    },
                    "axisLine": __kdv_base_properties.axisLine(),
                    "labels": __kdv_base_properties.axisLabels(),
                    "intervalMarks": __kdv_base_properties.intervalMarks()
                },
                "yAxis": {
                    "visible": true
                    /* [true, false] */,
                    "title": __kdv_base_properties.axisTitle(),
                    "scale": {
                        "type": "linear"
                        /* ["linear", "log10"] */
                        ,
                        "minValue": "auto"
                        /*
                         * ["auto" or numericValue [If data max > maxvalue
                         * datamax takes precedence]]
                         */,
                        "maxValue": "auto"
                        /* ["auto" or numericValue] */,
                        "majorInterval": "auto"
                        /* ["auto" or numericValue] */,
                        "minorInterval": "auto"
                        /* ["auto" or numericValue] */,
                        "offset": {
                            "value": [0, 0]
                            /* start offset, end offset */
                            ,
                            "type": "pixels"
                            /* ["pixels", "percent", "numberOfIntervals"] */
                        }
                    },
                    "axisLine": __kdv_base_properties.axisLine(),
                    "labels": __kdv_base_properties.axisLabels(),
                    "intervalMarks": __kdv_base_properties.intervalMarks()
                },
                "secondaryXAxis": {
                    "visible": true
                    /* [true, false] */
                    ,
                    "title": __kdv_base_properties.axisTitle(),
                    "scale": {
                        "type": "fixedGapMajorInterval"
                        /* ["auto", "fixedGapMajorInterval"] */
                        /*
                         * ["fixedGapMajorInterval" is applicable only when
                         * "enableScrolling" : true ]
                         */,
                        "gap": 150
                        /* if type is "fixedGapMajorInterval" */,
                        "offset": {
                            "value": [0, 0]
                            /* start offset, end offset */,
                            "type": "pixels"
                            /* ["pixels", "percent", "numberOfIntervals"] */
                        }
                    },
                    "axisLine": __kdv_base_properties.axisLine(),
                    "labels": __kdv_base_properties.axisLabels(),
                    "intervalMarks": __kdv_base_properties.intervalMarks()
                },
                "secondaryYAxis": {
                    "visible": true
                    /* [true, false] */,
                    "title": __kdv_base_properties.axisTitle(),
                    "scale": {
                        "type": "linear"
                        /* ["linear", "log10"] */
                        ,
                        "minValue": "auto"
                        /* ["auto" or numericValue] */,
                        "maxValue": "auto"
                        /* ["auto" or numericValue] */,
                        "majorInterval": "auto"
                        /* ["auto" or numericValue] */,
                        "minorInterval": "auto"
                        /* ["auto" or numericValue] */,
                        "offset": {
                            "value": [0, 0]
                            /* start offset, end offset */
                            ,
                            "type": "pixels"
                            /* ["pixels", "percent", "numberOfIntervals"] */
                        }
                    },
                    "axisLine": __kdv_base_properties.axisLine(),
                    "labels": __kdv_base_properties.axisLabels(),
                    "intervalMarks": __kdv_base_properties.intervalMarks()
                }
            },
            "grid": {
                "visible": true
                /* [true, false] */,
                "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid", "secondaryXAxisMajorGrid", "secondaryYAxisMajorGrid", "secondaryXAxisMinorGrid", "secondaryYAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "yAxisMajorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "xAxisMinorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "yAxisMinorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "secondaryXAxisMajorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "secondaryYAxisMajorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "secondaryXAxisMinorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "secondaryYAxisMinorGrid": {
                    "visible": true
                    /* [true, false] */,
                    "line": __kdv_base_properties.line()
                },
                "background": {
                    "fillType": "alternateGradientColor"
                    /*
                     * ["color", "gradient", "alternateColor",
                     * "alternateGradientColor"]
                     */,
                    "alternateColorPattern": "xMajorMajor"
                    /*
                     * ["xMajorMajor", "xMajorMinor", "yMajorMajor",
                     * "yMajorMinor"]
                     */,
                    "transparency": 100
                    /* [Datatype : [number : range : 0 - 100]] */
                    /* [ % value ] */
                    /* [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 = 100) ] */,
                    "gradientType": "linearTopToBottom"
                    /*
                     * ["linearTopToBottom", "linearLeftToRight"]
                     */,
                    "gradientRatios": [0, 20, 50, 100]
                    /* [% value] */,
                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    /* [32bit string hex value] */
                }
            },
            "lineChart": {
                /* [lineChart - missing key = Default Map] */
                "columnId": [0]
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */
                /* "colorIndicator" : [single/multi series - always columns], */,
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "graphType": "normal"
                /* [(missing, invalid = "normal")] */
                /* ["normal", "stacked"] */,
                "lineType": "normal"
                /* ["normal", "smooth", "stepLine"] */,
                /* [(missing, invalid = "normal")] */
                "dataAlignToAxis": ["primaryYAxis"]
                /* ["primaryYAxis", "secondaryYAxis"] */
                /* [(missing, invalid = [ "primaryYAxis" ])] */,
                "plotMissingValues": "assumeZero"
                /* ["assumeZero", "continueLine"] */
                /* [(missing, invalid = "continueLine")] */,
                "line": __kdv_base_properties.line()
                /* [(missing, invalid = Default line Map)] */
                /*
                 * LineChart Line Combinations : 1) single/multi series {
                 * "visible" : true,
                 * 
                 * 
                 * "color" : ["aaaaaaff"], "width" : [1], "transparency" : [0] }
                 * 
                 * 2) multi series { "visible" : true, "color" : ["aaaaaaff",
                 * "000000ff"], "width" : [1], "transparency" : [0]}
                 * 
                 * 3) multi series { "visible" : true, "color" : ["aaaaaaff",
                 * "000000ff"], "width" : [1, 2], "transparency" : [0, 20] }
                 */,
                "plotPoints": __kdv_base_properties.plotPoints()
                /* [(missing, invalid = NULL)] */,
                "dataLabels": __kdv_base_properties.dataLabels()
                /* [(missing, invalid = NULL)] */
            },
            "areaChart": {
                "columnId": [0]
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                /* "colorIndicator" : [single/multi series - always columns], */
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "graphType": "normal"
                /* [(missing, invalid = "normal")] */
                /* ["normal", "stacked", "range"] */,
                "lineType": "normal" /* ["normal", "smooth"] */
                ,
                "dataAlignToAxis": ["primaryYAxis"]
                /*
                 * ["primaryYAxis", "secondaryYAxis"]
                 */,
                "plotMissingValues": "assumeZero"
                /*
                 * ["assumeZero", "continueLine"]
                 */,
                "area": {
                    /* [(missing, invalid = Default map)] */
                    "fillType": ["color"]
                    /* ["color", "gradient"] */
                    /* [(missing, invalid = ["color"])] */,
                    "transparency": [0]
                    /* [Datatype : [number : range : 0 - 100]] */
                    /* [ % value ] */
                    /*
                     * [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 =
                     * 100) ]
                     */
                    ,
                    "color": ["0x00ff00ff"]
                    /* [32bit hex string value] */,
                    /* [(invalid values, missing key = ["0xFFFFFFFF"]) ] */
                    "colorAboveXAxis": ["0x00ff00ff"]
                    /* [not applicable for range and stacked ] */,
                    "colorBelowXAxis": ["0xff0000ff"]
                    /* [not applicable for range and stacked ] */
                    /*
                     * Notes : applicable to color, colorAboveXAxis, colorBelowXAxis
                     * SingleSeries : color : ["0x00ff00ff"]; MultiSeries : color :
                     * ["0x00ff00ff", "0x00ff00ff"];
                     * 
                     * if fillType = [gradient] SingleSeries : color :
                     * [["0x00ff00ff", "0x00ff00ff"]]; MultiSeries : color :
                     * [["0x00ff00ff", "0x00ff00ff"], ["0x00ff00ff", "0x00ff00ff"]]
                     * 
                     */
                },
                "line": {
                    /* [invalid, missing = NULL] */
                    "visible": true
                    /* [Datatype : boolean] */
                    /* [true, false, 1, 0] */
                    /* [(invalid = false), (missing = true )] */,
                    "color": ["0x000000FF"]
                    /* [Datatype : ["RGBA"]] */
                    /* [RGBA format : 32 bit : hex value as string] */
                    /* [(invalid values = "0x000000FF") ] */,
                    "width": [1]
                    /* [Datatype : [number]] */
                    /* [(invalid values = 0), (missing key = 1) ] */,
                    "transparency": [0]
                    /* [Datatype : [number : range : 0 - 100]] */
                    /* [ % value ] */
                    /*
                     * [(invalid values, missing key = 0) , ( X<0 = 0), (X>100 =
                     * 100) ]
                     */
                },
                "plotPoints": __kdv_base_properties.plotPoints()
                /* [(missing, invalid = NULL)] */,
                "dataLabels": __kdv_base_properties.dataLabels()
                /* [(missing, invalid = NULL)] */
            },
            "pieChart": {
                "columnId": [0]
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                /* "colorIndicator" : [single series - rows], */
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "spinWheel": false
                /* [Datatype : boolean] */
                /* [true, false, 1, 0] */
                /* [(invalid = false), (missing = true )] */,
                "plotZeroValues": false
                /* [Datatype : boolean] */
                /* [true, false, 1, 0] */
                /* [(invalid, missing = false)] */,
                "plotMissingValues": "assumeZero"
                /* [Datatype : string] */
                /* ["assumeZero", "skipValue"] */
                /* [(invalid, missing = "skipValue")] */,
                "direction": "clockWise"
                /* ["clockWise", "antiClockWise"] */
                /* [(invalid, missing = "antiClockWise")] */,
                "startAngle": 90
                /* [degrees] */
                /* [(invalid, missing = 0)] */,
                "exploded": false
                /* [Datatype : boolean] */
                /* [true, false, 1, 0] */
                /* [(invalid, missing = false)] */,
                "pieSlice": __kdv_base_properties.pieSlice(),
                "border": __kdv_base_properties.border(),
                "dataLabels": __kdv_base_properties.dataLabels()
            },
            "donutChart": {
                "columnId": [0]
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                /* "colorIndicator" :[single/multi series : rows], */
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "spinWheel": false,
                "plotZeroValues": false,
                "plotMissingValues": "assumeZero",
                "direction": "clockWise"
                /* ["clockWise", "antiClockWise"] */,
                "startAngle": 90
                /* [degrees] */,
                "holeRadius": "auto"
                /* ["auto" or % value - 20, 30] */
                /* [(missing, invalid = "auto"), ()] */,
                "exploded": false /* [true, false] */
                ,
                "pieSlice": __kdv_base_properties.pieSlice(),
                "border": __kdv_base_properties.border(),
                "dataLabels": __kdv_base_properties.dataLabels()
            },
            "barChart": {
                "columnId": [0]
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                /*
                 * "colorIndicator": [single series - rows, multi series -
                 * columns],
                 */
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "graphType": "normal"
                /* [(missing, invalid = "normal")] */
                /* ["normal", "stacked", "percentStacked"]*/,
                "dataAlignToAxis": ["primaryXAxis"]
                /*
                 * ["primaryXAxis", "secondaryXAxis"]
                 */,
                "plotMissingValues": "assumeZero"
                /* ["leaveGap", "assumeZero"] */,
                "bar": __kdv_base_properties.bar(),
                "border": __kdv_base_properties.border(),
                "dataLabels": __kdv_base_properties.dataLabels()
            },
            "columnChart": {
                "columnId": [0]
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                /*
                 * "colorIndicator": [single series - rows, multi series -
                 * columns],
                 */"animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "graphType": "normal"
                /* [(missing, invalid = "normal")] */
                /* ["normal", "stacked"] */,
                "dataAlignToAxis": ["primaryYAxis"]
                /*
                 * ["primaryYAxis", "secondaryYAxis"]
                 */,
                "plotMissingValues": "assumeZero"
                /* ["leaveGap", "assumeZero"] */,
                "bar": __kdv_base_properties.bar(),
                "border": __kdv_base_properties.border(),
                "dataLabels": __kdv_base_properties.dataLabels()
            },
            "scatterPlotChart": {
                "columnId": [0]
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                /* "colorIndicator" : [single/multi series - always columns], */
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "dataAlignToAxis": ["primaryYAxis"]
                /*
                 * ["primaryYAxis", "secondaryYAxis"]
                 */,
                "plotMissingValues": "assumeZero"
                /*
                 * ["leaveGap", "assumeZero"]
                 */,
                "plotPoints": __kdv_base_properties.plotPoints(),
                "dataLabels": __kdv_base_properties.dataLabels()
            },
            "bubbleChart": {
                "columnId": [0, 1]
                /* [needs 2 columnIds] */
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "dataAlignToAxis": ["primaryYAxis"]
                /*
                 * ["primaryYAxis", "secondaryYAxis"]
                 */,
                "plotMissingValues": "assumeZero"
                /*
                 * ["leaveGap", "assumeZero"]
                 */,
                "plotPoints": __kdv_base_properties.plotPoints(),
                "dataLabels": __kdv_base_properties.dataLabels()
            },
            "candleStickChart": {
                "columnId": [0, 1, 2, 3]
                /* [needs 4 columnIds : in order : OHLC] */
                /* [(missing, invalid, (sizeof(Array)=0) = all column ids in dataset)] */,
                "graphType": "candle"
                /* [(missing, invalid = "normal")] */
                /* [candle, ticker] */
                ,
                "animations": __kdv_base_properties.animations()
                /* [(missing, invalid = NULL)] */,
                "dataAlignToAxis": ["primaryYAxis"]
                /*
                 * ["primaryYAxis", "secondaryYAxis"]
                 */,
                "candleStick": __kdv_base_properties.candleStick(),
                "dataLabels": __kdv_base_properties.dataLabels()
            }
        }
    };
    return value;
};
// ///////////////////////////////////////////////////////////////////////////////////
// ////////////
// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////
// // chartData
// ///////////////////////////////////////////////////////////////////////////////////
/* Single Series Data */
/*
 * rowNames : [ 4/22, 4/23, 4/25, 4/25 ] columnNames: [ "Availabe to Spend" ]
 * 
 * "Availabe to Spend" 4/22 300 2/23 400 4/24 500 4/25 600
 * 
 */
var kdv_base_chartData = {
    "dataSets": ["dataset1"],
    "dataset1": {
        "rowNames": {
            "values": ["4/22", "4/23", "4/24", "4/25"]
        },
        "columnNames": {
            "values": ["Availabe to Spend"]
        },
        "data": {
            "Availabe to Spend": [300, 400, 500, 600]
        }
    }
};
/* Multi Series Data */
/*
 * rowNames : [ 4/22, 4/23, 4/25, 4/25 ] columnNames: [ "Availabe to Spend",
 * "What you owe" ]
 * 
 * "Availabe to Spend" "What you owe" 4/22 300 1200 2/23 400 1500 4/24 500 1100
 * 4/25 600 1300
 * 
 */
var kdv_base_chartData = {
    "dataSets": ["dataset1"],
    "dataset1": {
        "rowNames": {
            "values": ["4/22", "4/23", "4/24", "4/25"]
        },
        "columnNames": {
            "values": ["Availabe to Spend", "What you owe"]
        },
        "data": {
            "Availabe to Spend": [300, 400, 500, 600],
            "What you owe": [1200, 1500, 1100, 1300]
        }
    }
};
// ///////////////////////////////////////////////////////////////////////////////////
// //
// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////
// // chartEvents
// ///////////////////////////////////////////////////////////////////////////////////
__kdv_base_properties.kdv_base_chartEvents = function() {
    function onTap(args) {
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

    function onDoubleTap(args) {
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

    function onLongPress(args) {
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

    function onPinch(args) {
        // var widgetId = args["widgetId"];
        kony.print("chartevents");
        kony.print("chartevents_onPinch - begin");
        kony.print("chartevents_onPinch - end");
    };

    function onSwipe(args) {
        // var widgetId = args["widgetId"];
        kony.print("chartevents");
        kony.print("chartevents_onSwipe - begin");
        kony.print("chartevents_onSwipe - end");
    };

    function onScrollDidReachEnd(args) {
        // var widgetId = args["widgetId"];
        kony.print("chartevents");
        kony.print("chartevents_onScrollDidReachEnd - begin");
        kony.print("chartevents_onScrollDidReachEnd - end");
    };

    function onScrollDidReachBegin(args) {
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
                    "line": __kdv_base_properties.line()
                },
                "dataLabels": __kdv_base_properties.onTouchDataLabels(),
                "border": __kdv_base_properties.border(),
                "background": __kdv_base_properties.background()
            }
        }
    };
    return value;
};
// ///////////////////////////////////////////////////////////////////////////////////
// //
// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////
// /////////// FAQ
// ///////////////////////////////////////////////////////////////////////////////////
/*
 * [ // // // TODO : whether to validate properties and tell them back to user
 * or // proceed with defaults for missing values. // // TODO : merge depricated
 * SC properties with spec // // TODO : mention the units whether - pixels, %,
 * also mention range of the values // // TODO : mention default values for all
 * possible properties // // TODO : in case of excess values or mismatch of
 * value sizes give the expected behaviour // example : gradieantratios = 2,
 * colors = 3 - expected output // // TODO : how to manage missing data cells -
 * explanation // // //
 * 
 * 1) Data array size and color array sizes mismatch : a) If data array size is
 * greater than color array size - undefined behaviour b) If data array size is
 * less than color array size - graph will be drawn properly.
 * 
 * 2) Chart data currenlty supports only string rowNames and columnNames(array
 * of strings). If any value is not string it would be converted to string and
 * then used.
 * 
 * 3) If rowNames size and data size mismatch : a) If rowNames size is greater
 * than data size then chart will be plotted consiering rowNames size. b) Is
 * rowNames size is less than data size then chart will be plotted considering
 * the least in size data array.
 * 
 * 4) If any one of rowNames, columnNames or data is missing then no chart will
 * be drawn.
 *  ]
 */
// ///////////////////////////////////////////////////////////////////////////////////
// /////////// FAQ
// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////
// /////////// supported font Types in IOS
// ///////////////////////////////////////////////////////////////////////////////////
/*
 * Family:Thonburi Font:Thonburi-Bold Font:Thonburi Family:Snell Roundhand
 * Font:SnellRoundhand-Bold Font:SnellRoundhand-Black Font:SnellRoundhand
 * Family:Academy Engraved LET Font:AcademyEngravedLetPlain Family:Marker Felt
 * Font:MarkerFelt-Wide Font:MarkerFelt-Thin Family:Geeza Pro Font:GeezaPro-Bold
 * Font:GeezaPro Family:Arial Rounded MT Bold Font:ArialRoundedMTBold
 * Family:Trebuchet MS Font:TrebuchetMS Font:TrebuchetMS-Bold
 * Font:TrebuchetMS-Italic Font:Trebuchet-BoldItalic Family:Arial
 * Font:Arial-BoldMT Font:ArialMT Font:Arial-ItalicMT Font:Arial-BoldItalicMT
 * Family:Marion Font:Marion-Regular Font:Marion-Bold Font:Marion-Italic
 * Family:Gurmukhi MN Font:GurmukhiMN Font:GurmukhiMN-Bold Family:Malayalam
 * Sangam MN Font:MalayalamSangamMN-Bold Font:MalayalamSangamMN Family:Bradley
 * Hand Font:BradleyHandITCTT-Bold Family:Kannada Sangam MN Font:KannadaSangamMN
 * Font:KannadaSangamMN-Bold Family:Bodoni 72 Oldstyle
 * Font:BodoniSvtyTwoOSITCTT-Book Font:BodoniSvtyTwoOSITCTT-Bold
 * Font:BodoniSvtyTwoOSITCTT-BookIt Family:Cochin Font:Cochin
 * Font:Cochin-BoldItalic Font:Cochin-Italic Font:Cochin-Bold Family:Sinhala
 * Sangam MN Font:SinhalaSangamMN Font:SinhalaSangamMN-Bold Family:Hiragino Kaku
 * Gothic ProN Font:HiraKakuProN-W6 Font:HiraKakuProN-W3 Family:Papyrus
 * Font:Papyrus-Condensed Font:Papyrus Family:Verdana Font:Verdana
 * Font:Verdana-Bold Font:Verdana-BoldItalic Font:Verdana-Italic Family:Zapf
 * Dingbats Font:ZapfDingbatsITC Family:Courier Font:Courier-Bold Font:Courier
 * Font:Courier-BoldOblique Font:Courier-Oblique Family:Hoefler Text
 * Font:HoeflerText-Black Font:HoeflerText-Italic Font:HoeflerText-Regular
 * Font:HoeflerText-BlackItalic Family:Euphemia UCAS Font:EuphemiaUCAS-Bold
 * Font:EuphemiaUCAS Font:EuphemiaUCAS-Italic Family:Helvetica
 * Font:Helvetica-LightOblique Font:Helvetica Font:Helvetica-Oblique
 * Font:Helvetica-BoldOblique Font:Helvetica-Bold Font:Helvetica-Light
 * Family:Hiragino Mincho ProN Font:HiraMinProN-W3 Font:HiraMinProN-W6
 * Family:Bodoni Ornaments Font:BodoniOrnamentsITCTT Family:Apple Color Emoji
 * Font:AppleColorEmoji Family:Optima Font:Optima-ExtraBlack Font:Optima-Italic
 * Font:Optima-Regular Font:Optima-BoldItalic Font:Optima-Bold Family:Gujarati
 * Sangam MN Font:GujaratiSangamMN Font:GujaratiSangamMN-Bold Family:Devanagari
 * Sangam MN Font:DevanagariSangamMN Font:DevanagariSangamMN-Bold Family:Times
 * New Roman Font:TimesNewRomanPS-ItalicMT Font:TimesNewRomanPS-BoldMT
 * Font:TimesNewRomanPSMT Font:TimesNewRomanPS-BoldItalicMT Family:Kailasa
 * Font:Kailasa Font:Kailasa-Bold Family:Telugu Sangam MN
 * Font:TeluguSangamMN-Bold Font:TeluguSangamMN Family:Heiti SC
 * Font:STHeitiSC-Medium Font:STHeitiSC-Light Family:Futura Font:Futura-Medium
 * Font:Futura-CondensedExtraBold Font:Futura-CondensedMedium
 * Font:Futura-MediumItalic Family:Bodoni 72 Font:BodoniSvtyTwoITCTT-BookIta
 * Font:BodoniSvtyTwoITCTT-Book Font:BodoniSvtyTwoITCTT-Bold Family:Baskerville
 * Font:Baskerville-SemiBoldItalic Font:Baskerville-Bold Font:Baskerville-Italic
 * Font:Baskerville-BoldItalic Font:Baskerville-SemiBold Font:Baskerville
 * Family:Chalkboard SE Font:ChalkboardSE-Regular Font:ChalkboardSE-Bold
 * Font:ChalkboardSE-Light Family:Heiti TC Font:STHeitiTC-Medium
 * Font:STHeitiTC-Light Family:Copperplate Font:Copperplate
 * Font:Copperplate-Light Font:Copperplate-Bold Family:Party LET
 * Font:PartyLetPlain Family:American Typewriter
 * Font:AmericanTypewriter-CondensedLight Font:AmericanTypewriter-Light
 * Font:AmericanTypewriter-Bold Font:AmericanTypewriter
 * Font:AmericanTypewriter-CondensedBold Font:AmericanTypewriter-Condensed
 * Family:AppleGothic Font:AppleGothic Family:Bangla Sangam MN
 * Font:BanglaSangamMN-Bold Font:BanglaSangamMN Family:Noteworthy
 * Font:Noteworthy-Light Font:Noteworthy-Bold Family:Zapfino Font:Zapfino
 * Family:Tamil Sangam MN Font:TamilSangamMN Font:TamilSangamMN-Bold Family:DB
 * LCD Temp Font:DBLCDTempBlack Family:Arial Hebrew Font:ArialHebrew
 * Font:ArialHebrew-Bold Family:Chalkduster Font:Chalkduster Family:Georgia
 * Font:Georgia-Italic Font:Georgia-BoldItalic Font:Georgia-Bold Font:Georgia
 * Family:Helvetica Neue Font:HelveticaNeue-Bold
 * Font:HelveticaNeue-CondensedBlack Font:HelveticaNeue-Medium
 * Font:HelveticaNeue Font:HelveticaNeue-Light Font:HelveticaNeue-CondensedBold
 * Font:HelveticaNeue-LightItalic Font:HelveticaNeue-UltraLightItalic
 * Font:HelveticaNeue-UltraLight Font:HelveticaNeue-BoldItalic
 * Font:HelveticaNeue-Italic Family:Gill Sans Font:GillSans-LightItalic
 * Font:GillSans-BoldItalic Font:GillSans-Italic Font:GillSans
 * Font:GillSans-Bold Font:GillSans-Light Family:Palatino Font:Palatino-Roman
 * Font:Palatino-Bold Font:Palatino-BoldItalic Font:Palatino-Italic
 * Family:Courier New Font:CourierNewPSMT Font:CourierNewPS-BoldMT
 * Font:CourierNewPS-BoldItalicMT Font:CourierNewPS-ItalicMT Family:Oriya Sangam
 * MN Font:OriyaSangamMN-Bold Font:OriyaSangamMN Family:Didot Font:Didot-Italic
 * Font:Didot Font:Didot-Bold Family:Bodoni 72 Smallcaps
 * Font:BodoniSvtyTwoSCITCTT-Book
 */
// ///////////////////////////////////////////////////////////////////////////////////
// /////////// supported font Types in IOS
// ///////////////////////////////////////////////////////////////////////////////////