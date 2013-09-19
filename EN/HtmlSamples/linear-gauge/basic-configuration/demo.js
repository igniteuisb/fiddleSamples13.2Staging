$(function () {
            $("#lineargauge").igLinearGauge({
                height: "80px",
                width: "100%",
                value: 27,
                maximumValue: 30,
                ranges: [{startValue:0,endValue:22,name:"target"}]
            });
        });