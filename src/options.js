let width = document.getElementById('width')
let height = document.getElementById('height')
let autoSubmit = document.getElementById('autoSubmit')
let save = document.getElementById('save')

chrome.storage.local.get(['width', 'height', 'autoSubmit'], function(result) {
  width.value = result.width;
  height.value = result.height;
  autoSubmit.checked = result.autoSubmit;
}); 

save.onclick = function(element) {
  chrome.storage.local.set(
    {
      width: parseInt(width.value),
      height: parseInt(height.value),
      autoSubmit: autoSubmit.checked
    }
  );
};

