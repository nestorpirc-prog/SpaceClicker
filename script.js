let score = 0

const planet = document.getElementById("planet")

const scoreText = document.getElementById("score")

planet.onclick = function(){

score++

scoreText.innerText = score

}

/* EASTER EGG */

document.addEventListener("keydown", function(e){

if(e.key === "s"){

alert("🌌 Secret discovered! Welcome, space explorer!")

}

})

function downloadGame(){

alert("🚀 Download coming soon!")

}
