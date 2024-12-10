
function showAlert() {
  alert("WHASSSSSSSSUPP!");
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function showModal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var showModalButton = document.getElementById("showModalButton");
  if (showModalButton) {
    showModalButton.addEventListener("click", showModal);
  }
});