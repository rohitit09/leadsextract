var advancedclicked = function(){
	try{
		// debugger
		var currencyinfo=document.getElementsByClassName("global-nav-dropdown-link")[1].click()//leads
		// var currencyinfo=document.getElementsByClassName("global-nav-dropdown-link")[2].click()//accounts
		chrome.runtime.sendMessage({event: 'advancedclicked'}, function(res){
				});
	}
	catch (err) {
				console.log("result -->", err);
	            chrome.runtime.sendMessage({event: 'namesent'}, function(res){
	            });
	      }
}
advancedclicked();
