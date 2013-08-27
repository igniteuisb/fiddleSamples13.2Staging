$(function () {

            $("#map").igMap({
                width: "100%",
                height: "350px",
                crosshairVisibility: "visible",
                verticalZoomable: true,
                horizontalZoomable: true,
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://jp.staging.igniteui.local/13-2/images/samples/maps/world.png",
                panModifier: "control",
                backgroundContent: {
                    type: "cloudMade",
                    key: cloudmadeData,
                    parameter: 2
                },
                series: [{
                    type: "geographicShape",
                    name: "worldCountries",
                    markerType: "automatic",
                    shapeMemberPath: "points",
                    shapefileUri: "http://jp.staging.igniteui.local/13-2/data-files/shapes/world.shp",
                    databaseUri: "http://jp.staging.igniteui.local/13-2/data-files/shapes/world.dbf"
                }],
                windowResponse: "immediate",
                windowRect: {
                    left: 0,
                    top: 0,
                    height: 0.7,
                    width: 0.7
                }
            });

        });