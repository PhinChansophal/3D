// script.js
const slider = document.getElementById('slider');

// Function to pause the animation
function pauseAnimation() {
    slider.style.animationPlayState = 'paused';
}

// Function to resume the animation
function resumeAnimation() {
    slider.style.animationPlayState = 'running';
}

// Add event listeners to pause on mouse over and resume on mouse out
slider.addEventListener('mouseover', pauseAnimation);
slider.addEventListener('mouseout', resumeAnimation);