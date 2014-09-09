///////////////////////////////////////////////////////////////////////////
///////////////
k_dv.dataviz.chartwidget.chartdata = {};
k_dv.dataviz.chartwidget.chartproperties = {};
///////////////
k_dv.dataviz.chartwidget.createWithChartInfoTable = function(chartId, chartInfoTable) {
    var konyDVWidget = new kony.ui.Chart2D3D({
        "id": chartId,
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 100
    }, chartInfoTable);
    return konyDVWidget;
};
///////////////
///////////////////////////////////////////////////////////////////////////