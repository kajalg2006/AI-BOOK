document.addEventListener('DOMContentLoaded', function() {
    // Light/Dark Mode Toggle
    const themeToggleButton = document.getElementById('themeToggle');

    // Check for saved theme preference in localStorage
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Light Mode';
    }

    themeToggleButton.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
});
