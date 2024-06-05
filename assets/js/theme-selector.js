document.addEventListener('DOMContentLoaded', () => {
    const themes = document.querySelectorAll('input[name="theme-dropdown"]');

    themes.forEach(theme => {
        theme.addEventListener('click', (event) => {
            const value = event.target.value;
            console.log(value);
            localStorage.setItem("theme", value);
        });
    });

    // get theme from localstorage and set on html attribute
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        const html = document.querySelector('html').setAttribute('data-theme', currentTheme);
        console.log('current theme', currentTheme);
    }
});