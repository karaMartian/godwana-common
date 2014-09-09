//Form JS File
function frmDashboard_frmDashboard_preshow_seq0(eventobject, neworientation) {
    getBrandsByDateService.call(this);
};

function frmDashboard_hboxMap_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmDashboard_hboxGrade_onClick_seq0(eventobject) {
    frmGrading.show();
};

function frmDashboard_hboxTop_onClick_seq0(eventobject) {
    var getMyTop25Customers_inputparam = {};
    getMyTop25Customers_inputparam["serviceID"] = "getMyTop25Customers";
    getMyTop25Customers_inputparam["repId"] = "0008";
    getMyTop25Customers_inputparam["date"] = "2013";
    getMyTop25Customers_inputparam["httpheaders"] = {};
    getMyTop25Customers_inputparam["httpconfig"] = {};
    getMyTop25Customers = appmiddlewareinvoker(getMyTop25Customers_inputparam, false);
    if (getMyTop25Customers["return"].length > 0) {
        if (getMyTop25Customers != null && getMyTop25Customers != undefined && getMyTop25Customers["return"] != null && getMyTop25Customers["return"] != undefined) {
            var frmTop25Customers_segInfo_temp = [];
            for (var i1 = 0; i1 < getMyTop25Customers["return"].length; i1++) {
                frmTop25Customers_segInfo_temp.push({
                    "lblBrick": getMyTop25Customers["return"][i1]["brick"],
                    "lblValue": getMyTop25Customers["return"][i1]["values"],
                    "lblCustomerName": getMyTop25Customers["return"][i1]["name"]
                })
            }
            frmTop25Customers.segInfo.setData(frmTop25Customers_segInfo_temp);
        }
        if (getMyTop25Customers != null && getMyTop25Customers != undefined && getMyTop25Customers["return"] != null && getMyTop25Customers["return"] != undefined) {
            var frmTop25Customers_segInfo_temp = [];
            for (var i1 = 0; i1 < getMyTop25Customers["return"].length; i1++) {
                frmTop25Customers_segInfo_temp.push({
                    "lblBrick": getMyTop25Customers["return"][i1]["brick"],
                    "lblValue": getMyTop25Customers["return"][i1]["values"],
                    "lblCustomerName": getMyTop25Customers["return"][i1]["name"]
                })
            }
            frmTop25Customers.segInfo.setData(frmTop25Customers_segInfo_temp);
        }
        frmTop25Customers.show();
    } else {
        var alert_seq2_act0 = kony.ui.Alert({
            "message": "Service Failed!",
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "",
            "yesLabel": "Ok",
            "noLabel": "",
            "alertIcon": "",
            "alertHandler": null
        }, {});
    }
};

function frmDashboard_hboxTrend_onClick_seq0(eventobject) {
    frmTrends.show();
};

function frmDashboard_hboxVis_onClick_seq0(eventobject) {
    frmVis.show();
};

function frmDashboard_hboxGrowth_onClick_seq0(eventobject) {
    frmGrowth.show();
};

function addWidgetsfrmDashboard() {
    var hboxMap = new kony.ui.Box({
        "id": "hboxMap",
        "isVisible": true,
        "skin": "tabtn1",
        "focusSkin": "tabtn1hov",
        "onClick": frmDashboard_hboxMap_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 61,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxMap.add();
    var hboxGrade = new kony.ui.Box({
        "id": "hboxGrade",
        "isVisible": true,
        "skin": "tabbtn3",
        "focusSkin": "tabbtn3hov",
        "onClick": frmDashboard_hboxGrade_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxGrade.add();
    var vboxbtn1 = new kony.ui.Box({
        "id": "vboxbtn1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxbtn1.add(
    hboxGrade);
    var hboxTop = new kony.ui.Box({
        "id": "hboxTop",
        "isVisible": true,
        "skin": "tabbtn4",
        "focusSkin": "tabbtn4hov",
        "onClick": frmDashboard_hboxTop_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxTop.add();
    var vboxbtn2 = new kony.ui.Box({
        "id": "vboxbtn2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxbtn2.add(
    hboxTop);
    var hboxTwoHold = new kony.ui.Box({
        "id": "hboxTwoHold",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 39,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxTwoHold.add(
    vboxbtn1, vboxbtn2);
    var vboxFirst = new kony.ui.Box({
        "id": "vboxFirst",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 41,
        "margin": [0, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxFirst.add(
    hboxMap, hboxTwoHold);
    var hboxTrend = new kony.ui.Box({
        "id": "hboxTrend",
        "isVisible": true,
        "skin": "tabbtn2",
        "focusSkin": "tabbtn2hov",
        "onClick": frmDashboard_hboxTrend_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 37,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxTrend.add();
    var hboxVis = new kony.ui.Box({
        "id": "hboxVis",
        "isVisible": true,
        "skin": "tabbtn5",
        "focusSkin": "tabbtn5hov",
        "onClick": frmDashboard_hboxVis_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxVis.add();
    var vboxbtn3 = new kony.ui.Box({
        "id": "vboxbtn3",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxbtn3.add(
    hboxVis);
    var hboxGrowth = new kony.ui.Box({
        "id": "hboxGrowth",
        "isVisible": true,
        "skin": "tabbtn6",
        "focusSkin": "tabbtn6hov",
        "onClick": frmDashboard_hboxGrowth_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxGrowth.add();
    var vboxbtn4 = new kony.ui.Box({
        "id": "vboxbtn4",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxbtn4.add(
    hboxGrowth);
    var hboxSecTwoHold = new kony.ui.Box({
        "id": "hboxSecTwoHold",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 62,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxSecTwoHold.add(
    vboxbtn3, vboxbtn4);
    var vboxSecond = new kony.ui.Box({
        "id": "vboxSecond",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 57,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxSecond.add(
    hboxTrend, hboxSecTwoHold);
    var hboxMainHold = new kony.ui.Box({
        "id": "hboxMainHold",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [5, 5, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxMainHold.add(
    vboxFirst, vboxSecond);
    frmDashboard.add(
    hboxMainHold);
};

function frmDashboardGlobals() {
    var MenuId = [];
    frmDashboard = new kony.ui.Form2({
        "id": "frmDashboard",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxLogo, hboxHInfo],
        "enabledForIdleTimeout": false,
        "skin": "frmBlkBack",
        "preShow": frmDashboard_frmDashboard_preshow_seq0,
        "addWidgets": addWidgetsfrmDashboard
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
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