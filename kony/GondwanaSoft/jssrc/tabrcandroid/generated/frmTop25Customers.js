//Form JS File
function frmTop25Customers_btnFilter_onClick_seq0(eventobject) {};

function frmTop25Customers_Button057dfd3a8f56740_onClick_seq0(eventobject) {
    frmDashboard.show();
};

function addWidgetsfrmTop25Customers() {
    var lblheader = new kony.ui.Label({
        "id": "lblheader",
        "isVisible": true,
        "text": "TOP 25 CUSTOMERS",
        "skin": "sknLabelHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {
        "textCopyable": false
    });
    var btnFilter = new kony.ui.Button({
        "id": "btnFilter",
        "isVisible": true,
        "text": null,
        "skin": "filterButtonSkin",
        "onClick": frmTop25Customers_btnFilter_onClick_seq0
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
        "containerWeight": 13
    }, {});
    var HBox07a8cfdebb0ef4d = new kony.ui.Box({
        "id": "HBox07a8cfdebb0ef4d",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    HBox07a8cfdebb0ef4d.add(
    lblheader, btnFilter);
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "text": "Customer Name",
        "skin": "labelSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "textCopyable": false
    });
    var lblBrik = new kony.ui.Label({
        "id": "lblBrik",
        "isVisible": true,
        "text": "Brick",
        "skin": "labelSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {
        "textCopyable": false
    });
    var lblVal = new kony.ui.Label({
        "id": "lblVal",
        "isVisible": true,
        "text": "Value",
        "skin": "labelSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var HBox0ffded176d24644 = new kony.ui.Box({
        "id": "HBox0ffded176d24644",
        "isVisible": true,
        "skin": "hBoxSkin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 3, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    HBox0ffded176d24644.add(
    lblName, lblBrik, lblVal);
    var segInfobox = new kony.ui.Box({
        "id": "segInfobox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 32
    }, {});
    var segInfo = new kony.ui.SegmentedUI2({
        "id": "segInfo",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblBrick": "lblBrick",
            "repId": "repId",
            "lblValue": "lblValue",
            "lblCustomerName": "lblCustomerName",
            "date": "date",
            "HBox0d5937b65f0b748": "HBox0d5937b65f0b748"
        },
        "data": [{
            "lblBrick": "Label",
            "repId": "",
            "lblValue": "Label",
            "lblCustomerName": "Label",
            "date": ""
        }],
        "rowTemplate": segInfobox,
        "alternateRowSkin": "segSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [2, 0, 2, 3],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {});
    var lblCustomerName = new kony.ui.Label({
        "id": "lblCustomerName",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "textCopyable": false
    });
    var lblBrick = new kony.ui.Label({
        "id": "lblBrick",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {
        "textCopyable": false
    });
    var lblValue = new kony.ui.Label({
        "id": "lblValue",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var HBox0d5937b65f0b748 = new kony.ui.Box({
        "id": "HBox0d5937b65f0b748",
        "isVisible": true,
        "skin": "slHbox",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 36,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    HBox0d5937b65f0b748.add(
    lblCustomerName, lblBrick, lblValue);
    segInfobox.add(
    HBox0d5937b65f0b748);
    var Button057dfd3a8f56740 = new kony.ui.Button({
        "id": "Button057dfd3a8f56740",
        "isVisible": true,
        "text": "Back",
        "skin": "btnSkin",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmTop25Customers_Button057dfd3a8f56740_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 6, 30, 6],
        "padding": [4, 4, 4, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var HBox069518855650f48 = new kony.ui.Box({
        "id": "HBox069518855650f48",
        "isVisible": true,
        "skin": "slHbox",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    HBox069518855650f48.add(
    Button057dfd3a8f56740);
    frmTop25Customers.add(
    HBox07a8cfdebb0ef4d, HBox0ffded176d24644, segInfo, HBox069518855650f48);
};

function frmTop25CustomersGlobals() {
    var MenuId = [];
    frmTop25Customers = new kony.ui.Form2({
        "id": "frmTop25Customers",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "addWidgets": addWidgetsfrmTop25Customers
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
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