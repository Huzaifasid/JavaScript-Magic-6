function hClr() {
    var color = document.getElementById("Div1");
    var cclr = color.getElementsByTagName("h1");

    for (var i = 0; i < cclr.length; i++) {
        var userColor = prompt("Enter color " + (i + 1));
        cclr[i].style.color = userColor;
    }
}
function hbClr() {
    var bcolor = document.getElementById("Div1");
    var userBColor = prompt("Enter Background Color");
    bcolor.style.backgroundColor = userBColor;
}
function bigImage() {
    var img = document.getElementById("Images");
    img.className = "Myimgbig";
}
function smallImage() {
    var img = document.getElementById("Images");
    img.className = "MyimgSmall";
}
function showImage() {
    var img = document.getElementById("Images");
    img.className = "MyimgShow";
}
function hideImage() {
    var img = document.getElementById("Images");
    img.className = "MyimgHidden";
}
function bulbOff(e) {
    e.src = "images/bulb-off.png"

}
function bulbOnn(e) {
    e.src = "./images/bulb on.png"

}

function paraColor() {
    var para = document.getElementById("paragraph");
    var paraclr = para.getElementsByTagName("p");
    for (i = 0; i < paraclr.length; i++) {
        var usercolor = prompt("Enter paragraph Color " + (i + 1));
        paraclr[i].style.color = usercolor;
    }
}

function parabClr() {
    var bcolor = document.getElementById("paragraph");
    var userBColor = prompt("Enter Background Color");
    bcolor.style.backgroundColor = userBColor;
}
function secondparaColor() {
    var parasec = document.getElementById("secondparagraph");
    var parasecclr = parasec.getElementsByTagName("p");
    var userseccolor = prompt("Enter first para Color ");
    var userseccolor2 = prompt("Enter second para Color ");
    parasecclr[0].style.color = userseccolor;
    parasecclr[3].style.color = userseccolor2;
}
function secondparabClr() {
    var secbcolor = document.getElementById("secondparagraph");
    var usersecBColor = prompt("Enter Background Color");
    secbcolor.style.backgroundColor = usersecBColor;
}