chrome.tabs.getSelected(null, getSelectedTab);

var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessenge = (messengeObj)=> {
    chrome.tabs.sendMessenge(tabId, messengeObj)
  };
  document.getElementById("rotate").addEventListener("click", () => {sendMessenge({ action: "ROTATE" }) });
  document.getElementById("reset").addEventListener("click", () => {sendMessenge({ action: "RESET" }) });
}
