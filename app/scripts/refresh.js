document.onkeydown = gombLenyomas;
document.onkeypress = gombLenyomas;
document.onkeyup = gombLenyomas;

var megynyomva = false;

function gombLenyomas(e) {
  e = e || window.event;
  if (megynyomva) return;

  if (e.keyCode == 116) {
    // f5
    window.location.reload();
    megynyomva = true;
  }
}
