//Form JS File
function frm012Beta000Main_button10434638981142_onClick_seq0(eventobject) {
    func_116_demo_16.call(this);
};

function frm012Beta000Main_button104346389811801635_onClick_seq0(eventobject) {
    func_115_demo_cc_15_2.call(this);
};

function addWidgetsfrm012Beta000Main() {
    var button10434638981142 = new kony.ui.Button({
        "id": "button10434638981142",
        "isVisible": true,
        "text": "MO",
        "onClick": frm012Beta000Main_button10434638981142_onClick_seq0
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
        "containerWeight": 6
    }, {});
    var button104346389811801635 = new kony.ui.Button({
        "id": "button104346389811801635",
        "isVisible": true,
        "text": "CC POC 2",
        "onClick": frm012Beta000Main_button104346389811801635_onClick_seq0
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
        "containerWeight": 6
    }, {});
    frm012Beta000Main.add(
    button10434638981142, button104346389811801635);
};

function frm012Beta000MainGlobals() {
    var MenuId = [];
    frm012Beta000Main = new kony.ui.Form2({
        "id": "frm012Beta000Main",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "addWidgets": addWidgetsfrm012Beta000Main
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
            "formAnimation": 2
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};