import "./components/project-display-mini.js"
import "./components/nav-component.js"

//Get the button:
var mybutton;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function init()
{
    mybutton = document.getElementById("top-button");
    mybutton.onclick = topFunction;
}

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


// Initialize everything when the page finishes loading
window.onload = init;