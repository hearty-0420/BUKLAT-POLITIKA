let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let sliderContainer = document.querySelector('.slider-container');

// Show the initial slide
showSlide(slideIndex);

// Function to show a specific slide based on the index
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    // Translate the slider to show the correct slide
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

}

// Function for the "next" button
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Function for the "previous" button
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Event listeners for the arrow buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Automatic slide function
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Start automatic sliding every 3 seconds
setInterval(autoSlide, 3000);

// Countdown Timer Functionality
function startCountdown() {
    const electionDate = new Date("May 12, 2025 00:00:00").getTime(); // Target date for the election
    const countdownElement = document.querySelector('.countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = electionDate - now;

        if (timeRemaining < 0) {
            countdownElement.innerHTML = "Election Day has arrived!";
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the HTML content with calculated values
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // Initial call to set the countdown immediately, then update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

startCountdown(); // Start the countdown
