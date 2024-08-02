function printpic2() {
    // Select the div element
    var divToPrint = document.getElementById("pagePrint");
    // Create a canvas element
    var canvas = document.createElement("canvas");

    canvas.width = divToPrint.offsetWidth;

    canvas.height = divToPrint.offsetHeight;

    var ctx = canvas.getContext("2d");

    // Create an image
    var image = new Image();

    // Render the div content onto the canvas
    image.onload = function() {

        ctx.drawImage(image, 0, 0);
        // Open a new window and create a printable document
        var win = window.open("", "_blank");
        win.document.write("<html><head><title>Print Div as Image</title></head><body>");
        win.document.write("<img src='" + canvas.toDataURL("image/png") + "'/>");

        win.document.write("</body></html>");
        // Trigger print
        win.print();

    };


    // Set the image source to the data URL of the canvas
    image.src = "data:image/svg+xml," + encodeURIComponent(new XMLSerializer().serializeToString(divToPrint));
}