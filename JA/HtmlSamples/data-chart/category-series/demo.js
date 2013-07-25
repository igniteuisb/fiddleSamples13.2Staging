$(function () {
            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                dataSource: data,
                title: "U.K. vs. フランス",
                subTitle: "人口の比較 (年)",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Date",
                    isInverted: "true",
                    interval: 2,
                    title: "年"
                },
                {
                    name: "yAxis",
                    type: "numericY",
                    title: "人口 (百万人単位)"
                }],
                series: [{
                    name: "ukPop",
                    type: "line",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "ukPopulation",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate1",
                    thickness: 5
                }, {
                    name: "frPop",
                    type: "line",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "francePopulation",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate2",
                    thickness: 5
                }],
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });

            $("#seriesType").change(function (e) {
                var thickness = 5,
                    seriesType = $(this).val();

                if (seriesType == "area" ||
                    seriesType == "splineArea" ||
                    seriesType == "column" ||
                    seriesType == "waterfall" ||
                    seriesType == "stepArea") {
                    thickness = 1;
                }

                $("#chart").igDataChart("option", "series", [{ name: "ukPop", remove: true }]);
                $("#chart").igDataChart("option", "series", [{ name: "frPop", remove: true }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "ukPop",
                    type: $(this).val(),
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "ukPopulation",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate1",
                    thickness: thickness
                }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "frPop",
                    type: $(this).val(),
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "francePopulation",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate2",
                    thickness: thickness
                }]);
            });
        });