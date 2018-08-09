var salesclicked = function(){
	try{
		// debugger
		var currencyinfo=document.getElementsByClassName("nav-item__link ember-view")[1].click()
		chrome.runtime.sendMessage({event: 'salesclicked'}, function(res){
				});
	}
	catch (err) {
				console.log("result -->", err);
	            chrome.runtime.sendMessage({event: 'namesent'}, function(res){
	            });
	      }
}
salesclicked();
