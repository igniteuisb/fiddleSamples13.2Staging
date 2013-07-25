$(function () {
            $("#barcode").igQRCodeBarcode({
                height: "300px",
                width: "100%",
                stretch: 'uniform',
                data: "http://www.infragistics.com/products/jquery/samples"
            });
        });