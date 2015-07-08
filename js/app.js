
$(document).ready(function(){

	var $guess = $("#userGuess");
	var rightNum = undefined;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start New Game ---*/
  	$(".new").on("click", function(){
  		console.log("button works");
  		newGame();
  	});

  	/*--- Guess Button ---*/
  	$("#guessButton").on("click",function(){
  		var guess = $guess.val();

		if ( guess > 100){
			alert("Choose a number less than 100");
		}
		else if ( guess < 1){
			alert("Choose a number greater than 1");
		}
		else {
			
			//append guess list
			//add guess to guess counter
			//invoke userFeedback

		
		userFeedback(guess);
		}
  	});

  	/*--- New Game Function ---*/

  	function newGame(){
  		//reset guess counter (2 options: replace value; save a var newGuesses with a count ++)
  		//reset list append (remove or empty if there is a container)
  		//Default feedback space (Make your guess)
  		ranNumber();
  	};

  	/*--- Random Number Function ---*/

  	function ranNumber(){

  		var x = Math.floor((Math.random() * 101) + 1);
  		console.log(x);
  		return x;
  	};

  	/*--- User Feedback Function ---*/

  	function userFeedback(guess){
  			//drop guess pass through?
  			//swapped ranNumber(); with rightNum;
  			//var guess = $guess.val(); 
  		var rightNum = ranNumber();

  		//swapped $guess.val() with guess which should be passed through
  		if (guess === rightNum ){
  			alert("You Got It!");
  			//start a new game?
  		}
  		else if (guess - rightNum <= Math.abs(10) ){
  			alert("Very Hot!");
  		}
  		else if (guess - rightNum <= Math.abs(25) ){
  			alert("Warm");
  		}
  		else if (guess - rightNum <= Math.abs(35) ){
  			alert("Cold");
  		}
  		else if (guess - rightNum <= Math.abs(45) ){
  			alert("Very Cold");
  		}
  		else {
  			alert("Ice Cold!");
  		}
  		//appears in div#feedback changin the html
  		//if correct guess, option to start a new game

  	};
//newGame(); 	
});