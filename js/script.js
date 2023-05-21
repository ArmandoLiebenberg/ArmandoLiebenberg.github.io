
// Hamburger menu for mobile screens
// Just changes the display type of our container
function mobile_menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

// Store the user's light/dark mode preference for navigation between screens
// and for later visits to the site
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

// switch theme type and change toggle image
function toggle_theme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme;
    if (currentTheme == "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("free-toggle").src="images/light_mode.png";
        targetTheme = "dark";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("free-toggle").src="images/dark_mode.png";
        targetTheme = "light";
    } 

    localStorage.setItem('theme', targetTheme);
}

// On load of the website, wait for enter key to be pressed
window.onload=function(){
    const terminal = document.getElementById('terminal-input')

    // read input from the terminal box
    const terminalHander = (e) => {
        if (e.key == 'Enter' && e.target.value) {
            switch (e.target.value) {
                case 'cd projects':
                    window.open('projects.html', '_self');
                    break;
                case 'cd about':
                case 'cd about me':
                    window.open('about.html', '_self');
                    break;
                case 'cd blog':
                    window.open('blog.html', '_self');
                    break;
                case 'cd photo':
                case 'cd photography':
                    window.open('photography.html', '_self');
                    break;
                case 'cd home':
                    window.open('index.html', '_self');
                    break;
                case 'Help':
                case 'help':
                case 'cd help':
                    window.open('help.html', '_self');
                    break;
                case 'light':
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.getElementById("free-toggle").src="images/dark_mode.png";
                    break;
                case 'dark':
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.getElementById("free-toggle").src="images/light_mode.png";
                    break;
                case 'Github':
                case 'github':
                    window.open('https://github.com/ArmandoLiebenberg');
                    break;
                case 'Youtube':
                case 'youtube':
                    window.open('https://www.youtube.com/@ArmandosGraphics');
                    break;
                case 'Twitter':
                case 'twitter':
                    window.open('https://twitter.com/ArmandoLiebs');
                    break;
                case 'email':
                    window.location.href = "mailto:armandoliebenberg@gmail.com?subject=Enquiry From Liebenberg.Dev";
                    break;
            }
            terminal.value = '';
        }
    }
    terminal.addEventListener('keypress', terminalHander);
}
