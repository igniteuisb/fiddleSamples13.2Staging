$(function () {
            
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        brush:'#803E01',
                        name: 'bad',
                        startValue: 0,
                        endValue: 5200
                    },
                    {
                        brush: '#BA5A05',
                        name: 'acceptable',
                        startValue: 5200,
                        endValue: 6400
                    },
                    {
                        brush: '#FF7A04',
                        name: 'good',
                        startValue: 6400,
                        endValue: 10000
                    }
                ],
                minimumValue: 0,
                maximumValue: 10000,
                actualValue: 6000,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent',
                actualValueInnerExtent: 0.5,
                actualValueOuterExtent: 0.65,
                targetValue: 5550,
                targetValueBreadth: 4,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent'
            });

            var $bulletGraph2 = $("#bulletgraph2");

            $bulletGraph2.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#566509',
                        name: 'bad',
                        startValue: 0,
                        endValue: 3400
                    },
                    {
                        brush: '#7F950C',
                        name: 'acceptable',
                        startValue: 3400,
                        endValue: 4000
                    },
                    {
                        brush: '#AABF31',
                        name: 'good',
                        startValue: 4000,
                        endValue: 10000
                    }
                ],
                minimumValue: 0,
                maximumValue: 10000,
                actualValue: 5000,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent',
                actualValueInnerExtent: 0.5,
                actualValueOuterExtent: 0.65,
                targetValue: 4800,
                targetValueBreadth: 12,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent'
            });


            var $bulletGraph3 = $("#bulletgraph3");

            $bulletGraph3.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#566509',
                        name: 'bad',
                        startValue: 0,
                        endValue: 254
                    },
                    {
                        brush: '#7F950C',
                        name: 'acceptable',
                        startValue: 254,
                        endValue: 300
                    },
                    {
                        brush: '#AABF31',
                        name: 'good',
                        startValue: 300,
                        endValue: 500
                    }
                ],
                minimumValue: 0,
                maximumValue: 500,
                actualValue: 350,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent',
                actualValueInnerExtent: 0.35,
                actualValueOuterExtent: 0.8,
                targetValue: 300,
                targetValueBreadth: 4,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent'
            });


            var $bulletGraph4 = $("#bulletgraph4");

            $bulletGraph4.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#11364D',
                        name: 'bad',
                        startValue: 0,
                        endValue: 60
                    },
                    {
                        brush: '#164F6D',
                        name: 'acceptable',
                        startValue: 60,
                        endValue: 70
                    },
                    {
                        brush: '#20789F',
                        name: 'good',
                        startValue: 70,
                        endValue: 100
                    }
                ],
                minimumValue: 0,
                maximumValue: 100,
                actualValue: 50,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent', 
                targetValue: 73,
                targetValueBreadth: 4,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent',
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                }
            });
        });