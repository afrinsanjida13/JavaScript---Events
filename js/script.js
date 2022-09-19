// JavaScript

// Input Events start===================

// onblur- text to uppercase

function myFunction() {

	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
	
}
// onchange - dropdown
function preferedBrowser() {

  prefer = document.forms[0].browsers.value;
  alert("You prefer browsing internet with " + prefer);
}

// onfocus - change the bg color

function myFunction(x) {
  x.style.background = "skyblue";
}

// onsubmit

function confirmInput() {
  fname = document.forms[0].fname.value;
  alert("Hello " + fname + "! You will now be redirected to www.afrinsanjida.com");
}

// Input Events end===================

// Mouse Events Start=====================


// onmousedown

function whichElement(e) {
  var targ;
  if (!e) {
    var e = window.event;
  }
  if (e.target) {
    targ=e.target;
  } else if (e.srcElement) {
    targ=e.srcElement;
  }
  var tname;
  tname = targ.tagName;
  alert("You clicked on a " + tname + " element.");
}

// onmousedown/ onmouseout

function myFunction(e) {
  x = e.clientX;
  y = e.clientY;
  coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}

// onmouseover/ onmouseout

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

// Mouse Events End=====================

// Click Events Start=====================

// onclick

function displayDate() {
  document.getElementById("date").innerHTML = Date();
}

// onclick

function myFunction() {
  document.getElementById("onclick_event").innerHTML = "Hello World";
}

// ondblclick

function myFunction() {
  document.getElementById("dblclick").innerHTML = "Hello World";
}
// Click Events End=====================

// Load Events Start=====================

// onload
function myFunction() {
  alert("Welcome to the JS Events");
}

// onload
function loadImage() {
  alert("Image is loaded");
}

// onerror
function imgError() {
  alert('The image could not be loaded.');
}
// Load Events End=====================