let score = 0

const planet = document.getElementById("planet")
const scoreText = document.getElementById("score")

planet.onclick = function(){

score++

scoreText.innerText = score

}

/* easter egg */

document.addEventListener("keydown",function(e){

if(e.key === "g"){

alert("🌌 Secret discovered! Galactic explorer unlocked!")

}

})

function downloadGame(){

alert("🚀 Download coming soon!")

}
