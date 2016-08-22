function generatePdf(){
    
    var printdoc = new jsPDF();
    printdoc.fromHTML($("#cv").get(0), 10, 10, {'width':180},    function(dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        // pdf.save('Test.pdf');

        if (navigator.msSaveBlob) {
            var string = printdoc.output('datauristring');
        } else {
            var string = printdoc.output('bloburi');
        }

        $('.previewIFRAME').attr('src', string);
    });
    printdoc.output("dataurlnewwindow"); 
}

