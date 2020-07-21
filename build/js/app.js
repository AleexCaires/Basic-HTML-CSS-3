"use strict";

var viewport = {
  width: window.innerWidth,
  height: window.innerHeight
};
window.addEventListener("resize", function () {
  viewport.width = window.innerWidth;
  viewport.height = window.innerHeight; //console.log(viewport);
});
document.addEventListener('DOMContentLoaded', function (event) {//Initialize you modules here...
});