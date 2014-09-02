//Form JS File
function frmDashboard_frmDashboard_preshow_seq0(eventobject, neworientation) {
    getBrandsByRepByDateService.call(this);
};

function frmDashboard_vboxOne_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmDashboard_btnMap_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmDashboard_vboxTwo_onClick_seq0(eventobject) {
    frmTrends.show();
};

function frmDashboard_btnTrends_onClick_seq0(eventobject) {
    func_init_frm_001_line_chart_001.call(this);
};

function frmDashboard_vboxtxt1_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmDashboard_vboxtxt2_onClick_seq0(eventobject) {
    frmTrends.show();
};

function frmDashboard_vboxThree_onClick_seq0(eventobject) {
    frmGrowth.show();
};

function frmDashboard_btnGrowth_onClick_seq0(eventobject) {
    frmGrowth.show();
};

function frmDashboard_vboxFour_onClick_seq0(eventobject) {
    frmGrading.show();
};

function frmDashboard_btnGrade_onClick_seq0(eventobject) {
    frmPlaceholder.show();
};

function frmDashboard_vboxtxt3_onClick_seq0(eventobject) {
    frmGrowth.show();
};

function frmDashboard_vboxtxt4_onClick_seq0(eventobject) {
    frmGrading.show();
};

function frmDashboard_vboxFive_onClick_seq0(eventobject) {
    frmVis.show();
};

function frmDashboard_btnVis_onClick_seq0(eventobject) {
    frmVis.show();
};

function frmDashboard_vboxSix_onClick_seq0(eventobject) {
    frmTop.show();
};

function frmDashboard_btnTop_onClick_seq0(eventobject) {
    frmTop.show();
};

function frmDashboard_vboxtxt5_onClick_seq0(eventobject) {
    frmVis.show();
};

function frmDashboard_vboxtxt6_onClick_seq0(eventobject) {
    frmTop.show();
};

