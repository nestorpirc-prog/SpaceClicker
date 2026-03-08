let score = 0

const planet = document.getElementById("planet")
const scoreText = document.getElementById("score")

planet.onclick = function(){

score++

scoreText.innerText = score

}

/* Easter egg */

document.addEventListener("keydown",function(e){

if(e.key === "u"){
alert("🚀 Secret unlocked: Cosmic Explorer!")
}

})

function downloadGame(){

alert("Download coming soon 🚀")

}
