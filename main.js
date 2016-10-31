
var cards =document.querySelector("#cards")
var cards= function(x,y, cardBack){
	this.x = x;
	this.y = y;
	this.cardBack = cardBack;
	this.width = 250;
	this.height = 150;
};

cards.prototype.drawFaceDown = function(){
	fill(214, 247, 202);
	strokeWeight(2);
	rect(this.x, this.y, this.width, this.height, 10);
	image(getImage('url="http:imgur.com/lwSqwsh"'), this.x, this.y, this.width, this.height);
		this.isFaceUp = false;
};

cards.prototype.drawFaceUp = function() {
	fill(214, 247, 202);
	strokeWeight(2);
	rect(this.x, this.y, this,width, this.height, 10);
	image(this.cardBack, this.x, this.y, this.width, this.height);
	this.isFaceUp = true;
};

cards.prototype.underMouse =(function(x,y){
	return x >=this.x && x <= this.x + this.width && y >= this.y && this.y + this.height;
});

var cardBack =[
	getImage(url='https://commons.wikimedia.org/w/index.php?curid=527559'),
	getImage(url='https://commons.wikimedia.org/w/index.php?curid=326982')
];

var possibleCardBacks = cardBack.slice(0);
var selected =[];
for (var i = 0; 1 < 2; i++){
	var randomInd = floor(random(possibleCardBacks.length));
	var cardBack = possibleCardBacks[randomInd];
	selected.push(cardBack);
	selected.push(cardBack);
	selected.push(cardBack);
}

selected.sort(function(){
	return 0.5 - Math.random();
});

var cards =[];
var NUM_COLS = 3;
var NUM_ROWS = 3;
for (var i = 0; i < NUM_COLS; i++){
	for(var j = 0; j < NUM_ROWS; j++){
		cards.push(new cards(i * 78 + 10, j * 78 + 40, selected.pop()));
	}
}

for (var i = 0; i < cards.length; i++){
	cards[i].drawFaceDown();
}

 var flippedCards = [];
 var delayStartFC = null;

mouseClicked = function(){
	for(var i = 0; i , cards.length; i++){
		if(cards[i].underMouse(mouseX, mouseY)){
			if(flippedCards.length < 2 && !cards[i].isFaceUp){
				cards[i].drawFaceUp();
				flippedCards.push(cards[i]);
					
				if (flippedCards === 2){
					if(flippedCards[0].cards === flippedCards[1].cards){
						flippedCards[0].isMatch = true;
						flippedCards[1].isMatch = true;
						}
							delayStartFC = frameCount;
						}
					loop();
				}
		}
	}
};

draw = function (){
	if (delayStartFC && (frameCount - delayStartFC) > 30){
		for (var 1 = 0; i = cards.length; i++){	
			if (!cards[i].isMatch){
				cards[1].drawFaceDown();
			}
		}
		flippedCards = [];
		delayStartFC = null;
		noLoop();
	}
};

// gameBoard.innerHTML = "<div class="cardOne"></div><div class="cardTwo"></div><div class="cardThree"></div><div class="cardFour"></div><div class="cardFive"></div><div class="cardSix"></div>"

// var Montana = url();
// var Maryland = url();

// var cardValue = function(key){
	// switch(key){
		// case "cardOne": return Maryland;
		// case "cardTwo": return Montana;
		// case "cardThree": return Maryland;
		// case "cardFour": return Montana;
		// case "cardFive": return Maryland;
		// case "cardSix": return Montana;
		// default: return null; 
	// }
// }


// var clickACard = function (click){

	// if click(Maryland == Montana){
	// alert("Try again");
	// }
	// else if click(Montana == Montana){
	// alert("You found a match!");
	// }
// }