///////////////////////////////////////////////////////////////////////////
///////////////
k_dv.dataviz.app = {};
k_dv.dataviz.app.skin = {};
k_dv.dataviz.app.skin.mainhbox = null;
k_dv.dataviz.app.skin.mainvbox = null;
k_dv.dataviz.app.skin.hbox = null;
k_dv.dataviz.app.skin.vbox = null;
k_dv.dataviz.app.timer = {};
k_dv.dataviz.app.timer.timer1 = "k_dv.dataviz.app.timer_1";
k_dv.dataviz.app.timer.inusetimer1 = false;
k_dv.dataviz.app.frm = {};
///////////////
function func_onhide_frm_000_dataviz_view_form() {
    kony.print("func_onhide_frm_000_dataviz_view_form");
    var frm = k_dv.dataviz.app.frm.dataVizViewForm();
    frm.destroy();
}
/////////////
k_dv.dataviz.app.showDemosOnForm = function(startIndex, demoViewForm, funcArray) {
    k_dv.dataviz.app.initViewForm(demoViewForm);
    for (var i = 0; i < funcArray.length; i++) {
        var chartInfo = funcArray[i]();
        var chartIndex = startIndex++;
        k_dv.dataviz.app.showOnFormWithContainerIndex(chartIndex, chartInfo, demoViewForm);
    }
    demoViewForm.show();
};
/////////////
k_dv.dataviz.app.showOnFormWithContainerIndex = function(index, chartInfoTable, viewForm) {
    var containerBox = k_dv.dataviz.app.getContainerOnFormWithIndex(index, viewForm);
    var chartid = "chart2d3d_" + index.toString();
    var chart2d3d = k_dv.dataviz.chartwidget.createWithChartInfoTable(chartid, chartInfoTable);
    if (containerBox) {
        containerBox.add(chart2d3d);
    }
    return chart2d3d;
};
///////////////
k_dv.dataviz.app.initViewForm = function(viewForm) {
    k_dv.dataviz.app.initAllViewForms();
    k_dv.dataviz.app.createContainerBoxes(viewForm);
};
///////////////
k_dv.dataviz.app.createContainerBoxes = function(viewForm) {
    var vboxVmFrm1 = k_dv.dataviz.app.createMainVBox("vboxVmFrm1");
    var hboxVwFrm1 = k_dv.dataviz.app.createMainHBox("hboxVwFrm1");
    hboxVwFrm1.add(vboxVmFrm1);
    viewForm.add(hboxVwFrm1);
};
///////////////
k_dv.dataviz.app.getContainerOnFormWithIndex = function(index, viewForm) {
    var boxid = "dvbx_" + index.toString();
    var margin = [2, 2, 2, 2];
    var padding = [4, 4, 4, 4];
    var containerBox = k_dv.dataviz.app.createHBox(boxid, margin, padding);
    viewForm.add(containerBox);
    return containerBox;
};
///////////////
k_dv.dataviz.app.frm.dataVizViewForm = function() {
    return k_dv.dataviz.app.formWithIndex(0);
};
///////////////
k_dv.dataviz.app.frm.demoFormCG = function() {
    return k_dv.dataviz.app.formWithIndex(1);
};
///////////////
k_dv.dataviz.app.frm.demoFormCNA = function() {
    return k_dv.dataviz.app.formWithIndex(2);
};
///////////////
k_dv.dataviz.app.frm.demoFormSeaGrey = function() {
    return k_dv.dataviz.app.formWithIndex(3);
};
///////////////
k_dv.dataviz.app.frm.demoFormFinanceChart = function() {
    return k_dv.dataviz.app.formWithIndex(4);
};
///////////////
k_dv.dataviz.app.frm.demoFormCC = function() {
    return k_dv.dataviz.app.formWithIndex(5);
};
///////////////
k_dv.dataviz.app.frm.demoFormWhite = function() {
    return k_dv.dataviz.app.formWithIndex(6);
};
///////////////
k_dv.dataviz.app.frm.popUpForm = function() {
    return k_dv.dataviz.app.formWithIndex(7);
};
///////////////
k_dv.dataviz.app.destroyTimer1 = function() {
    if (k_dv.dataviz.app.timer.inusetimer1) {
        kony.timer.cancel(k_dv.dataviz.app.timer.timer1);
        k_dv.dataviz.app.timer.inusetimer1 = false;
    }
};
///////////////
k_dv.dataviz.app.formWithIndex = function(frmIndex) {
    return k_dv.dataviz.app.forms()[frmIndex];
};
///////////////
k_dv.dataviz.app.forms = function() {
    var frm_array = [];
    var index = 0;
    frm_array[index++] = frm000DataVizViewForm;
    frm_array[index++] = frm101DemoCG;
    frm_array[index++] = frm103DemoCNA;
    frm_array[index++] = frm105DemoSeaGrey;
    frm_array[index++] = frm112DemoFinanceChartForm;
    frm_array[index++] = frm115DemoCC;
    frm_array[index++] = frm116DemoWhite;
    frm_array[index++] = frm800PopUp001;
    return frm_array;
};
///////////////
k_dv.dataviz.app.initAllViewForms = function() {
    var frms_array = k_dv.dataviz.app.forms();
    var noOfFrms = frms_array.length;
    for (var i = 0; i < noOfFrms; i++) {
        var frm = frms_array[i];
        if (frm) {
            frm.destroy();
        }
    }
    k_dv.dataviz.app.destroyTimer1();
};
/////////////////
k_dv.dataviz.app.installSwipeGestureOnForm = function(frm) {
    kony.print("k_dv.dataviz.app.installSwipeGestureOnForm");

    function gestureHandlerFunc(widgetRef, gestureInfo) {
        kony.print("k_dv.dataviz.app.installSwipeGestureOnForm : gestureHandlerFunc : " + widgetRef + " " + gestureInfo);
    }
    var gestureType = 2;
    var setupParams = {
        fingers: 1,
        swipedistance: 50,
        swipevelocity: 75
    };
    var gestureHandler = gestureHandlerFunc;
    frm.setGestureRecognizer(gestureType, setupParams, gestureHandler);
};
/////////////////  
k_dv.dataviz.app.createMainHBox = function(boxid) {
    var bxskin = k_dv.dataviz.app.skin.mainhbox;
    var hboxVwFrm1 = new kony.ui.Box({
        "id": boxid,
        "isVisible": true,
        "skin": bxskin,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 73,
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    return hboxVwFrm1;
};
///////////////
k_dv.dataviz.app.createMainVBox = function(boxid) {
    var bxskin = k_dv.dataviz.app.skin.mainvbox;
    var vboxVmFrm1 = new kony.ui.Box({
        "id": boxid,
        "isVisible": true,
        "skin": bxskin,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    return vboxVmFrm1;
};
///////////////
k_dv.dataviz.app.createHBox = function(boxid, margin, padding) {
    var bxskin = k_dv.dataviz.app.skin.hbox;
    var value = new kony.ui.Box({
        "id": boxid,
        "isVisible": true,
        "skin": bxskin,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "margin": margin,
        "padding": padding,
        "percent": true,
        "vExpand": false,
        "hExpand": true
    }, {
        "fixedHeightRow": false
    });
    return value;
};
///////////////
k_dv.dataviz.app.createVBox = function(boxid) {
    var bxskin = k_dv.dataviz.app.skin.vbox;
    var value = new kony.ui.Box({
        "id": boxid,
        "skin": bxskin,
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true
    }, {});
    return value;
};
///////////////