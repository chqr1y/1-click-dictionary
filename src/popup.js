let mainContainer = document.getElementById("mainContainer");
let word = document.getElementById("word");
let searchWord = document.getElementById("searchWord");
let iframeContainer = document.getElementById("iframeContainer");
let width;
let height;

chrome.storage.local.get(['width', 'height'], function(result) {
  width = result.width;
  height = result.height;
  mainContainer.style.width = width + "px";
  mainContainer.style.height = height + "px";
}); 

searchWord.onclick = function(element) {
  iframeContainer.innerHTML = "";
  let iframe = document.createElement('iframe');
  iframe.width = width;
  iframe.height = height;
  iframe.src = 'https://dictionary.cambridge.org/search/english/direct/?q=' + word.value;
  iframeContainer.appendChild(iframe);
};

chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  console.log(selection);
  if (selection == null || selection[0].trim() === "") {
    word.value = "";
  } else {
    word.value = selection[0];
    chrome.storage.local.get(['autoSubmit'], function(result) {
      if (result.autoSubmit === true) {
        searchWord.click();
      }
    });
  }
});

