let score = 0

const planet = document.getElementById("planet")
const scoreText = document.getElementById("score")

planet.onclick = function(){

score++

scoreText.innerText = score

}

function downloadGame(){

alert("Download will be available soon 🚀")

}
