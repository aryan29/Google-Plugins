console.log("I am running in background");
var map={};
var c=0;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, updatedTab) {
	if(changeInfo.url!==undefined)
	{
		c++;
if(map[changeInfo.url]===undefined)
    map[changeInfo.url]=1;
else
	map[changeInfo.url]++;
    console.log("Changed url"+changeInfo.url+ " "+c+" "+map[changeInfo.url]);

}

});
chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.get(activeInfo.tabId,function(tab){
		c++;
		if(map[tab.url]===undefined)
    map[tab.url]=1;
    else
	map[tab.url]++;
		console.log("Newly Activated"+tab.url+" "+c+" "+map[tab.url]);
		
	});
});
chrome.extension.onConnect.addListener(function(port){
	console.log("I am connected");
	port.onMessage.addListener(function(msg){
		console.log("Message Receieved"+msg);
		port.postMessage(map[msg]);
	})
})
