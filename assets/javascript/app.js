

// The below function will run as soon as the page loaded.
window.onload = function() {

         // The follwoing array contains the questions, multiple answers, correct answers, photos and info that are related to the game.

		var triviaQuestionsAnswers = [

		    { question: "Cairo is the capital of which country?", 
		      answers: ["Georgia","Haiti", "Iceland", "Egypt"],
		      correctAnswer: "Egypt",

		      info: "Egypt is a country linking northeast Africa with the Middle East dates to the time of the pharaohs." 
		    	  + "Millennia-old monuments sit along the fertile Nile River Valley," 
		     	  + "including Giza\'\s colossal Pyramids and Great Sphinx as well as Luxor\'\s" 
		     	  + "hieroglyph-lined Karnak Temple and Valley of the Kings tombs."
		     	  + "The capital, Cairo, is home to Ottoman landmarks like Muhammad Ali Mosque and the Egyptian Museum,"
		     	  + "a trove of antiquities." , 

		     	img: "assets/images/egypt.jpg" },
 


		 	{ question: "Zagreb is the capital of which country?", 
		 	  answers: ["Croatia", "Costa Rica", "Estonia", "Fiji"], 
		 	  correctAnswer: "Croatia",

		 	  info: "Croatia is an Eastern European country with a long coastline on the Adriatic Sea."
		 	      + " Encompassing more than a thousand islands, it's also crossed by the Dinaric Alps."
		 	      + " Its inland capital, Zagreb, is distinguished by its medieval Gornji Grad (Upper Town) and diverse museums."
		 	      + " The major coastal city Dubrovnik has massive 16th-century walls encircling an Old Town with Gothic and Renaissance buildings.",

		 	  img: "assets/images/Zagreb.jpg" },



		 	{ question: "Tbilisi is the capital of which country?", 
		 	  answers: ["Georgia", "Gabon", "Guatemala", "Indonesia"],
		 	  correctAnswer: "Georgia",

		 	  info: "Georgia is a country at the intersection of Europe and Asia,"
		 	      + " is a former Soviet republic that's home to Caucasus Mountain villages and Black Sea beaches. it's famous for Vardzia,"
		 	      + " a sprawling cave monastery dating to the 12th century, and the ancient wine-growing region Kakheti."
		 	      + " The capital, Tbilisi, is known for the diverse architecture and mazelike, cobblestone streets of its old town.", 

		       img: "assets/images/Georgia.jpg" },

		 	{ question: "Santiago is the capital of which country?", 
		 	  answers: ["Croatia", "Cuba", "Congo", "Chile"], 
		 	  correctAnswer: "Chile",

		 	  info: "Chile is a long, narrow country stretching along South America\'\s western edge, with more than 6,000km of Pacific Ocean coastline."
		 	      + " Santiago, its capital, sits in a valley surrounded by the Andes and Chilean Coast Range mountains."
		 	      + " The city's palm-lined Plaza de Armas contains the neoclassical cathedral and the National History Museum."
		 	      + " The massive Parque Metropolitano offers swimming pools, a botanical garden and zoo.",

		 	  img: "assets/images/Chile.jpg" },    


		 	{ question: "Buenos Aires is the capital of which country?", 
		 	  answers: ["Bermuda", "Bolivia", "Argentina", "Armenia"],
		 	  correctAnswer: "Argentina",

			  info: "Argentina is a massive South American nation with terrain encompassing Andes mountains,"
			      + " glacial lakes and Pampas grassland, the traditional grazing ground of its famed beef cattle."
			      + " The country is famous for tango dance and music. Its big, cosmopolitan capital, Buenos Aires,"
			      + " is centered on the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada,"
			      + " the iconic, balconied presidential palace.",
		        
		        img: "assets/images/Argentina.jpg" },


		 	{ question: "New Delhi is the capital of which country?", 
		 	  answers: ["India","New Guyana", "Kuwait", "Kygyzstan"],
		 	  correctAnswer: "India",

		 	  info: "India is a vast South Asian country with diverse terrain - from Himalayan peaks to Indian Ocean coastline -"
		 	      + " and history reaching back 5 millennia. In the north, Mughal Empire landmarks include Delhi\'\s" 
		 	      + " Red Fort complex and massive Jama Masjid mosque, plus Agra\'\s iconic Taj Mahal mausoleum. Pilgrims bathe in the Ganges in Varanasi,"
		 	      + " and Rishikesh is a yoga centre and base for Himalayan trekking.",

		 	  img: "assets/images/India.jpg" },    


		 	{ question: "Pyongyang is the capital of which country?", 
		 	  answers: ["South Korea","North Korea", "Kazakhstan", "Hungary"],
		 	  correctAnswer: "North Korea",

		 	  info: "North Korea, officially the Democratic People's Republic of Korea,"
		 	      + " is a country in East Asia, in the northern part of the Korean Peninsula."
		 	      + " Pyongyang is both the nation's capital as well as its largest city.",

		 	  img: "assets/images/North-Korea.jpg" },    


		        
		    { question: "Kabul is the capital of which country?", 
		      answers: ["Andorra","Ukraine", "Afganistan", "Azerbaijan"],
		      correctAnswer: "Afganistan",

		      info: "Afghanistan, officially the Islamic Republic of Afghanistan,"
		          + " is a landlocked country located within South Asia and Central Asia."
		          + " It has a population of approximately 32 million, making it the 42nd most populous country in the world",

		      img: "assets/images/Afganistan.jpg" },    




		    { question: "Reykjavik is the capital of which country?", 
		      answers: ["Jamaica","Jordan", "Iceland", "Ireland"],
		      correctAnswer: "Iceland",

		      info: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers,"
		          + " hot springs and lava fields. Massive glaciers are protected in Vantnajokull and Snaefllsjokull national parks."
		          + " Most of the population lives in the capital, Reykjavik, which runs on geothermal power and"
		          + " is home to the National and Saga museums, tracing Iceland\'\s Viking history.",

		      img: "assets/images/Iceland.jpg" },    


		        
		    { question: "Canberra is the capital of which country?", 
		      answers: ["Austria","Angola", "Australia", "Andorra"],
		      correctAnswer: "Australia",

		  	  info: "Australia is a country and continent surrounded by the Indian and Pacific oceans."
		  	      + " Its major cities - Sydney, Brisbane, Melbourne, Perth, Adelaide - are coastal. Its capital, Canberra, is inland."
		  	      + " The country is known for its Sydney Opera House, the Great Barrier Reef, a vast interior desert wilderness called the Outback,"
		  	      + " and unique animal species like kangaroos and duck-billed platypuses.",

		  	  img: "assets/images/Australia.jpg"  }   
		]; // end of the array

		var timer = 0;
		var index = -1;
		var intervalId = "";
		var userAnswer = "";
		var correctAnswers = 0;
		var wrongAnswers = 0;
		var unAnswered = 0;

				/***********************************************************************************************/

                /*              The decrement function decremnts the timers every one second                   */

                /***********************************************************************************************/

		function decrement() { 

			var flash = $("#timeRemaining").text("Time Remaining: " + timer + " seconds");

			timer--;

				// This if statement to make the timer flashing as soon as the timer gets less than 5 seconds.
			    if (timer < 5) {

					flash.fadeOut(250).fadeIn(250);
			    } // end if


			    // Display Time's up when the timer is equal to zero.
				if (timer < 0) { 

					clearInterval(intervalId);

					$("#timeRemaining").text("Time\'\s up.");

					// Increasing the value of unAnswered by one whenever the user does not pick an answer.
					unAnswered++;

					
					// Display the correct answer for the question.
					$("#question").text(" The correct answer is " + triviaQuestionsAnswers[index].correctAnswer + "!!");

					$("ul").empty();

					// Generate a new div with id info inside the unordered list.
					$("ul").append("<div id = \"info\"> </div>");

					//Display info that related to a country in the array.
					$("#info").text(triviaQuestionsAnswers[index].info);

					// Calling questions function after 6 seconds.
					setTimeout(questions, 30000);
				} // end if 
				
		}// end of decrement function


			/***********************************************************************************************/

			/*                        The questions function to run the questions                          */

			/***********************************************************************************************/

		function questions() { console.log(index + " index  at the very top of questions ");

		    // Incresing the index by 1 every time the questions function is called.
	      	index++; console.log(index + " When the index increases before passes if");
            
            // This if statement to check if the array has reached its last element or not.
	        if (index < triviaQuestionsAnswers.length) {

	            // Clearing out an unordered list.
	            $("ul").empty();

	            // Assign a value 0f 10 to timer - 10 here represents 10 seconds.
	      		timer = 30;

	      		// Calling decrement function every one second.
				intervalId =  setInterval(decrement, 1000);
	            
	            // Writing the questions and the multiple answers into HTML/DOM.
	      		$("#question").text("Question " + (index + 1) + ": " + triviaQuestionsAnswers[index].question);
	             

	            // Genterating list items to write the multiple answers inti HTML/DOM
				for (var i = 0; i < 4; i++) { 

					var li  = $("<li>").appendTo("#multipleAnswers");

					$("#multipleAnswers").children().eq(i).text(triviaQuestionsAnswers[index].answers[i]);
					$("li").eq(i).css("border-style", "dotted");
					$("li").eq(i).css("border-width", "1px");
					$("li").eq(i).attr("answerChoice", triviaQuestionsAnswers[index].answers[i]);

				} // end of for loop.

				$("li").on("click", function() {

					userAnswer = $(this).attr("answerChoice");

					if ( userAnswer === triviaQuestionsAnswers[index].correctAnswer) {

						clearInterval(intervalId);

						// Increasing the value of correctAnswers by one every time the user pick a correct choice.
						correctAnswers++;
						
						$("#timeRemaining").html("Correct Answer");
						$("#question").empty();
						$("#question").text("Good Job .. You kenw it!!!");
		
						$("ul").empty();
						$("ul").append("<div id = \"knewIt\"> </div>");
						$("#knewIt").html("<img src=" + triviaQuestionsAnswers[index].img + " width = '233px' height = '220px'/>");
						setTimeout(questions, 10000);
					}// end if

					else { 

						clearInterval(intervalId);

						// Increasing the value of wrongAnswers by one every time the user pick a wrong choice.
						wrongAnswers++;

						$("#timeRemaining").text("Wrong Answer");
						$("#question").text(" The correct answer is " + triviaQuestionsAnswers[index].correctAnswer + "!!");
						$("ul").empty();
						$("ul").append("<div id = \"info\"> </div>");
						$("#info").text(triviaQuestionsAnswers[index].info);
						
						setTimeout(questions, 30000);
					} //end else 

					
				}); // end of on-click function.

			} // End of the out most if statement.

			// The below code executes as soon as the array reach its end.
			else {


				$("#timeRemaining").text("Game Over");
				$("#question").text(" Your Results: ");

				$("ul").empty();

				// The below code dynamically generates three paragraphs.

				// First paragraph to dispaly how many answers the user got right.
				$("<p>").appendTo("#multipleAnswers").text("Correct Answers are " + correctAnswers);

				// Second paragraph to dispaly how many answers the user got wrong.
				$("<p>").appendTo("#multipleAnswers").text("Wrong Answers are " + wrongAnswers);

				// Third paragraph to dispaly how many answers the user skips.
				$("<p>").appendTo("#multipleAnswers").text("Unanswwred Questions are " + unAnswered);

				// Dynamically generates a new button - Try Again button
				var btn = $("<button>");
				btn.attr("id", "start");
				btn.text("Try Again");
				btn.appendTo("#button");

				// This code dynamically removes the photo from the footer.	
				$("#t").remove();

				// The below code rests all of the variables and start the game again as soos as the user hits the Try Again button.
				 $("#start").on("click", function() {

				 	timer = 0;
					index = -1;
					intervalId = "";
					userAnswer = "";
					correctAnswers = 0;
					wrongAnswers = 0;
					unAnswered = 0;

					$("#timeRemaining").empty(); 
					$("#button").empty();
					questions();

					$("#footerImg").html("<img src='assets/images/qestionmark03.png' width = '103px' height = '90px' id = 't'/>");
				 });
				

			} //end else

		} // end of  questions function


  /***********************************************************************************************/		
		$("#start").on("click", function() {

			$("#button").empty(); 
			questions();

			$("#footerImg").html("<img src='assets/images/qestionmark03.png' width = '103px' height = '90px' id = 't'/>");

		}); // end of on-click function 

}// end of on load function