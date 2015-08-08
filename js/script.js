$(document).ready(function() {
	console.log('loaded');
	$('button').click(function(){
		console.log('clicked');
		for (var myNum = 1; myNum < 101; myNum++){
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
	});
});