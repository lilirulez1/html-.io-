document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("html-canvas");
  var circles = [];
  var radius = 50;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var context = canvas.getContext("2d");
}, false);

var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
