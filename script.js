// // Get the burger-icon element
// var burgerIcon = document.querySelector(".burger-icon");

// // Get the menu-links element
// var menuLinks = document.querySelector(".menu-links");

// // Define the toggleMenu function
// function toggleMenu() {
//   // Toggle the open class name on the menu-links element
//   menuLinks.classList.toggle("open");
// }


// const burger = document.querySelector(".burger-nav")
// const navMenu = document.querySelector(".nav-menu")

// burger.addEventListener("click", () => {
//     burger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })



// JavaScript to handle the scroll behavior
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        navbar.classList.remove('hidden');
    } else {
        // Scrolling down
        navbar.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
};





// JavaScript code for the footer
// Get the email input and the subscribe button
// var email = document.getElementById("email");
// var subscribe = document.getElementById("subscribe");

// // Add a click event listener to the subscribe button
// subscribe.addEventListener("click", function() {
// // Check if the email input is not empty
// if (email.value) {
//     // Display a message to the user
//     alert("Thank you for subscribing to our newsletter!");
//     // Clear the email input
//     email.value = "";
// } else {
//     // Display a message to the user
//     alert("Please enter a valid email address.");
// }
// });


document.addEventListener("DOMContentLoaded", function() {
    var email = document.getElementById("email");
    var subscribe = document.getElementById("subscribe");

    subscribe.addEventListener("click", function(event) {
        event.preventDefault();

        if (email.value) {
            alert("Thank you for subscribing to our newsletter!");
            email.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
