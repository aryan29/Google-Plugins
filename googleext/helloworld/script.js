$(function(){
	$('#name').keyup(function(){
		$('#hi').text('Hello '+$('#name').val())
	})
})