//confirmation on connection
console.log("main.js is connected");

//selecting #gameBoard within the DOM
var gameBoard =(querySelectorAll('#gameBoard'));

//setting card variables
var cardOne = "Queen";
var cardTwo = "King";
var cardThree = "King";
var cardFour = "Queen";

// var cardValue = function(key){
// 	switch(key){
// 		case "cardOne": return Queen;
// 		case "cardTwo": return King;
// 		case "cardThree": return King;
// 		case "cardFour": return Queen;
// 		default: return null;
// 	}
// }

//setting click function
var clickACard = function ("click"){

	if click(cardOne == cardTwo || cardThree == cardFour){
	alert("Try again");
	}
	else if click(cardOne == cardFour || cardTwo == cardThree){
	alert("You found a match!");
	}

  }
}
