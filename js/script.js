function sectiunea1()
{
    data();
    URL_function();
    browser_version();
    getLocation();
    getPlatform();
}

function sectiunea2()
{
    i = 0;
    while(i<8)
    {
        extragereRandom();
        i++;
    }
}

function data()
{
    d = new Date();
    document.getElementById("data").innerHTML = d + "<br>";
}
function URL_function()
{
    url = window.location.href;
    
    document.getElementById("url").innerHTML = url + "<br>";
}
function browser_version()
{
    browser = navigator.appName;
    version = navigator.appVersion;
    document.getElementById("browser").innerHTML =  browser + "     "+ version + "<br>";
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      document.getElementById("locatie").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    document.getElementById("locatie").innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }

  function getPlatform()
  {
      document.getElementById("os").innerHTML = navigator.platform;
  }

  function extragereRandom()
  {
        var temp = Math.floor(0x10 * Math.random()+10).toString(16);
        document.getElementById("extragere").innerHTML = ('00'+temp).slice(-2);
}
