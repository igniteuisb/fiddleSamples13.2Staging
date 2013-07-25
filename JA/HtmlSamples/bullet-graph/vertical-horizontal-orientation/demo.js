$(function () {

            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                height: "300px",
                width: "60px",
                orientation: "vertical",
                minimumValue: 0, // default is 0
                maximumValue: 30, // default is 100
                actualValue: 26,
                targetValue: 22,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 14
                    },
                    {
                        name: 'acceptable',
                        startValue: 14,
                        endValue: 25
                    },
                    {
                        name: 'good',
                        startValue: 25,
                        endValue: 30
                    }],
                transitionDuration: 500,
                formatLabel: function (evt, ui) {
                    ui.label = ui.label + "K";
                }
        });

            // Orientation
            $("#orientationButton").click(function () {
                var value = $bulletGraph.igBulletGraph("option", "orientation") == "vertical" ? "horizontal" : "vertical",
                    displayValue = value == "horizontal" ? "垂直方向" : "水平方向",
                    width = $bulletGraph.igBulletGraph("option", "height"),
                    height = $bulletGraph.igBulletGraph("option", "width");
                $bulletGraph.igBulletGraph("option", "orientation", value);
                $bulletGraph.igBulletGraph("option", "width", width);
                $bulletGraph.igBulletGraph("option", "height", height);

                $("#orientationButton").text(displayValue);
            });

            // Scale Inversion
            $("#isScaleInvertedCheckBox").click(function () {
                $bulletGraph.igBulletGraph("option", "isScaleInverted", $(this).is(":checked"));
            });
        });