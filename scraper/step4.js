var allfilter = function(){
	try{
		// debugger
    document.getElementsByClassName("tt-input")[0].value="AI"
		document.getElementsByClassName("global-nav-search-button")[0].click()
    // document.getElementsByClassName("nav-search-typeahead__input ember-text-field ember-view")[0].value="AI"
    // document.getElementsByClassName("nav-search-submit icon-search")[0].click()
    
		chrome.runtime.sendMessage({event: 'allfilter'}, function(res){
				});
	}
	catch (err) {
				console.log("result -->", err);
	            chrome.runtime.sendMessage({event: 'namesent'}, function(res){
	            });
	      }
}
allfilter();
