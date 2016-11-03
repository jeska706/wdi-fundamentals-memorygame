
//4 ) Got an element with the id of game-board and set it to a variable
var gameBoard = document.getElementById('gameBoard');

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

//declaring variable whose value is an array
var cardNumber = ["Queen", "King", "King", "Queen"];

//declaring a variable whose value is an empty array
var cardsInPlay = [];{
 cardNumber
}
for (var i = 0; i < cardNumber.length; i++){
}

//function that will trigger when event occurs
var clickACard = function (){
cardNumber.addEventListener("data-card", cardNumber[i]);

	if (cardOne == cardTwo || cardThree == cardFour){
	alert("Try again");
	}
	else if (cardOne == cardFour || cardTwo == cardThree){
	alert("You found a match!");
	}
};

//Adding event listener
for (var i = 0; i < cardNumber.length; i++){
gameBoard.addEventListener("click", clickACard);
}
isTwoCards =function () {
	cardsInPlay.push(this.click("data-card"));
		if (cardsInPlay.length ===2){
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
}
