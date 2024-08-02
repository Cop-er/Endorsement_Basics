function printpic() {
    document.getElementById("c3").innerHTML = document.getElementById("signature").value
    document.getElementById("c4").innerHTML = document.getElementById("signature1").value
    const options = { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    };
    const dt = new Date().toLocaleDateString('en-US', options);
    document.getElementById("c2").innerHTML = dt;
    document.getElementById("ford").innerHTML = document.getElementById("ford").innerHTML + " " + dt.toUpperCase()
    
    
    
    
    
    var divToPrint = document.getElementById("pagePrint");
    var printWindow = window.open("", "_blank");
    printWindow.document.write ('<html lang="en"><head><title>Printing First Page</title>');
    printWindow.document.write (
      '<link rel="stylesheet" href="style.css">'
    );
    printWindow.document.write ('<style>');
    // printWindow.document.write ('.vertical-text{writing-mode:vertical-rl;text-orientation:upright;transform:rotate(180deg);white-space:nowrap;font-size:16px;font-family:Arial,sans-serif;}');
    printWindow.document.write ('.vt {display:block;}');
    printWindow.document.write ('body {width: 210mm; height: 297mm; margin: 0 auto 0 0; background-color: #ffffff;}');
    printWindow.document.write ('.a4-image {width: 210mm; height: auto; margin-left: 5%;}');
    printWindow.document.write ('.custom-box {width: 250px;height: 100px;}');
    printWindow.document.write (' </style>');
    
    printWindow.document.write ('</head><body>');
    printWindow.document.write (divToPrint.innerHTML);
    printWindow.document.write ('<script src="script.js"></script>');
    printWindow.document.write ('<script>alert("Print 1 copy only !")</script>');
    printWindow.document.write ('<script src="script2.js"></script>');
    printWindow.document.write ('</body></html>');
    printWindow.document.close();
    
    printWindow.onload = function () {
      // printWindow.print();
      }
    }
    
    
    