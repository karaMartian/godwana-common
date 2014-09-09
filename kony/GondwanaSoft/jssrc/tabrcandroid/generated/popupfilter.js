//Form JS File
function popupfilter_btndone_onClick_seq0(eventobject) {
    handleFilter.call(this);
};

function addWidgetspopupfilter() {
    var label1099302230257 = new kony.ui.Label({
        "id": "label1099302230257",
        "isVisible": true,
        "text": "Filter"
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
    var hbox1099302230256 = new kony.ui.Box({
        "id": "hbox1099302230256",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1099302230256.add(
    label1099302230257);
    var comboboxyear = new kony.ui.ComboBox({
        "id": "comboboxyear",
        "isVisible": true,
        "masterData": [
            ["2012", "2012"],
            ["2013", "2013"],
            ["2014", "2014"]
        ],
        "selectedKey": "2013",
        "skin": "skncombobox"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "popupTitle": null
    });
    var hbox1099302230259 = new kony.ui.Box({
        "id": "hbox1099302230259",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1099302230259.add(
    comboboxyear);
    var comboboxquarter = new kony.ui.ComboBox({
        "id": "comboboxquarter",
        "isVisible": true,
        "masterData": [
            ["q1", "Q1"],
            ["q2", "Q2"],
            ["q3", "Q3"],
            ["q4", "Q4"],
            ["select", "Select Quater"]
        ],
        "selectedKey": "select"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "popupTitle": null
    });
    var hbox1099302230260 = new kony.ui.Box({
        "id": "hbox1099302230260",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1099302230260.add(
    comboboxquarter);
    var comboboxmonth = new kony.ui.ComboBox({
        "id": "comboboxmonth",
        "isVisible": true,
        "masterData": [
            ["jan", "Jan 2013"],
            ["feb", "Feb 2013"],
            ["mar", "Mar 2013"],
            ["apr", "Apr 2013"],
            ["may", "May 2013"],
            ["jun", "Jun 2013"],
            ["jul", "Jul 2013"],
            ["aug", "Aug 2013"],
            ["sep", "Sep 2013"],
            ["oct", "Oct 2013"],
            ["nov", "Nov 2013"],
            ["dec", "Dec 2013"],
            ["select", "Select Month"]
        ],
        "selectedKey": "select"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "popupTitle": null
    });
    var hbox1099302230261 = new kony.ui.Box({
        "id": "hbox1099302230261",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1099302230261.add(
    comboboxmonth);
    var comboboxbrand = new kony.ui.ComboBox({
        "id": "comboboxbrand",
        "isVisible": true,
        "masterData": [
            ["brand", "Brand"],
            ["select", "Select Brand"]
        ],
        "selectedKey": "select"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "popupTitle": null
    });
    var hbox1099302230262 = new kony.ui.Box({
        "id": "hbox1099302230262",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1099302230262.add(
    comboboxbrand);
    var btndone = new kony.ui.Button({
        "id": "btndone",
        "isVisible": true,
        "text": "Done",
        "skin": "btnSk",
        "onClick": popupfilter_btndone_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {});
    var hbox1562313185422 = new kony.ui.Box({
        "id": "hbox1562313185422",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1562313185422.add(
    btndone);
    popupfilter.add(
    hbox1099302230256, hbox1099302230259, hbox1099302230260, hbox1099302230261, hbox1099302230262, hbox1562313185422);
};

function popupfilterGlobals() {
    popupfilter = new kony.ui.Popup({
        "id": "popupfilter",
        "title": null,
        "transparencyBehindThePopup": 100,
        "isModal": false,
        "addWidgets": addWidgetspopupfilter
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