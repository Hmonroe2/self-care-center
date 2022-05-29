
var recieveMessageButton = document.querySelector(".recieve-button1")
var radioAffirmButton = document.querySelector("#affirmationButton")
var radioMantraButton = document.querySelector("#mantraButton")
var meditationPic = document.querySelector(".meditate-pic1")
var mantraText = document.querySelector(".mantrasText")
var yogaguy = document.querySelector(".yoga-Guy")



radioAffirmButton.addEventListener("click", showAffirm)
radioMantraButton.addEventListener("click", showMantra)


function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

function showAffirm(){
    recieveMessageButton.addEventListener("click", showAffirm)
    mantraText.innerHTML = (getRandomItemFromArray(affirmations))
    hide()
    console.log("i am also working")
}

function showMantra(){
  recieveMessageButton.addEventListener("click", showMantra)
  mantraText.innerHTML = (getRandomItemFromArray(mantras))
console.log("im working")
}

function hide(){
  // yogaguy.classList.add("hidden")
}
