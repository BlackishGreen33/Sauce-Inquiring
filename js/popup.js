const bntEM = document.getElementById("bnt");
const linkAEM = document.getElementById("linkA");
const linkBEM = document.getElementById("linkB");

bntEM.addEventListener("click", function () {
  let nHentaiEM = document.getElementById("title1").value;
  let wnacgEM = document.getElementById("title2").value;
  let R18comicEM = document.getElementById("title3").value;
  if (nHentaiEM == "" && wnacgEM == "") {
    let newUrl = "https://18comic.org/photo/" + R18comicEM;
    chrome.tabs.create({ url: newUrl });
  }
  if (R18comicEM == "" && wnacgEM == "") {
    let newUrl = "https://nhentai.net/g/" + nHentaiEM + "/";
    chrome.tabs.create({ url: newUrl });
  }
  if (nHentaiEM == "" && R18comicEM == "") {
    let newUrl = "https://www.wnacg.org/photos-index-aid-" + wnacgEM + ".html";
    chrome.tabs.create({ url: newUrl });
  }
});

linkAEM.addEventListener("click", function () {
  alert("学术研究中，梯子是您必要的工具，而该工具请自备。");
});

linkBEM.addEventListener("click", function () {
  alert("低能儿，以为天上会掉鸡腿？");
});
