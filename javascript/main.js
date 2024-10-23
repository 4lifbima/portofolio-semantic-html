
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.site-header nav ul');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('show'); // Toggle class "show" to show/hide the menu
    });

