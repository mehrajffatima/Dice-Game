// for first dice
var randomNumber1= Math.random();
randomNumber1= Math.floor(randomNumber1*6)+1;

var randomDiceImage1= "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage1);


// for second dice
var randomNumber2= Math.random();
randomNumber2= Math.floor(randomNumber2*6)+1;

var randomDiceImage2= "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",randomDiceImage2);


// for declaring the winner
if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML =("Player 1 wins!");
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML =("Player 2 wins!");
}
else {
  document.querySelector("h1").innerHTML =("Draw!");
}
