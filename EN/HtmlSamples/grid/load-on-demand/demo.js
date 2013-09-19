$(function () {
            /*----------------- Instantiation -------------------------*/
            createAutoGrid();
            createButtonGrid();
            createPullGrid();
        });

        function createAutoGrid()
        {
            $( "#autoLoadOnDemand" ).igGrid( {
                width: "98%",
                autoGenerateColumns: false,             
                primaryKey: "DinnerID",
                dataSource: "http://www.nerddinner.com/Services/OData.svc/Dinners?$format=json&$callback=?",            
                responseDataKey: "d.results",
                generateCompactJSONResponse: false,
                enableUTCDates: true,
                height: "400px",
                columns: [
                    { headerText: "DinnerID", key: "DinnerID", dataType: "number" },
                    { headerText: "Title", key: "Title", dataType: "string" },
                    { headerText: "Description", key: "Description", dataType: "string" },
                    { headerText: "Address", key: "Address", dataType: "string" },
                    { headerText: "EventDate", key: "EventDate", dataType: "date" },
                    { headerText: "HostedBy", key: "HostedBy", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'Description',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: 'LoadOnDemand',
                        chunkSize: 10,
                        loadTrigger: "auto"
                    }
                ]
            });
        }

        function createButtonGrid()
        {
            $( "#buttonLoadOnDemand" ).igGrid( {
                width: "98%",
                autoGenerateColumns: false,
                primaryKey: "DinnerID",
                dataSource: "http://www.nerddinner.com/Services/OData.svc/Dinners?$format=json&$callback=?",
                responseDataKey: "d.results",
                columns: [
                    { headerText: "DinnerID", key: "DinnerID", dataType: "number" },
                    { headerText: "Title", key: "Title", dataType: "string" },
                    { headerText: "Description", key: "Description", dataType: "string" },
                    { headerText: "Address", key: "Address", dataType: "string" },
                    { headerText: "EventDate", key: "EventDate", dataType: "date" },
                    { headerText: "HostedBy", key: "HostedBy", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'Description',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: 'LoadOnDemand',
                        chunkSize: 10,
                        loadTrigger: "button"
                    }
                ]
            });
        }

        function createPullGrid()
        {
            $( "#pullLoadOnDemand" ).igGrid( {
                width: "98%",
                autoGenerateColumns: false,
                dataSource: "http://www.nerddinner.com/Services/OData.svc/Dinners?$format=json&$callback=?",
                responseDataKey: "d.results",
                columns: [
                   { headerText: "Dinner ID", key: "DinnerID", dataType: "number" },
                   { headerText: "Title", key: "Title", dataType: "string" },
                   { headerText: "Description", key: "Description", dataType: "string" },
                   { headerText: "Address", key: "Address", dataType: "string" },
                   { headerText: "Event Date", key: "EventDate", dataType: "date" },
                   { headerText: "Hosted By", key: "HostedBy", dataType: "string" }
                ],
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'Description',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: 'LoadOnDemand',
                        chunkSize: 10,
                        loadTrigger: "pull"
                    }
                ]
            });
        }