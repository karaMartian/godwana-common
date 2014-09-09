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
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};