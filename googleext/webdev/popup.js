$(function(){
	$('#submit').click(function(){
		var str=$('#webpage').val();
		var port=chrome.extension.connect({
			name:"Sample Connection"
		});
		port.postMessage(str);
		port.onMessage.addListener(function(msg){
			console.log("Message Received by Popup.js");
			console.log("Number of time I visited is "+msg);
					$('#counter').append(msg);
		})
	});
});