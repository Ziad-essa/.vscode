var nav = document.getElementById("on");
var nls = nav.getElementsByClassName("nl");
for (var i = 0; i < nls.length; i++) {
  nls[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
function openNav() {
  document.getElementById("res").style.display = "flex";
  document.getElementById("closebtn").style.display="flex";
  document.getElementById("fin").style.marginTop="24%"
}
function closeNav() {
  document.getElementById("res").style.display = "none";
  document.getElementById("closebtn").style.display="none";
  document.getElementById("fin").style.marginTop="3%";
  
}