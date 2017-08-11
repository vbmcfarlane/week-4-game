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
		 	getNumber(); 
			scoreBoard();  	

		// This function assigns a value to the red crystal button.
		$("#redCrystal").on('click', function(){
				if (redNum){
								scoreResult = scoreResult + redNum;
								document.getElementById("redCrystal").innerHTML = redNum;
								document.getElementById("scoreResult").innerHTML = scoreResult;
								
							}else{
								redNum = Math.floor((Math.random() * 11) + 1);
								scoreResult = scoreResult + redNum;
								document.getElementById("scoreResult").innerHTML = scoreResult;
								console.log(" scoreResult -2 :" + scoreResult);
							}
				console.log ("redCrystal value :" + redNum);			
				checkScores();			
		});

		// This function assigns a value to the blue crystal button.	
		$("#blueCrystal").on('click', function(){

				if (blueNum){
							scoreResult = scoreResult + blueNum;
							document.getElementById("blueCrystal").innerHTML = blueNum;
							document.getElementById("scoreResult").innerHTML = scoreResult;
						}else{
							blueNum = Math.floor((Math.random() * 11) + 1);
							scoreResult = scoreResult + blueNum;
							document.getElementById("scoreResult").innerHTML = scoreResult;
							console.log(" scoreResult -2 :" + scoreResult);
						}
				console.log ("blueCrystal value:" + blueNum);		
				checkScores();				

		});
		// This function assigns a value to the yellow crystal button.	
		$("#yellowCrystal").on('click', function(){			
				if (yellowNum){
						scoreResult = scoreResult + yellowNum;
						document.getElementById("yellowCrystal").innerHTML = yellowNum;
						document.getElementById("scoreResult").innerHTML = scoreResult;
					}else{
						yellowNum = Math.floor((Math.random() * 11) + 1);
						
						scoreResult = scoreResult + yellowNum;
						document.getElementById("scoreResult").innerHTML = scoreResult;
						document.getElementById("scoreResult").innerHTML = scoreResult;
					}	
				console.log ("yellowCrystal value :" + yellowNum);
				checkScores();	
		});	
		// This function assigns a value to the green crystal button.	
		$("#greenCrystal").on('click', function(){			
				if (greenNum){
								scoreResult = scoreResult + yellowNum;
								document.getElementById("greenCrystal").innerHTML = greenNum;
								document.getElementById("scoreResult").innerHTML = scoreResult;
							}else{
								greenNum = Math.floor((Math.random() * 11) + 1);
								scoreResult = scoreResult + greenNum;
								document.getElementById("scoreResult").innerHTML = scoreResult;
								document.getElementById("scoreResult").innerHTML = scoreResult;
							}
				console.log ("greenCrystal value :" + greenNum);			
				checkScores();				
		});


		function checkScores(){
							if (scoreResult > targetScore){
								console.log( targetScore + " <loss> " + scoreResult)
								losses++;
								$("#losses").html('Losses: ' + losses);
								resetGame();  
								
							} else  if (scoreResult == targetScore){
								console.log( targetScore + " <win> " + scoreResult)
									wins++;
									$("#wins").html('Wins: ' + wins);
									resetGame();
							} else {}
					

							
				
		} // closeof function checkScores

		function resetGame () { 
							blueNum = 0;
						    greenNum = 0;
							redNum = 0;
							yellowNum = 0;
						    scoreResult=0;
							targetScore = 0;
							getNumber();
							scoreBoard(); 
		}


	});
