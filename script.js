var black = document.getElementById("black")
var white = document.getElementById("white")
var iphoneBlack = document.getElementById("iPhone-preto")
var iphoneWhite = document.getElementById("iPhone-branco")

function onblack(){
    if(iphoneBlack.style.display = "none"){
        iphoneBlack.style.display = "block"
        iphoneWhite.style.display = "none"
    }
}

function onwhite(){
    if(iphoneWhite.style.display = "none"){
        iphoneBlack.style.display = "none"
        iphoneWhite.style.display = "block"
    }
}