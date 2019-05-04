$(function(){
	var rate=$('#rate').val();
	$('#rate').on("change paste keyup",function(){
		rate=$(this).val();
	});
$('#submit').click(function(){

	//chrome.extension.sendMessage({todo:"changerate",rate:rate},function(){
	//});
	var port = chrome.extension.connect({
    name: "Sample Communication"
});
     port.postMessage(rate);
});
});