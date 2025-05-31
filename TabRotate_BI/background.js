let intervalId = null;
let delay = 10000; // tempo entre trocas em milissegundos (10s)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Mensagem recebida:", message);

  if (message.action === "startRotation") {
    if (intervalId) {
      console.log("Rotação já está ativa.");
      return;
    }

    console.log("Iniciando rotação de abas do Power BI...");

    intervalId = setInterval(async () => {
      console.log("Buscando abas do Power BI...");
      chrome.tabs.query({}, (tabs) => {
        const powerBITabs = tabs.filter(tab =>
          tab.url && tab.url.includes("https://app.powerbi.com")
        );

        console.log("Encontradas abas do Power BI:", powerBITabs.length);

        if (powerBITabs.length <= 1) return;

        chrome.windows.getCurrent({populate: true}, (currentWindow) => {
          const visibleTabs = powerBITabs.filter(tab => tab.windowId === currentWindow.id);
          console.log("Abas visíveis do Power BI nesta janela:", visibleTabs.length);

          if (visibleTabs.length <= 1) return;

          const activeIndex = visibleTabs.findIndex(tab => tab.active);
          const nextIndex = (activeIndex + 1) % visibleTabs.length;
          const nextTabId = visibleTabs[nextIndex].id;

          console.log(`Alternando para aba ${nextIndex + 1}/${visibleTabs.length} - ID: ${nextTabId}`);
          chrome.tabs.update(nextTabId, { active: true });
        });
      });
    }, delay);
  }

  if (message.action === "stopRotation") {
    console.log("Parando rotação de abas.");
    clearInterval(intervalId);
    intervalId = null;
  }
});