//confirmation on connection
console.log("main.js is connected");

//4 ) Get an element with the id of game-board and set it to a variable
var gameBoard = document.getElementById('gameBoard');
console.log(gameBoard);



//setting card variables
var cardOne = "Queen";
var cardTwo = "King";
var cardThree = "King";
var cardFour = "Queen";

//setting for loop
for (var i = 0; i < 4; i++){
		var cards = document.createElement("div");
		console.log(cards);
		cards.classList.add("card");
		gameBoard.appendChild(cards);
};



//setting click function

var clickACard = function (){

	if (cardOne == cardTwo || cardThree == cardFour){
	alert("Try again");
	}
	else if (cardOne == cardFour || cardTwo == cardThree){
	alert("You found a match!");
	}
};
