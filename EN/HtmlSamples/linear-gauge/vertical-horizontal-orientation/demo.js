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
                }
        });

            // Orientation
            $("#orientationButton").click(function () {
                var value = linearGauge.igLinearGauge("option", "orientation") == "vertical" ? "horizontal" : "vertical",
                    displayValue = value == "horizontal" ? "Vertical" : "Horizontal",
                    width = linearGauge.igLinearGauge("option", "height"),
                    height = linearGauge.igLinearGauge("option", "width");
                linearGauge.igLinearGauge("option", "orientation", value);
                linearGauge.igLinearGauge("option", "width", width);
                linearGauge.igLinearGauge("option", "height", height); 

                $("#orientationButton").text(displayValue);
            });

            // Scale Inversion
            $("#isScaleInvertedCheckBox").click(function () {
                linearGauge.igLinearGauge("option", "isScaleInverted", $(this).is(":checked"));
            });
        });