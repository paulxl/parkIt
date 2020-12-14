/*  Swaps out the words "It" and "You" in the logo when clicked */
var button = document.getElementById("it_you");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);

/* Transforms the hamburg menu icon when clicked */
function transformIcon(x) {
    x.classList.toggle("change");
}
