


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
 //Green Gem
	function addValueG(){
	(score + gameObject.greenGem).push(score)
	return score;
	}
		// // pop score
		// $("#greenGemIcon").on("click",function(){
		// 	$('#score').text('gameObject.greenGem' + score);
		
		// 	console.log(score)
		// })

//Red Gem

	function addValueR(){
	score + gameObject.redGem;
	return score;
	}


		//working function
		$("#redGemIcon").on("click",function(){
			score=(gameObject.redGem + score)
			addValueR(+ score)
			console.log(score)
		})

//Yellow Gem

	function addValueY(){
	score = Math.floor(yellowGem + score);
	return score;
	console.log(score)
	}

		$("#yellowGemIcon").on("click",function(){
			window['yellowGem' + score].append(score)
			console.log(score)
		})


//Blue Gem
	function addValueB(){
	score + gameObject.blueGem;
	return score;
	console.log(score)
	}

		$("#blueGemIcon").on("click",function(){
			(gameObject[3] + score);
			console.log(score)
		})


//Logging for testing
gemValues()
guessNumber()

console.log(guessNum)
console.log(score)

console.log(gameObject.greenGem)
console.log(gameObject.redGem)
console.log(gameObject.yellowGem)
console.log(gameObject.blueGem)