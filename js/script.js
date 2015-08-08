$(document).ready(function() {
	console.log('loaded');
	$('button').click(function(){
		console.log('clicked');
		$('body').append("text");
	});
});