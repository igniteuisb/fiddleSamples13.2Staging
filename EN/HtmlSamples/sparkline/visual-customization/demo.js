$(function () {

            $("#slNightSky").igSparkline({
                dataSource: data,
                displayType: "area",
                height: "120px",
                width: "100%",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date',
                brush: "#446185",
                normalRangeVisibility: "visible",
                trendLineBrush: "#d0d0e0",
                trendLineType: "simpleAverage",
                markerVisibility: "visible",
                markerBrush: "#a8aec4",
                markerSize: 1
            });

            $("#slSnakeSkin").igSparkline({
                dataSource: data,
                displayType: "column",
                height: "120px",
                width: "100%",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date',
                negativeBrush: "#cfc8c0",
                negativeMarkerVisibility: "collapsed",
                brush: "#bdada1",
                normalRangeVisibility: "visible",
                trendLineBrush: "#403636",
                trendLineType: "simpleAverage",
                markerVisibility: "visible",
                markerBrush: "#6e5348",
                trendLineThickness: 2
            });

        });