function addWidgetsfrmDashboard() {
    var btnMap = new kony.ui.Button({
        "id": "btnMap",
        "isVisible": true,
        "text": null,
        "skin": "btn1Skin",
        "focusSkin": "btn1SkinHov",
        "onClick": frmDashboard_btnMap_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vboxOne = new kony.ui.Box({
        "id": "vboxOne",
        "isVisible": true,
        "onClick": frmDashboard_vboxOne_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxOne.add(
    btnMap);
    var space1 = new kony.ui.Box({
        "id": "space1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    space1.add();
    var btnTrends = new kony.ui.Button({
        "id": "btnTrends",
        "isVisible": true,
        "text": null,
        "skin": "btn2Skin",
        "focusSkin": "btn2SkinHov",
        "onClick": frmDashboard_btnTrends_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vboxTwo = new kony.ui.Box({
        "id": "vboxTwo",
        "isVisible": true,
        "onClick": frmDashboard_vboxTwo_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxTwo.add(
    btnTrends);
    var hboxRow1 = new kony.ui.Box({
        "id": "hboxRow1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [10, 8, 10, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxRow1.add(
    vboxOne, space1, vboxTwo);
    var lblOne = new kony.ui.Label({
        "id": "lblOne",
        "isVisible": true,
        "text": "Location Map",
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 98
    }, {
        "textCopyable": false
    });
    var vboxtxt1 = new kony.ui.Box({
        "id": "vboxtxt1",
        "isVisible": true,
        "onClick": frmDashboard_vboxtxt1_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxtxt1.add(
    lblOne);
    var space4 = new kony.ui.Box({
        "id": "space4",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    space4.add();
    var lblTwo = new kony.ui.Label({
        "id": "lblTwo",
        "isVisible": true,
        "text": "Sales Trends",
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 98
    }, {
        "textCopyable": false
    });
    var vboxtxt2 = new kony.ui.Box({
        "id": "vboxtxt2",
        "isVisible": true,
        "onClick": frmDashboard_vboxtxt2_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxtxt2.add(
    lblTwo);
    var hboxtxt1 = new kony.ui.Box({
        "id": "hboxtxt1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [10, 2, 10, 5],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxtxt1.add(
    vboxtxt1, space4, vboxtxt2);
    var btnGrowth = new kony.ui.Button({
        "id": "btnGrowth",
        "isVisible": true,
        "text": null,
        "skin": "btn3Skin",
        "focusSkin": "btn3SkinHov",
        "onClick": frmDashboard_btnGrowth_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vboxThree = new kony.ui.Box({
        "id": "vboxThree",
        "isVisible": true,
        "onClick": frmDashboard_vboxThree_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxThree.add(
    btnGrowth);
    var space2 = new kony.ui.Box({
        "id": "space2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    space2.add();
    var btnGrade = new kony.ui.Button({
        "id": "btnGrade",
        "isVisible": true,
        "text": null,
        "skin": "btnSkin4",
        "focusSkin": "btnSkin4Hov",
        "onClick": frmDashboard_btnGrade_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vboxFour = new kony.ui.Box({
        "id": "vboxFour",
        "isVisible": true,
        "onClick": frmDashboard_vboxFour_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxFour.add(
    btnGrade);
    var hboxRow2 = new kony.ui.Box({
        "id": "hboxRow2",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [10, 5, 10, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxRow2.add(
    vboxThree, space2, vboxFour);
    var lblThree = new kony.ui.Label({
        "id": "lblThree",
        "isVisible": true,
        "text": "Sales Growth",
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 98
    }, {
        "textCopyable": false
    });
    var vboxtxt3 = new kony.ui.Box({
        "id": "vboxtxt3",
        "isVisible": true,
        "onClick": frmDashboard_vboxtxt3_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxtxt3.add(
    lblThree);
    var space5 = new kony.ui.Box({
        "id": "space5",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    space5.add();
    var lblFour = new kony.ui.Label({
        "id": "lblFour",
        "isVisible": true,
        "text": "Sales by Grading",
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 98
    }, {
        "textCopyable": false
    });
    var vboxtxt4 = new kony.ui.Box({
        "id": "vboxtxt4",
        "isVisible": true,
        "onClick": frmDashboard_vboxtxt4_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxtxt4.add(
    lblFour);
    var hboxtxt2 = new kony.ui.Box({
        "id": "hboxtxt2",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [10, 2, 10, 5],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxtxt2.add(
    vboxtxt3, space5, vboxtxt4);
    var btnVis = new kony.ui.Button({
        "id": "btnVis",
        "isVisible": true,
        "text": null,
        "skin": "btnSkin5",
        "focusSkin": "btnSkin5Hov",
        "onClick": frmDashboard_btnVis_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vboxFive = new kony.ui.Box({
        "id": "vboxFive",
        "isVisible": true,
        "onClick": frmDashboard_vboxFive_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxFive.add(
    btnVis);
    var space3 = new kony.ui.Box({
        "id": "space3",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    space3.add();
    var btnTop = new kony.ui.Button({
        "id": "btnTop",
        "isVisible": true,
        "text": null,
        "skin": "btnSkin6",
        "focusSkin": "btnSkin6Hov",
        "onClick": frmDashboard_btnTop_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vboxSix = new kony.ui.Box({
        "id": "vboxSix",
        "isVisible": true,
        "onClick": frmDashboard_vboxSix_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxSix.add(
    btnTop);
    var hboxRow3 = new kony.ui.Box({
        "id": "hboxRow3",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [10, 5, 10, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxRow3.add(
    vboxFive, space3, vboxSix);
    var lblFive = new kony.ui.Label({
        "id": "lblFive",
        "isVisible": true,
        "text": "Sales Visualised",
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 98
    }, {
        "textCopyable": false
    });
    var vboxtxt5 = new kony.ui.Box({
        "id": "vboxtxt5",
        "isVisible": true,
        "onClick": frmDashboard_vboxtxt5_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxtxt5.add(
    lblFive);
    var space6 = new kony.ui.Box({
        "id": "space6",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    space6.add();
    var lblSix = new kony.ui.Label({
        "id": "lblSix",
        "isVisible": true,
        "text": "Top 25 Customers",
        "skin": "BlueHeadSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 98
    }, {
        "textCopyable": false
    });
    var vboxtxt6 = new kony.ui.Box({
        "id": "vboxtxt6",
        "isVisible": true,
        "onClick": frmDashboard_vboxtxt6_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxtxt6.add(
    lblSix);
    var hboxtxt3 = new kony.ui.Box({
        "id": "hboxtxt3",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [10, 2, 10, 5],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxtxt3.add(
    vboxtxt5, space6, vboxtxt6);
    frmDashboard.add(
    hboxRow1, hboxtxt1, hboxRow2, hboxtxt2, hboxRow3, hboxtxt3);
};

function frmDashboardGlobals() {
    var MenuId = [];
    frmDashboard = new kony.ui.Form2({
        "id": "frmDashboard",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxLogo, hboxHInfo],
        "enabledForIdleTimeout": false,
        "skin": "whtBack",
        "preShow": frmDashboard_frmDashboard_preshow_seq0,
        "addWidgets": addWidgetsfrmDashboard
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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