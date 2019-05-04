var item={
	"id":"selected text",
	"title":"Speak",
	"contexts":["selection"]
};
	/*var rate;
	chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
		if(request.todo=="changerate")
		{
			rate=request.rate;
			alert(rate);

		}
	});*/
	var rate;
chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(msg) {
        console.log("message recieved " + msg);
        rate=msg;
    });
});
chrome.contextMenus.create(item);
chrome.contextMenus.onClicked.addListener(function(clickData){
	//alert(rate);
	console.log("When you are trying rate is "+rate);
	if(clickData.menuItemId=='selected text' && clickData.selectionText){
		chrome.tts.speak(clickData.selectionText,{'lang':'en-US','rate':parseFloat(rate)});
	}
})