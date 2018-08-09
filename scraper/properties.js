chrome.browserAction.onClicked.addListener(function(activeTab){
  alert(activeTab+" Click Ok")
  setTimeout(openNextURLInTab, 5000);
});




var openNextURLInTab1 = function(){
  chrome.tabs.getSelected(null, function(tab) {
    var code = 'window.location.reload();';
    console.log(code)
    console.log(tab.url)
    // chrome.tabs.executeScript(tab.id, {code: code});
    // setTimeout(function() {injectTheScript();}, 5000);
  });
}

var openNextURLInTab = function(){
    var url
    chrome.tabs.getSelected(null, function(tab) {
      // var code = 'window.location.reload();';
      // console.log(code)
      url=tab.url
      console.log(url);
      chrome.tabs.update(null, {url: url});
      var code = 'window.location.reload();';
      chrome.tabs.executeScript(tab.id, {code: code});
      // chrome.tabs.executeScript(tab.id, {code: code});
      // setTimeout(function() {injectTheScript();}, 5000);
    });
    setTimeout(function() {injectTheScript();}, 5000); //runing every 10 sec

}

function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        // debugger
        console.log(tabs[0].url);
        chrome.tabs.executeScript(tabs[0].id, {file: "content_scripts.js"}, function(){
          	console.log('content_script execution done');
        });
    });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // alert(message.event);
  if(message.event == 'dataparsed'){
    console.log('content_scripts.js finished');
    console.log('JOB Finshied');
    sendResponse({farewell: 'goodbye'});
  }else if(message.event == 'namesent'){
    console.log('JOB error');
    sendResponse({farewell: 'goodbye'});
    // setTimeout(openNextURLInTab,10000);
  }
  sendResponse({farewell: 'goodbye'});
});
