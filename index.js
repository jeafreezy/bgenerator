
var h3= document.querySelector('h3');
var color1=document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body=document.getElementById('gradient');
var button = document.querySelector('button')

function changeBackground(){

   body.style.background= "linear-gradient(to right,"
    + color1.value 
    +"," 
    + color2.value + ")";

    h3.textContent=body.style.background + ';'

}

color1.addEventListener('input',changeBackground)

color2.addEventListener('input',changeBackground)



window.onload = function (){
    changeBackground()
         
         console.log("So curious! You found me here. Tweet me @jeafreezy and mail me: jolaiyaemmanuel@gmail.com. Let\'s work together! ")
}



function randomNumber(){

    var random1=(Math.floor(Math.random()*100))
    var random2=(Math.floor(Math.random()*100))
    var random3=(Math.floor(Math.random()*100))

    var randomColor=body.style.background= `linear-gradient(to right,rgb(${random1},${random2},${random3}),rgb(${random1},${random2},${random3}))`
    h3.textContent=randomColor + ';'
}

button.addEventListener('click',randomNumber)
