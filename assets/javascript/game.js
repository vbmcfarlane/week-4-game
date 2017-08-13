$(document).ready(function(){
	

	

	//Global Variables, to be referred to throughout any function.
	var blueNum = 0;
	var greenNum = 0;
	var redNum = 0;
	var yellowNum = 0;
	var scoreNow = 0;
	var scoreResult=0;
	var targetScore = 0;
	var wins = 0;	
	var losses = 0;
	

		
			//This function will provide the score to match, through generating a random number.  It will then populate the HTML with this number.
		 	function getNumber(){  
				targetScore= Math.floor((Math.random() * 102) + 19);
				console.log("targetScore = " + targetScore);
				document.getElementById("targetScore").innerHTML = targetScore;
		 	};
		

		 	function scoreBoard(){  
			
				document.getElementById("wins").innerHTML = "Wins : " + wins;
				document.getElementById("losses").innerHTML = "Losses : " + losses;
				document.getElementById("scoreResult").innerHTML = scoreResult;
		 	};

		 	getNumber(); // Starts the game and assign new traget number
			scoreBoard(); // Update the score board with new values. 	

		// This function sums and assigns a value to the red crystal button.
		$("#redCrystal").on('click', function(){
			$("#redCrystal").fadeToggle(300).fadeToggle(500);
				if (redNum){
								scoreResult = scoreResult + redNum;
							}else{
								redNum = Math.floor((Math.random() * 11) + 1);
								scoreResult = scoreResult + redNum;
							}
						document.getElementById("redCrystal").innerHTML = redNum;
						scoreBoard();	
						checkScores();			
		});

		// This function sums and assigns a value to the blue crystal button.	
		$("#blueCrystal").on('click', function(){
			$("#blueCrystal").fadeToggle(300).fadeToggle(500);
				if (blueNum){
							scoreResult = scoreResult + blueNum;
							
						}else{
							blueNum = Math.floor((Math.random() * 11) + 1);
							scoreResult = scoreResult + blueNum;
						}
						document.getElementById("blueCrystal").innerHTML = blueNum;
						scoreBoard();	
						checkScores();				

		});
		// This function sums assigns a value to the yellow crystal button.	
		$("#yellowCrystal").on('click', function(){	
			$("#yellowCrystal").fadeToggle(300).fadeToggle(500);	
				if (yellowNum){
						scoreResult = scoreResult + yellowNum;
						
					}else{
						yellowNum = Math.floor((Math.random() * 11) + 1);
						scoreResult = scoreResult + yellowNum;
						
					}
				document.getElementById("yellowCrystal").innerHTML = yellowNum;
				scoreBoard();		
				checkScores();	
		});	
		// This function assigns a value to the green crystal button.	
		$("#greenCrystal").on('click', function(){	
			$("#greenCrystal").fadeToggle(300).fadeToggle(500);	
				if (greenNum){
								scoreResult = scoreResult + yellowNum;
								
							}else{
								greenNum = Math.floor((Math.random() * 11) + 1);
								scoreResult = scoreResult + greenNum;
								
							}
				document.getElementById("greenCrystal").innerHTML = greenNum;
				scoreBoard();			
				checkScores();				
		});

		// This function checks the scoreResult against the targetScore to determine win or loss.	
		function checkScores(){
							if (scoreResult > targetScore){
								losses++;
								console.log( targetScore + " <loss> " + scoreResult);
								scoreBoard();
								$("#losses").html('Losses: ' + losses);
								alert("Sorry, You've LOSS!!. ("  + scoreResult + " is over the target " + targetScore +") Try Again")
								resetGame();  
								
							} else  if (scoreResult == targetScore){
								wins++;
								console.log( targetScore + " <win> " + scoreResult)
									$("#wins").html('Wins: ' + wins);
									alert("Well Done, You've WON!!.( " + targetScore + " is equal to " + scoreResult + ") Try Again" )
									resetGame();
							} else {}
		} // closeof function checkScores
		// This function reset the variables except wins and losses for a new game event.
		function resetGame () { 
							blueNum = 0;
						    greenNum = 0;
							redNum = 0;
							yellowNum = 0;
						    scoreResult=0;
							targetScore = 0;
							getNumber(); // Restart the game and assigns new traget number
							scoreBoard(); // Update the score board with new values.
		}// closeof function resetGame
	});
