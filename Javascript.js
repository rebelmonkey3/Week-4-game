


var guessNum= 0;
var wins= 0;
var losses= 0;
var score= 0;

	var gameObject={
		greenGem: 0,
		redGem: 0,
		yellowGem: 0,
		blueGem: 0,
		};

//Generate random number to be guess by user.
function guessNumber(){
	guessNum = Math.floor(Math.random() * (120 -19) + 19);
		return guessNumber
};



// If user wins, add 1 to total wins, reset "guessNumber", reset "gemValues"
function wins(){
	if (guessNum === score)
		wins++

};

function losses(){
	if (score > guessNum)
		losses++
		guessNumber()
		gemsRandom()
		score:0;
};

function gemValues(){
	this.gameObject.greenGem = Math.floor((Math.random() * 12) +1);
	this.gameObject.redGem = Math.floor((Math.random() * 12) +1);
	this.gameObject.yellowGem = Math.floor((Math.random() * 12) +1);
	this.gameObject.blueGem = Math.floor((Math.random() * 12) +1);
		// return this.gameObject.greenGem;
};

function addValue(){
	score + gameObject.greenGem;

	return score;
}

	$("#greenGemIcon").on("click",function(){
	// gameObject.greenGem + score;
	// return score;
	addValue()
	})


gemValues()
guessNumber()

console.log(guessNum)
console.log(score)

console.log(gameObject.greenGem)
console.log(gameObject.redGem)
console.log(gameObject.yellowGem)
console.log(gameObject.blueGem)