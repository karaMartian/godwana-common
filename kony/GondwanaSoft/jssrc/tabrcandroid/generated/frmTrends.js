//Form JS File
function frmTrends_frmTrends_init_seq0(eventobject, neworientation) {
    func_init_frm_001_line_chart_001.call(this);
};

function frmTrends_btnfilter_onClick_seq0(eventobject) {
    popupfilter.show();
};

function addWidgetsfrmTrends() {
    var imgheader = new kony.ui.Image2({
        "id": "imgheader",
        "isVisible": true,
        "src": "salestrends.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 88
    }, {});
    var btnfilter = new kony.ui.Button({
        "id": "btnfilter",
        "isVisible": true,
        "text": null,
        "skin": "btnSk",
        "onClick": frmTrends_btnfilter_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var hboxTitle = new kony.ui.Box({
        "id": "hboxTitle",
        "isVisible": true,
        "skin": "hboxBlueSkin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxTitle.add(
    imgheader, btnfilter);
    var hboxInfo = new kony.ui.Box({
        "id": "hboxInfo",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 3],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxInfo.add();
    frmTrends.add(
    hboxTitle, hboxInfo);
};

function frmTrendsGlobals() {
    var MenuId = [];
    frmTrends = new kony.ui.Form2({
        "id": "frmTrends",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxLogo, hboxHInfo],
        "enabledForIdleTimeout": false,
        "skin": "whtBack",
        "init": frmTrends_frmTrends_init_seq0,
        "addWidgets": addWidgetsfrmTrends
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