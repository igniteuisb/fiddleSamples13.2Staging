$(function () {

            $("#sparkline").igSparkline({
                dataSource: data,
                height: "100px",
                width: "100%",
                displayType: "line",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date',
                markerVisibility: "visible",
                tooltipTemplate: "Low:${Low}<br>High:${High}"
            });

        });