// Dark Mode Toggle Script
document.getElementById('toggle-theme').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', targetTheme);
});