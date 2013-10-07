$(function () {
           $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                dataSource: data,
                title: "財務指標チャート",
                axes: [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    title: "日付"
                }, {
                    type: "numericY",
                    name: "yAxis",
                    title: "価格"
                }],
                series: [{
                    type: "absoluteVolumeOscillatorIndicator",
                    isTransitionInEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data",
                    isHighlightingEnabled: true
                }]
            });
        

           $("#seriesType").change(function (e) {
           seriesType = $("#seriesType").val();
            
            $("#chart").igDataChart("option", "series", [{name: "indicatorSeries",remove: true}]);
               
            if (seriesType == "ohlc" || seriesType == "candlestick") {
                $("#chart").igDataChart("option", "series", [{
                    type: "financial",
                    displayType: seriesType,
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data"
                }]);
            }
               
             else {
                $("#chart").igDataChart("option", "series", [{
                    type: seriesType,
                    isTransitionInEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    isHighlightingEnabled: true,
                    title: "Financial Indicator Data"
                }]);
            }
        });
        
            // Transiton Duration Slider
           $("#transitionDurationSlider").slider({
               min: 0,
               max: 5,
               step: 0.01,
               value: 2,
               slide: function (event, ui) {
                   $("#chart").igDataChart("option", "highlightingTransitionDuration", ui.value * 1000);
                   $("#transitionDurationLabel").text(ui.value);
               }
           });
        
        });