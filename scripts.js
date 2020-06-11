/* gallery */
function myFunction() {
    document.getElementById("gallery-1").style.cssText  = "display: flex;";
}

function closeWindow() {
    document.getElementById("gallery-1").style.display = "none";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----1---- */

/* gallery 2 */
function myFunctionTwo() {
    document.getElementById("gallery-2").style.cssText  = "display: flex;";
}

function closeWindowTwo() {
    document.getElementById("gallery-2").style.display = "none";
}

var slideIndex = 1;
showDivsTwo(slideIndex);

function plusDivsTwo(n) {
showDivsTwo(slideIndex += n);
}

function showDivsTwo(n) {
var i;
var x = document.getElementsByClassName("mySlidesTwo");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----2---- */
