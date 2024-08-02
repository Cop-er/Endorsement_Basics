function savetext() {
    const username = document.getElementById("groomName").value;
    const password = document.getElementById("brideName").value;
    const dor = document.getElementById("dateofregistration").value;
    const rg = document.getElementById("regNumber").value;
    const sign = document.getElementById("signature").value;

    if (username === "" || password === "" || dor === "" || rg === "" || sign === "") {
      return; 
    }
    

    const textToSave =
      "Groom Name: " +
      username +
      "\nBride Name: " +
      password +
      "\nDate of Registration: " +
      dor +
      "\nRegistry Number: " +
      rg +
      "\nSigned By: " +
      sign;

    const blob = new Blob([textToSave], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = username + " & " + password + ".txt";
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);

    const dt = new Date().getFullYear();
    document.getElementById("regNumber").value = dt + " - ";
}

function cleartext() {
    const dt = new Date().getFullYear();
    document.getElementById("dateofregistration").value = dt + " - ";
    document.getElementById("groomName").value = "";
    document.getElementById("brideName").value = "";
    document.getElementById("regNumber").value = "";
    document.getElementById("signature").value = "";
    document.getElementById("note").innerHTML = "";
}

function handleFileInputChange(event, imageNumber) {
  const file = event.target.files[0];
  const selectedImageId = `selectedImage${imageNumber}`;

  if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      document.getElementById(selectedImageId).src = event.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    document.getElementById(selectedImageId).src = "";
  }
  if (imageNumber == 1) {
  page1()
  document.getElementById("note").innerHTML = "This is Page 1";

} else {
  page2()
  document.getElementById("note").innerHTML = "This is Page 2";

}
}

// Add event listeners to file inputs
document.getElementById('formFile1').addEventListener('change', function(event) {
  handleFileInputChange(event, 1);
});

document.getElementById('formFile2').addEventListener('change', function(event) {
  handleFileInputChange(event, 2);
});


function page1() {
  document.querySelector(".page2").style.display = "none";
  document.querySelector(".page1").style.display = "block";
  document.getElementById("note").innerHTML = "This is Page 1";

}

function page2() {
  document.querySelector(".page1").style.display = "none";
  document.querySelector(".page2").style.display = "block";
  document.getElementById("note").innerHTML = "This is Page 2";

}

function printpic(x) {
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

if (x == 1){
  printWindow.document.write ('.vtn {display:block;}');
}else (
  printWindow.document.write ('.vtn {display:none;}')
  );


printWindow.document.write ('body {width: 210mm; height: 297mm; margin: 0 auto 0 0; background-color: #ffffff;}');
printWindow.document.write ('.a4-image {width: 210mm; height: auto; margin-left: 5%;}');
// printWindow.document.write ('#ford {margin-left: 3%;}');
printWindow.document.write ('.custom-box {width: 250px;height: 100px; top: 50%; left: 50%;}');
printWindow.document.write (' </style>');

printWindow.document.write ('</head><body>');
printWindow.document.write (divToPrint.innerHTML);
printWindow.document.write ('<script src="script.js"></script>');

if (x == 1){
printWindow.document.write ('<script>alert("Print 1 copy only !")</script>');
}else (
printWindow.document.write ('<script>alert("Print 2 copies !")</script>')
);
printWindow.document.write ('<script src="script2.js"></script>');
// printWindow.document.write ('<script src="script7.js"></script>');
printWindow.document.write ('</body></html>');
printWindow.document.close();

printWindow.onload = function () {
  // printWindow.print();
  }
}


