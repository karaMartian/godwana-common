//Form JS File
function addWidgetsfrm105DemoSeaGrey() {};

function frm105DemoSeaGreyGlobals() {
    var MenuId = [];
    frm105DemoSeaGrey = new kony.ui.Form2({
        "id": "frm105DemoSeaGrey",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "addWidgets": addWidgetsfrm105DemoSeaGrey
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
            "formAnimation": 3
        },
        "outTransitionConfig": {
            "formAnimation": 5
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};