function launchGame(game) {
    if (game=="minecraft"){
      window.open("Games/Minecraft/g.html","_top","","true");
    }
      else if (game=="2048") {
        window.open("Games/2048/index.html","_top","","true");
    }
      else if (game=="devpage") {
      window.open("dev.html","_top","","true");
    }
      else if (game=="null") {
        window.alert("Well What Did you Think It Was Going To Do");
    }
      else if (game=="hextris") {
        window.open("Games/hextris/index.html","_top","","true");
    }
      else if (game=="1v1lol") {
        window.open("Games/1v1lol/index.html","_top","","true");
    }
      else {
        window.open("/index.html", "_top", "", "true");
    }
  }
  
  function login() {
    let password= window.prompt("Enter Password");
    if (password=="iwantgames") {
      sessionStorage.setItem("auth", "true");
      window.open("launcher.html", "_top", "", "true");
      
  }
    else {
      window.open("/index.html", "_top", "", "true");
    }
  }
  
  function exit() {
    let x=sessionStorage.getItem ("auth");
    window.open("https://schoology.pointschools.net/", "_self", "", "true");
  }
  
  function testauth() {
    let x=sessionStorage.getItem ("auth");
    window.alert(x);
  }
  
  function close() {
    window.close();
    window.alert("NEED_TO_OPEN");
  }
  
  function checkauth() {
    let auth=sessionStorage.getItem ("auth");
    let longauth=localStorage.getItem("longauth");
    if (auth=="true") {
    }
    else if (longauth=="true") {
    }
    else {
      window.open("/index.html", "_top", "", "true");
    }
  }
  
  function LongAuth() {
    let action=window.prompt("enter set or remove");
      if (action=="remove") {
        localStorage.removeItem("longauth");
      }
      else if (action=="set") {
        let longauthkey=window.prompt ("enter admin password");
        if (longauthkey=="redpeep") {
          localStorage.setItem("longauth", "true");
        }
        else {
         localStorage.clear();
         sessionStorage.clear();
         location.reload();
        }
        
      }
      else {
        window.alert("invalid action");
      }
  }
  
  function mainLoad() {
    let longauth=localStorage.getItem("longauth");
    if (longauth=="true") {
      window.open("launcher.html", "_top", "", "true");
    }
  }
  
  function checkLongauth() {
    let longauth=localStorage.getItem("longauth");
    window.alert(longauth);
  }
  function theend() {
    localStorage.clear();
    sessionStorage.clear();
    window.alert("done");
    window.open("index.html", "_top", "", "true");
  }
  