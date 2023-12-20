function getSauce(url) {
  let outputString1 = url.slice(0, 1);
  let outputString2 = url.slice(2);
  let newUrl = "";

  if (outputString1 === "r") {
    newUrl = "https://18comic.org/photo/" + outputString2;
  }
  if (outputString1 === "n") {
    newUrl = "https://nhentai.net/g/" + outputString2 + "/";
  }
  if (outputString1 === "w") {
    newUrl =
      "https://www.wnacg.org/photos-index-aid-" + outputString2 + ".html";
  }

  chrome.tabs.create({ url: newUrl });
}

chrome.contextMenus.create({
  type: "normal",
  title: "find the fucking sauce",
  id: "find the fucking sauce",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "find the fucking sauce") {
    getSauce(info.selectionText);
  }
});
