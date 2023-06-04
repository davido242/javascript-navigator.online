  const navigatorStatus = navigator.onLine;
  if(navigatorStatus) {
    document.getElementById("onlineStatus").innerHTML = `Welcome back <span>Online</span> Partner!!`;
    document.getElementById("offlineStatus").style.display = "none";
} else {
    document.getElementById("offlineStatus").innerHTML = `This web Page is <span>Offline</span> Punk!!`;
    document.getElementById("onlineStatus").style.display = "none";    
  }

  let platformOS = navigator.userAgent;
  alert("You are using a " + platformOS);