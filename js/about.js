document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    // Set the active link on page load
    let isActiveSet = false;
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
            isActiveSet = true;
        } else {
            link.classList.remove('active');
        }
    });

    // If no active link was set, default to Home
    if (!isActiveSet) {
        navLinks.forEach(link => {
            if (link.getAttribute('href').endsWith('index.html')) {
                link.classList.add('active');
                isActiveSet = true;
            }
        });
    }
});

