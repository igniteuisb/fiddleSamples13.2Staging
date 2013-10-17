$(function () {
var evntCounter = 0, transperantBrush = "rgba(0,0,0,0)", minorStrokeBrush = "rgba(0,0,0,0.1)",
      strokeBrush = "rgba(40,0,240,0.7)", priceBrush = "rgba(0,255,255,1)",
      negativeBrush = "rgba(0,0,0,0.7)", trendlineBrush = "rgba(0,100,0,1)",
      volumeBrush = "rgba(255,0,0,1)", brush, negBrush, mType;


        $(function () {
            $("#chart").igDataChart({
                width: "500px",
                height: "500px",
                legend: { element: "chartLegend" },
                title: "Microsoft (MSFT) vs. Adobe (ADBE)",
                subtitle: "A comparison of stocks over time",
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate",
                axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        dataSource: data,
                        label: "Date",
                        title: "Date",
                        interval: 10
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "Price",
                    }],
                series: [{
                    name: "series1",
                    dataSource: data,
                    title: "Price Series",
                    type: "financial",
                    displayType: "candlestick",
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    thickness: 1,
                    trendLineThickness: 4,
                    trendLineType: "exponentialAverage",
                }],
            });
            
        });
        
        $("#axisLines").click(function (e) {
            
            //brush = ($(this).is(":checked")) ? strokeBrush : transperantBrush;
            //$("#chart").igDataChart("option", "axes", [
            //    { name: "xAxis", stroke: brush },
            //    { name: "yAxis", stroke: brush }]);
            //$("#chart").igDataChart("styleUpdated");
        });
        
        $("#axisGridLines").click(function () {
               console.log('axisGridLines');
               var brush = ($(this).val()) ? strokeBrush : transperantBrush;
               console.log(brush);
               $("#chart").igDataChart("option", "axes", [
                   { name: "xAxis", majorStroke: brush },
                   { name: "yAxis", majorStroke: brush }
               ]);
                $("#chart").igDataChart("styleUpdated");
        });
        //$("#axisGridrLines").live("change", function () {
        //    brush = ($(this).is(":checked")) ? strokeBrush : transperantBrush;
        //    $("#chart").igDataChart("option", "axes", [{ name: "xAxis", majorStroke: brush }, { name: "yAxis", majorStroke: brush }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#axisMinorLines").live("change", function () {
        //    brush = ($(this).is(":checked")) ? minorStrokeBrush : transperantBrush;
        //    $("#chart").igDataChart("option", "axes", [{ name: "xAxis", minorStroke: brush }, { name: "yAxis", minorStroke: brush }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#axisStripes").live("change", function () {
        //    brush = ($(this).is(":checked")) ? minorStrokeBrush : transperantBrush;
        //    $("#chart").igDataChart("option", "axes", [{ name: "xAxis", strip: brush }, { name: "yAxis", strip: brush }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#axisLabels").live("change", function () {
        //    var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
        //    $("#chart").igDataChart("option", "axes", [{ name: "xAxis", labelVisibility: visibility }, { name: "yAxis", labelVisibility: visibility }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#priceSeries").live("change", function () {
        //    brush = ($(this).is(":checked")) ? priceBrush : transperantBrush;
        //    negBrush = ($(this).is(":checked")) ? negativeBrush : transperantBrush;
        //    visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
        //    $("#chart").igDataChart("option", "series", [{ name: "series1", brush: brush, negativeBrush: negBrush, outline: negBrush, legendItemVisibility: visibility }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#volumeSeries").live("change", function () {
        //    brush = ($(this).is(":checked")) ? volumeBrush : transperantBrush;
        //    mType = ($(this).is(":checked")) ? "circle" : "none";
        //    visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
        //    $("#chart").igDataChart("option", "series", [{ name: "series2", brush: brush, markerType: mType, legendItemVisibility: visibility }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#volumeTrendline").live("change", function () {
        //    brush = ($(this).is(":checked")) ? trendlineBrush : transperantBrush;
        //    $("#chart").igDataChart("option", "series", [{ name: "series2", trendLineBrush: brush }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#cbLegend").live("change", function () {
        //    visibility = ($(this).is(":checked")) ? "visible" : "hidden";
        //    $('#legend').css("visibility", visibility);
        //});

        //$("#markers").live("change", function () {
        //    mType = ($(this).is(":checked")) ? "circle" : "none";
        //    $("#chart").igDataChart("option", "series", [{ name: "series2", markerType: mType }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});

        //$("#cbCrosshairs").live("change", function () {
        //    var crosshairsVisible = ($(this).is(":checked")) ? "visible" : "collapsed";
        //    $("#chart").igDataChart("option", "crosshairVisibility", crosshairsVisible);
        //});
});