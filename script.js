//your JS code here. If required.
let colorselect = document.getElementById("colorSelect");
let button = document.querySelector('input[type="button"]');

button.addEventListener("click", function() {
  let index = colorselect.selectedIndex;
  colorselect.remove(index);
});