// For the first Dice

var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);

var randomDiceNumber = "dice" + randomNumber1 + ".png"; // For dice image from 1 to 6.

var randomImageSource = "images/" + randomDiceNumber;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// For the Second Dice
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);

var randomDiceNumber2 = "images/dice" + randomNumber2 + ".png";


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceNumber2);

// For the Winner Anouncement

if(randomNumber1 > randomNumber2){
    var headingWinner = document.querySelector("h1").innerText = "🥇Winner - Prince";
} else if(randomNumber2> randomNumber1){
    var headingWinner = document.querySelector("h1").innerText = "🎁Winner - You";
} else{
    document.querySelector("h1").innerText = "Draw!🎃"
}

