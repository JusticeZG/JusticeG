function rndm() {
    var randomColour = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColour;
    document.getElementById("clrtext").innerHTML = "#" + randomColour;
}