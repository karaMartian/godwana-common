//Form JS File
function frm000DataVizViewForm_frm000DataVizViewForm_onhide_seq0(eventobject, neworientation) {
    func_onhide_frm_000_dataviz_view_form.call(this);
};

function addWidgetsfrm000DataVizViewForm() {};

function frm000DataVizViewFormGlobals() {
    var MenuId = [];
    frm000DataVizViewForm = new kony.ui.Form2({
        "id": "frm000DataVizViewForm",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "onHide": frm000DataVizViewForm_frm000DataVizViewForm_onhide_seq0,
        "addWidgets": addWidgetsfrm000DataVizViewForm
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