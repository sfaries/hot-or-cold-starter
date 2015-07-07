
$(document).ready(function(){

	var $guess = $("#userGuess");


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
  		console.log("new game button works!");
  		newGame();
  	});

  	/*--- Guess Button ---*/
  	$("#guessButton").on("click",function(){
		if ( $guess.val() > 100){
			alert("Choose a number less than 100");
		}
		else if ( $guess.val() < 1){
			alert("Choose a number greater than 1");
		}
		else {
			$guess.val();
			//append guess list
			//add guess to guess counter
			//invoke userFeedback
		}
		userFeedback();
  	});

  	/*--- New Game Function ---*/

  	function newGame(){
  		//reset guess counter
  		//reset list append
  		//Default feedback space (Make your guess)
  		ranNumber();
  	};

  	/*--- Random Number Function ---*/

  	function ranNumber(){

  		var x = Math.floor((Math.random() * 100) + 1);
  		return x
  		//invoked by new game
  	};

  	/*--- User Feedback Function ---*/

  	function userFeedback(){

  		var y = ranNumber();

  		if ($guess.val() === y ){
  			alert("You Got It!");
  			//start a new game?
  		}
  		else if ($guess.val()  === ranNumber() ){
  			alert("");
  		}
  		else if ($guess.val() === ranNumber() ){
  			alert("");
  		}
  		else if ($guess.val() === ranNumber() ){
  			alert("");
  		}
  		else if ($guess.val() === ranNumber() ){
  			alert("");
  		}
  		else {
  			alert("far away!");
  		}
  		//else if conditional
  		//appears in div#feedback changin the html
  		//if correct guess, option to start a new game

  	};
 ranNumber(); 	
});