function toggleMenu() {
    var menu = document.getElementById("main-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Greeting based on the time of day
    const today = new Date();
    const hour = today.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Form submission tracking
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // You can send the form data to your backend or analytics platform for tracking
        console.log("Form submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear the form after submission
        contactForm.reset();
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
