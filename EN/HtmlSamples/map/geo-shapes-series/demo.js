$(function () {             
             
            $("#map").igMap({
                width: "700px",
                height: "500px",
                windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
                verticalZoomable: true,
                horizontalZoomable: true,
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://staging.igniteui.local/13-2/images/samples/maps/world.png",
                backgroundContent: {
                    type: "bing",
                    key: mapHelper.bingData(),
                    imagerySet: "AerialWithLabels",
                },
                series: [{
                    type: "geographicShape",
                    name: "worldCountries",
                    markerType: "none",
                    shapeMemberPath: "points",
                    shapeDataSource: 'http://staging.igniteui.local/13-2/data-files/shapes/world_countries_reg.shp',
                    databaseSource: 'http://staging.igniteui.local/13-2/data-files/shapes/world_countries_reg.dbf',
                    brush: "rgba(200,200,200,0.35)",
                    outline: "rgba(45,130,200,0.6)",
                    outlineThickness: 0.25,
                    showTooltip: true,
                    tooltipTemplate: "geoShapeTooltip"
                }],

            });
        });