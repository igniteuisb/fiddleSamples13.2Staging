$(function () {

            $("#lineSparkline").igSparkline({
                dataSource: data,
                displayType: "line",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

            $("#areaSparkline").igSparkline({
                dataSource: data,
                displayType: "area",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

            $("#columnSparkline").igSparkline({
                dataSource: data,
                displayType: "column",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

            $("#winLossSparkline").igSparkline({
                dataSource: data,
                displayType: "winLoss",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

        });