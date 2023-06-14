function login() {
    
    let truepass = "games"
    let permauth = localStorage.getItem("auth");
    let tempauth = sessionStorage.getItem("auth")
    if (tempauth == true) {
        window.open("launcher.html", "_top", "", "true");
    }
    else if (permauth == true) {
        window.open("launcher.html", "_top", "", "true");
    }
    else {
        let entpasss = window.prompt("Enter password")
        if  (entpasss == truepass) {
            sessionStorage.setItem("auth", true);
            window.open("launcher.html", "_top", "", "true");
        }
    }

} 