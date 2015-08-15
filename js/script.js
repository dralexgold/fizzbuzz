$(document).ready(function() {
	console.log('loaded');
	$('button').click(fbFunction);
});

var fbFunction = function(userInput) {
		
		$('.fizzbuzz').empty();

		console.log('clicked');

		var userInput = prompt("Gimme a number!");

		var userInteger = parseInt(userInput, 10);

		console.log(userInteger); // to test if I did parseInt() correct

		console.log(isNaN(userInteger));

		if (isNaN(userInteger) == true) {
			alert("That is not a number! Please try again.");
		}


		for (var myNum = 1; myNum <= userInteger; myNum++){
				if (myNum % 15 === 0) {
				$('.fizzbuzz').append('FizzBuzz<br />');	
				}
				else if (myNum % 3 === 0) {
  				$('.fizzbuzz').append('Fizz<br />');
			}
				else if (myNum % 5 === 0) {
				$('.fizzbuzz').append('Buzz<br />');
				}
				else {
				$('.fizzbuzz').append(myNum + '<br />');
				}
		}	
	}