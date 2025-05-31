document.getElementById("startBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "startRotation" });
});

document.getElementById("stopBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stopRotation" });
});