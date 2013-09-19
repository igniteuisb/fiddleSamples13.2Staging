$(function () {

            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                height: "300px",
                width: "60px",
                orientation: "vertical",
                minimumValue: 0, // default is 0
                maximumValue: 30, // default is 100
                value: 26,
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
                transitionDuration: 200,
                formatLabel: function (evt, ui) {
                    ui.label = ui.label + "K";
                }
            });

            // Orientation
            $("#orientationButton").click(function () {
                var orientation = $bulletGraph.igBulletGraph("option", "orientation") == "vertical" ? "horizontal" : "vertical";
                $bulletGraph.igBulletGraph("option", "orientation", orientation);

                if (orientation == "horizontal") {
                    $bulletGraph.igBulletGraph("option", "width", "100%");
                    $bulletGraph.igBulletGraph("option", "height", 60);
                }
                else {
                    $bulletGraph.igBulletGraph("option", "width", 60);
                    $bulletGraph.igBulletGraph("option", "height", 300);
                }
                
                $("#orientationButton").text(orientation == "horizontal" ? "Vertical" : "Horizontal");
            });

            // Scale Inversion
            $("#isScaleInvertedCheckBox").click(function () {
                $bulletGraph.igBulletGraph("option", "isScaleInverted", $(this).is(":checked"));
            });
        });