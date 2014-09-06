//Template File
function logoHeader_hboxLogo_onClick_seq0(eventobject) {
    frmHome.show();
};

function logoHeader_hboxLogo_onClick_seq0(eventobject) {
    frmHome.show();
};

function initializelogoHeader() {
    hboxLogo = new kony.ui.BoxTemplate({
        "id": "hboxLogo",
        "isVisible": true,
        "skin": "logoBoxSkin",
        "focusSkin": "logoBoxSkin",
        "onClick": logoHeader_hboxLogo_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshboxLogo
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshboxLogo() {
        var imgLogo = new kony.ui.Image2({
            "id": "imgLogo",
            "isVisible": true,
            "src": "logo.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [30, 2, 0, 2],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var vboxLogo = new kony.ui.Box({
            "id": "vboxLogo",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 40,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxLogo.add(
        imgLogo);
        var btnQues = new kony.ui.Button({
            "id": "btnQues",
            "isVisible": true,
            "text": null,
            "skin": "questionSkin",
            "focusSkin": "questionSkinHov"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [20, 75, 20, 15],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var vboxQ = new kony.ui.Box({
            "id": "vboxQ",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 2,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxQ.add(
        btnQues);
        hboxLogo.add(
        vboxLogo, vboxQ);
    }
    hboxHInfo = new kony.ui.BoxTemplate({
        "id": "hboxHInfo",
        "isVisible": false,
        "skin": "logoBoxSkin",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshboxHInfo
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshboxHInfo() {
        var lblHelp = new kony.ui.Label({
            "id": "lblHelp",
            "isVisible": false,
            "text": "Help info goes here...",
            "skin": "bodyCopySkin"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 5, 1, 5],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "textCopyable": false
        });
        hboxHInfo.add(
        lblHelp);
    }
};