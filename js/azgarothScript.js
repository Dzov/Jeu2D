// var loose = function() {
//   var lost = true; 
//   sessionStorage.setItem(lost);
// }

window.addEventListener("keydown", function(e) {
  let keyPressed = e.keyCode;
  if (keyPressed == 32) {
    document.getElementById("michelle").classList.add("jump"); 
  }
  document.getElementById('michelle').addEventListener('animationend', function() {
    document.getElementById("michelle").classList.remove('jump');
  });
});