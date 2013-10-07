$(function () {
            $("#lineargauge").igLinearGauge({
                height: "80px",
                width: "100%",
                value: 58,
                minimumValue: -20,
                maximumValue: 60,
                ranges: [{
                    startValue: -20, endValue: 60, name: "target", brush: {
                        type: "linearGradient",
                        colorStops: [{
                            color: "#2788B1",
                            offset: 0
                        },
                        {
                            color: "#A4BA29",
                            offset: 0.3
                        },
                        {
                            color: "#FDBD48",
                            offset: .6
                        },
                        {
                            color: "#D3404B",
                            offset: .9
                        }],
                        // optional:
                        startPoint: { x: 0, y: .5 },
                        endPoint: { x: 1, y: .5 }
                        // if start/endPoint are not specified, the default direction is top-bottom
                    },
                }]
            });
        });