//Template File
function MSDHeader_hbox542671574595750_onClick_seq0(eventobject) {
    frmHome.show();
};

function MSDHeader_hbox542671574595750_onClick_seq0(eventobject) {
    frmHome.show();
};

function initializeMSDHeader() {
    hbox542671574595750 = new kony.ui.BoxTemplate({
        "id": "hbox542671574595750",
        "isVisible": true,
        "skin": "logoBoxSkin",
        "focusSkin": "logoBoxSkin",
        "onClick": MSDHeader_hbox542671574595750_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox542671574595750
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

    function addWidgetshbox542671574595750() {
        var imgLogo = new kony.ui.Image2({
            "id": "imgLogo",
            "isVisible": true,
            "src": "msd_logo.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null,
            "skin": "slImage"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [30, 4, 0, 4],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vboxLogo = new kony.ui.Box({
            "id": "vboxLogo",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 50,
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
            "margin": [1, 1, 1, 1],
            "padding": [0, 3, 0, 20],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "glowEffect": false,
            "showProgressIndicator": true
        });
        var vboxQ = new kony.ui.Box({
            "id": "vboxQ",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 9,
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
        hbox542671574595750.add(
        vboxLogo, vboxQ);
    }
    hbox542671574595770 = new kony.ui.BoxTemplate({
        "id": "hbox542671574595770",
        "isVisible": false,
        "skin": "logoBoxSkin",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox542671574595770
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

    function addWidgetshbox542671574595770() {
        var lblHelp = new kony.ui.Label({
            "id": "lblHelp",
            "isVisible": false,
            "text": "Help info goes here...",
            "skin": "bodyCopySkin"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [1, 5, 1, 5],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        hbox542671574595770.add(
        lblHelp);
    }
};