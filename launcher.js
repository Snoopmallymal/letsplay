function loadgame(gamename) {
    if (gamename == "minecraft") {
        window.open("games/minecraft/index.html", "_top", "", "true");
    }
    else if (gamename == "2048") {
        window.open("games/2048/index.html", "_top", "", "true");
    }
    else if (gamename == "settings") {
        window.open("settings.html", "_top", "", "true");
    }
    else if (gamename == "hextris") {
        window.open("games/hextris/index.html", "_top", "", "true");
    }
    else {
        console.log("invaled request");
        window.alert("Invaled responce");
    }
}