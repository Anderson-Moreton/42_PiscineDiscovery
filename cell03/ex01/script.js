// Select the balloon element
const bgBalloon = document.querySelector('.balloonRed');

// Array of colors to change
const colors = ['#065314ff','#143cf1ff', '#f52d00ff',]
let indexColor = 0;

// Function to change balloon color
function changeBalloonColor() {
    bgBalloon.style.backgroundColor = colors[indexColor]; // Set new color
    indexColor = (indexColor + 1) % colors.length; // Cycle through colors

}

// Function decrease color when mouse leaves the balloon
function decreaseBalloonColor() {
    indexColor = (indexColor - 1 + colors.length) % colors.length;
    bgBalloon.style.backgroundColor = colors[indexColor]; // Set new color
}

// Function to handle balloon explosion
function explodeBalloon() { // Increase size of the balloon on each click
    bgBalloon.style.height = (bgBalloon.offsetHeight + 10) + 'px'; // Increase height
    bgBalloon.style.width = (bgBalloon.offsetWidth + 10) + 'px'; // Increase width
    if (bgBalloon.offsetHeight >= 420) { // Check for explosion condition
        alert("💥 The balloon exploded! 💥");   
    } 
}

// Event listener for button click
bgBalloon.addEventListener('click', () => { // On balloon click
    changeBalloonColor(); // Change color on each click
    explodeBalloon(); // Increase size and check for explosion
});

// The size of the balloon lost 5px when the mouse leaves the balloon
bgBalloon.addEventListener('mouseleave', () => {
    bgBalloon.style.height = (bgBalloon.offsetHeight - 5) + 'px'; // Decrease height
    bgBalloon.style.width = (bgBalloon.offsetWidth - 5) + 'px'; // Decrease width
    decreaseBalloonColor(); // Decrease color on mouse leave

    if (bgBalloon.offsetHeight < 200) { // Minimum size limit
        bgBalloon.style.height = '200px'; // Set minimum height
        bgBalloon.style.width = '200px'; // Set minimum width
        bgBalloon.style.backgroundColor = '#f52d00ff'; // Reset color
    }
});










