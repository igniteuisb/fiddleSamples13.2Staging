$(function () {
<tr>
            <td>{{>ID}}</td>
            <td>{{>#view.hlp('toFullName')(Name)}}</td>
            <td><img width='100' height='90' src={{>ImageUrl}}></img></td>
            <td>{{>Title}}</td>
            <td>{{>Phone}}</td>
            <td><img width='20' height='15' src='http://igniteuisamples.staging.infragistics.local/13-2/images/samples/nw/countries/{{>Country}}.gif'></img>{{>Country}}</td>
            <td>
                <span style='color:
                    {{if #view.hlp('toDate')(BirthDate) > #view.hlp('toDate')('1970-01-01T00:00:00.000')}}blue
                    {{else}}red
                    {{/if}};'>
                    {{>BirthDate}}
                </span>
            </td>
        </tr>
     

        $(function () {            

            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];                      

            $.views.helpers(
            {
                toDate: function (val) {
                    return new Date(val);
                }
            });

            $.views.helpers(
            {
                toFullName: function (val) {
                    var name = val.split(',').reverse().join(" ");
                    return name;
                }
            });            

            $("#grid12").igGrid({
                width: "98%",
                height: "600px",
                rowTemplate: $("#theTmpl").html(),
                autoGenerateColumns: false,
                columns: [
                        { headerText: "Employee ID", key: "ID", dataType: "number" },
                        { headerText: "Name", key: "Name", dataType: "string" },
                        { headerText: "Image", key: "ImageUrl", dataType: "object" },
                        { headerText: "Title", key: "Title", dataType: "string" },
                        { headerText: "Phone", key: "Phone", dataType: "string" },
                        { headerText: "Country", key: "Country", dataType: "string" },
                        { headerText: "Birth Date", key: "BirthDate", dataType: "date" }
                    ],
                dataSource: northwindEmployees,
                dataSourceType: 'json',
                primaryKey: "ID",
                templatingEngine: "jsrender",
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Phone',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Name',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "Selection"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        mode: "advanced",
                        filterDropDownItemIcons: false,
                        filterDropDownWidth: 200
                    },
                    {
                        name: "Updating",
                        enableAddRow: false,
                        editMode: "rowedittemplate",
                        rowEditDialogWidth: 350,
                        rowEditDialogHeight: '430',
                        rowEditDialogContentHeight: 300,
                        rowEditDialogFieldWidth: 150,
                        rowEditDialogOkCancelButtonWidth: 110,
                        rowEditDialogContainment: "owner",
                        showReadonlyEditors: false,
                        columnSettings: [
                            {
                                columnKey: "ImageUrl",
                                readOnly: true
                            },
                            {
                                columnKey: "EmployeeID",
                                readOnly: true
                            },
                            {
                                columnKey: "Title",
                                editorType: "text",
                                editorOptions: {
                                    button: "dropdown",
                                    listItems: titles,
                                    readOnly: true,
                                    dropDownOnReadOnly: true
                                }
                            },
                            {
                                columnKey: "Country",
                                editorType: "text",
                                editorOptions: {
                                    button: "dropdown",
                                    listItems: countries,
                                    readOnly: true,
                                    dropDownOnReadOnly: true
                                }
                            },
                            {
                                columnKey: "BirthDate",
                                editorType: "datepicker",
                                validation: true,
                                editorOptions: { minValue: new Date(1955, 1, 19), maxValue: new Date(), required: true },
                                validatorOptions: { bodyAsParent: false }
                            }
                        ]
                    }
                ]
            });
        });
});