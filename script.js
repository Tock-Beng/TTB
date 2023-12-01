// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');

window.onscroll = function () {
    // current scroll position
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        navbar.classList.remove('hidden');
    } else {
        // Scrolling down
        navbar.classList.add('hidden');
    }
    
    // update previous scroll position
    prevScrollPos = currentScrollPos;
};


// JavaScript code for the footer
// Get the email input and the subscribe button
document.addEventListener("DOMContentLoaded", function() { 
    var email = document.getElementById("email"); 
    var subscribe = document.getElementById("subscribe"); 
    // Define the regex for email validation 
    var emailRegex = /^.+@.+/; 
    // Add a click event listener to the subscribe button 
    subscribe.addEventListener("click", function(event) { 
        event.preventDefault(); 
        // Check if the email input matches the regex 
        if (email.value.match(emailRegex)) { 
            // Display a message to the user 
            alert("Thank you for subscribing to our newsletter!"); 
            email.value = ""; 
        } else { 
            // Display a message to the user
            alert("Please enter a valid email address."); 
        } 
    }); 
});

