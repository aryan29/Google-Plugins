var item={
	"id":"selected text",
	"title":"Speak",
	"contexts":["selection"]
};
chrome.contextMenus.create(item);
chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId=='selected text' && clickData.selectionText){
		chrome.tts.speak(clickData.selectionText,{'lang':'en-US'});
	}
})