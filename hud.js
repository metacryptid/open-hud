navigator.mediaDevices
  .getUserMedia({
    video: {
      width: { ideal: window.innerWidth },
      height: { ideal: window.innerHeight },
      facingMode: "environment"
    }
  })
  .then(function(stream) {
    var video = document.getElementById("displayBG");
    video.srcObject = stream;
    writeToConsole("SUBSYS_VIDEO: GetUserMedia Stream captured<br/>");
    video.play();
    writeToConsole("SUBSYS_VIDEO: Starting camera feed<br/>");
  })
  .catch(function(err) {
    writeToConsole("SUBSYS_ERROR_HANDLER: " + err + "<br/>");
  });

var timeElement = document.getElementById("time");

function currentTime() {
  var t = setTimeout(function() {
    currentTime();
  }, 1000);
  var now = new Date();
  timeElement.innerHTML = now;
}

currentTime();

function writeToConsole(message) {
  var elem = document.getElementById("infoScroll");
  elem.innerHTML += message;
  elem.scrollTo(0, elem.scrollHeight);
}

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  writeToConsole("SUBSYS_DOCUMENT_HANDLER: Initiated fullscreen <br />")
}
