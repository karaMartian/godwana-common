//Form JS File
function addWidgetsfrm800PopUp001() {};

function frm800PopUp001Globals() {
    var MenuId = [];
    frm800PopUp001 = new kony.ui.Form2({
        "id": "frm800PopUp001",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "addWidgets": addWidgetsfrm800PopUp001
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