$(function () {
            $("#bulletgraph").igBulletGraph({
                height: "80px",
                width: "100%",
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
                transitionDuration: 1000,
                formatLabel: function (evt, ui) {
                        ui.label = ui.label+"K";
                    }
            });
        });