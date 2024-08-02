const options = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  };
  const dt = new Date().toLocaleDateString('en-US', options);
  document.getElementById("c2").innerHTML = dt;
  
const params = new URLSearchParams(window.location.search);
const data = params.get ('groomName');
const data1 = params.get ('brideName');
const data2 = params.get ('dateofregistration');
const data3 = params.get ('regNumber');
const data4 = params.get ('signature');
const data5 = params.get ('signature1');
 
var final = 'Respectfully forwarded to the Office of the Civil Registrar General, PSA, Manila through the Regional Director, Philippine Statistics Authority, Butuan City (via Electronic Endorsement) the herein attached OCRG Copy of the Certificate of Marriage between'
var final = final + " <b>" + data + "</b>"
var final = final + " and <b>" + data1 + "</b>"
var final = final + " registered by this office on <b>" + data2 + "</b>"
var final = final + " under Registry Number <b>" + data3 + "</b>"
var final = final + " for your file and reference. "

document.getElementById("dta").innerHTML = final
document.getElementById("signature").innerHTML = data4
document.getElementById("title").innerHTML = data5

alert ("Produce 3 copies!")
window.onload = function () {
  window.print();
};

window.onfocus = function () {
  setTimeout(function () {
    window.close();
  }, 500);
};

