function testing() {
    var chartData = {
        "rowNames": {
            "values": datelist
        },
        "columnNames": {
            "values": productlist
        },
        "data": {
            "Product 2": [234, 236, 224, 244, 240, 218],
            "Product 6": [524, 512, 514, 526, 534, 536],
            "Product 7": [344, 335, 336, 334, 332, 324],
            "Product 11": [78, 79, 67, 87, 76, 54, 34],
            "Product 12": [120, 125, 135, 155, 170, 128]
        }
    };
    alert("Chart Data  : " + JSON.stringify(chartData));
    return chartData;
}