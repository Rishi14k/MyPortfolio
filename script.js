document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

   
    menu.classList.toggle('hidden');

  
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

window.addEventListener('scroll', function() {
    const button = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) { // Change 300 to the point where the button should appear
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

// Scroll to top when button is clicked
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});