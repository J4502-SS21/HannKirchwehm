"use strict";

var menuNav = document.getElementById('menu_nav');

var menuTrigger = document.getElementById('menu_triggger');

function menuToggle(){
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "flex";
  }
  console.log("The menu has been toggled!")
}

menuTriger.onclick = menuToggle;

window.onresize = function() {
if (window.innerwidth>= 600) {
  menuNav.removeAttribute("style");
  } ;
}
