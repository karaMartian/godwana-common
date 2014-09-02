//Form JS File
function addWidgetsfrmPlaceholder() {
    var brandsegmentbox = new kony.ui.Box({
        "id": "brandsegmentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 41
    }, {});
    var brandsegment = new kony.ui.SegmentedUI2({
        "id": "brandsegment",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblbrand": "lblbrand"
        },
        "rowTemplate": brandsegmentbox,
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {});
    var lblbrand = new kony.ui.Label({
        "id": "lblbrand",
        "isVisible": true,
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    brandsegmentbox.add(
    lblbrand);
    var periodsegmentbox = new kony.ui.Box({
        "id": "periodsegmentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 33
    }, {});
    var periodsegment = new kony.ui.SegmentedUI2({
        "id": "periodsegment",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblperiod": "lblperiod"
        },
        "rowTemplate": periodsegmentbox,
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var lblperiod = new kony.ui.Label({
        "id": "lblperiod",
        "isVisible": true,
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 18
    }, {
        "textCopyable": false
    });
    periodsegmentbox.add(
    lblperiod);
    frmPlaceholder.add(
    brandsegment, periodsegment);
};

function frmPlaceholderGlobals() {
    var MenuId = [];
    frmPlaceholder = new kony.ui.Form2({
        "id": "frmPlaceholder",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "whtBack",
        "addWidgets": addWidgetsfrmPlaceholder
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