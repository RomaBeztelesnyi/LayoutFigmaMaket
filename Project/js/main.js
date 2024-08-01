const btnDarkMode = document.querySelector(".dark-mode-btn")


// Checking dark mode in OS 

if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// Priority dark Scheme

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}


// if change system setting, change scheme

window
    .matchMedia("(prefer-color-scheme:dark)")
    .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme === 'dark') {
            btnDarkMode.classList.add('dark-mode-btn--active');
            document.body.classList.add('dark');
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove('dark-mode-btn--active');
            document.body.classList.remove('dark');
            localStorage.setItem("darkMode", "light");
        }
})

//Turning on the night mode
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
