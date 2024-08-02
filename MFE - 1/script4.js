function printpic2() {
    var divToPrint = document.getElementById("pagePrint2");
    var printWindow = window.open("", "_blank");
    printWindow.document.write ('<html lang="en"><head><title>Printing Second Page</title>');
    printWindow.document.write (
      '<link rel="stylesheet" href="style.css">'
    );
    printWindow.document.write ('<style>');
    printWindow.document.write ('body {width: 210mm; height: 297mm; margin: 0 auto 0 0; background-color: #ffffff;}');
    printWindow.document.write ('.a4-image {width: 210mm; height: auto;}');
    printWindow.document.write ('.custom-box {width: 250px;height: 100px;}');
    printWindow.document.write (' </style>');
    printWindow.document.write ('</head><body>');
    printWindow.document.write (divToPrint.innerHTML);
    printWindow.document.write ('<script src="script.js"></script>');
    printWindow.document.write ('<script>alert("Print 3 CMC copies!")</script>');
    printWindow.document.write ('<script src="script2.js"></script>');
    printWindow.document.write ('</body></html>');
    printWindow.document.close();
    
    printWindow.onload = function () {
      printWindow.print();
      printWindow.close();
    
    }
    
    
    }
    