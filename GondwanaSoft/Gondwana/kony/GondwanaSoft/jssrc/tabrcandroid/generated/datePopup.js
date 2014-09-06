//Form JS File
function addWidgetsdatePopup() {
    var label542671574598171 = new kony.ui.Label({
        "id": "label542671574598171",
        "isVisible": true,
        "text": "All data as at: 1 September 2014"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox542671574598169 = new kony.ui.Box({
        "id": "hbox542671574598169",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 3, 0, 3],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox542671574598169.add(
    label542671574598171);
    var button542671574598172 = new kony.ui.Button({
        "id": "button542671574598172",
        "isVisible": true,
        "text": "Close",
        "skin": "closebtnSkin",
        "focusSkin": "closebtnSkinHov"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [25, 0, 25, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox542671574598170 = new kony.ui.Box({
        "id": "hbox542671574598170",
        "isVisible": true,
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
    hbox542671574598170.add(
    button542671574598172);
    datePopup.add(
    hbox542671574598169, hbox542671574598170);
};

function datePopupGlobals() {
    datePopup = new kony.ui.Popup({
        "id": "datePopup",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "popUpSkin2",
        "isModal": false,
        "addWidgets": addWidgetsdatePopup
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};