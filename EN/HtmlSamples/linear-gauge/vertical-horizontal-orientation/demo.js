$(function () {

            var linearGauge = $("#lineargauge");

            linearGauge.igLinearGauge({
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
                 
                formatLabel: function (evt, ui) {
                    ui.label = ui.label + "K";
                },
                transitionDuration: 200
            });

            // Orientation
            $("#orientationButton").click(function () {
                

                var orientation = linearGauge.igLinearGauge("option", "orientation") == "vertical" ? "horizontal" : "vertical";
                linearGauge.igLinearGauge("option", "orientation", orientation);

                if (orientation == "horizontal") {
                    linearGauge.igLinearGauge("option", "width", "100%");
                    linearGauge.igLinearGauge("option", "height", 60);
                }
                else {
                    linearGauge.igLinearGauge("option", "width", 60);
                    linearGauge.igLinearGauge("option", "height", 300);
                }

                $("#orientationButton").text(orientation == "horizontal" ? "Vertical" : "Horizontal");
            });

            // Scale Inversion
            $("#isScaleInvertedCheckBox").click(function () {
                linearGauge.igLinearGauge("option", "isScaleInverted", $(this).is(":checked"));
            });
        });