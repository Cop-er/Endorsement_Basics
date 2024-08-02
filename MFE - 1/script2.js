// Get the draggable element
var draggable = document.getElementById('draggable');

// Initialize variables to store cursor position
var offsetX, offsetY;

// Define how much lower you want the draggable element to start
var startOffsetY = -600; // Adjust this value as needed

// Function to handle when mouse button is pressed down on draggable element
function dragStart(event) {
  // Calculate the offset between the mouse pointer and the top-left corner of the draggable element
  offsetX = event.offsetX;
  offsetY = event.offsetY + startOffsetY; // Adding the offset to start lower

  // Add event listeners for mousemove and mouseup events
  document.addEventListener('mousemove', dragMove);
  document.addEventListener('mouseup', dragEnd);
}

// Function to handle dragging movement
function dragMove(event) {
  // Calculate the new position of the draggable element
  var posX = event.clientX - offsetX;
  var posY = event.clientY - offsetY;

  // Set the new position of the draggable element
  draggable.style.left = posX + 'px';
  draggable.style.top = posY + 'px';
}

// Function to handle when mouse button is released
function dragEnd() {
  // Remove event listeners for mousemove and mouseup events
  document.removeEventListener('mousemove', dragMove);
  document.removeEventListener('mouseup', dragEnd);
}

// Add event listener for mousedown event on the draggable element
draggable.addEventListener('mousedown', dragStart);
