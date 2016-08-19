function generatePdf(){
    
    var printdoc = new jsPDF();
    printdoc.fromHTML($("#cv").get(0), 10, 10, {'width':180});
    printdoc.output("dataurlnewwindow"); 
}

