//Form JS File
function frm112DemoFinanceChartForm_frm112DemoFinanceChartForm_init_seq0(eventobject, neworientation) {
    func_112_demo_init_frm_012_finance.call(this);
};

function frm112DemoFinanceChartForm_button19329606361807_onClick_seq0(eventobject) {
    func_112_demo_frm013FinanceChartForm_onClick_CandleStick.call(this);
};

function frm112DemoFinanceChartForm_button19329606361808_onClick_seq0(eventobject) {
    func_112_demo_frm013FinanceChartForm_onClick_LineChart.call(this);
};

function frm112DemoFinanceChartForm_button19329606361809_onClick_seq0(eventobject) {
    func_112_demo_frm013FinanceChartForm_onClick_Comparision.call(this);
};

function frm112DemoFinanceChartForm_button19329606361810_onClick_seq0(eventobject) {
    func_112_demo_frm013FinanceChartForm_onClick_WeekData.call(this);
};

function frm112DemoFinanceChartForm_button19329606361811_onClick_seq0(eventobject) {
    func_112_demo_frm013FinanceChartForm_onClick_MonthData.call(this);
};

function frm112DemoFinanceChartForm_button19329606361812_onClick_seq0(eventobject) {
    func_112_demo_frm013FinanceChartForm_onClick_YearData.call(this);
};

function addWidgetsfrm112DemoFinanceChartForm() {
    var button19329606361807 = new kony.ui.Button({
        "id": "button19329606361807",
        "isVisible": true,
        "text": "CandleStick",
        "onClick": frm112DemoFinanceChartForm_button19329606361807_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var button19329606361808 = new kony.ui.Button({
        "id": "button19329606361808",
        "isVisible": true,
        "text": "LineChart",
        "onClick": frm112DemoFinanceChartForm_button19329606361808_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var button19329606361809 = new kony.ui.Button({
        "id": "button19329606361809",
        "isVisible": true,
        "text": "Comparision",
        "onClick": frm112DemoFinanceChartForm_button19329606361809_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {});
    var hbox19329606361806 = new kony.ui.Box({
        "id": "hbox19329606361806",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19329606361806.add(
    button19329606361807, button19329606361808, button19329606361809);
    var hboxStockChart = new kony.ui.Box({
        "id": "hboxStockChart",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 49,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxStockChart.add();
    var button19329606361810 = new kony.ui.Button({
        "id": "button19329606361810",
        "isVisible": true,
        "text": "Week",
        "onClick": frm112DemoFinanceChartForm_button19329606361810_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var button19329606361811 = new kony.ui.Button({
        "id": "button19329606361811",
        "isVisible": true,
        "text": "Month",
        "onClick": frm112DemoFinanceChartForm_button19329606361811_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var button19329606361812 = new kony.ui.Button({
        "id": "button19329606361812",
        "isVisible": true,
        "text": "Year",
        "onClick": frm112DemoFinanceChartForm_button19329606361812_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var hbox19329606361798 = new kony.ui.Box({
        "id": "hbox19329606361798",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19329606361798.add(
    button19329606361810, button19329606361811, button19329606361812);
    frm112DemoFinanceChartForm.add(
    hbox19329606361806, hboxStockChart, hbox19329606361798);
};

function frm112DemoFinanceChartFormGlobals() {
    var MenuId = [];
    frm112DemoFinanceChartForm = new kony.ui.Form2({
        "id": "frm112DemoFinanceChartForm",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "init": frm112DemoFinanceChartForm_frm112DemoFinanceChartForm_init_seq0,
        "addWidgets": addWidgetsfrm112DemoFinanceChartForm
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};