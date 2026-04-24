//   navbar function 
// JavaScript Interactions

// Menu toggle
const menuIcon = document.getElementById('menuIcon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

// Scroll effect for header
window.addEventListener('scroll', function() {
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');

    const header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});


// Select the button
const alertBtn = document.getElementById('alertBtn');

// Add click event
alertBtn.addEventListener('click', function() {
    alert("Button clicked successfully!");
});