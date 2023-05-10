function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}


window.onload=function(){
    const terminal = document.getElementById('terminal-input')

    const terminalHander = (e) => {
        if (e.key == 'Enter' && e.target.value) {
            switch (e.target.value) {
                case 'cd projects':
                    window.open('projects.html', '_self');
                    break;
                case 'cd about me':
                    window.open('about.html', '_self');
                    break;
                case 'cd blog':
                    window.open('blog.html', '_self');
                    break;
                case 'cd photography':
                    window.open('photography.html', '_self');
                    break;
                case 'cd home':
                    window.open('index.html', '_self');
                    break;
                case 'cd help':
                    window.open('help.html', '_self');
                    break;
            }
        }
    }
    
    terminal.addEventListener('keypress', terminalHander);
}
