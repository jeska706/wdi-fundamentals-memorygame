//name element with the id of game-board and set it to a variable
var gameBoard = document.getElementById('gameBoard');

//declaring the cards/images in an array
var cardNumber = ["Queen", "King", "King", "Queen"];
var image = ["<img src='images/queen-card.png'>", "<img src='images/king-card.png'>", "<img src='images/king-card.png'>", "<img src='images/queen-card.png'>"];

//declaring the cardsInPlay to an empty array
var cardsInPlay = [];

//delacring createBoard function, setting card divs, images, and eventlistener
var createBoard = function(){
for (var i = 0; i < cardNumber.length; i++){
	var cards = document.createElement("div");
	// console.log(cards);
	cards.classList.add("card");
	gameBoard.appendChild(cards);
	cards.setAttribute('data-card', cardNumber[i]);
	cards.addEventListener("click", isTwoCards);
	cards.innerHTML = (image[i]);

	}
};

//Createing isMatch to test if two cards in play are a match.
var isMatch = function () {
	 if (cardsInPlay[0] == cardsInPlay[1]){
		 alert("You have a match!");
	 } else {
		 alert("You don't have a match");
	 }
	//  cards.innerHTML = "";
};

//declaring isTwoCards, accessing cards, cleararray
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
	};

//display the gameBoard
createBoard();
