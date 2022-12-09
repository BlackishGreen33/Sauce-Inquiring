const bntEM = document.getElementById('bnt');
const linkAEM = document.getElementById('linkA');
const linkBEM = document.getElementById('linkB');

bntEM.addEventListener('click', function () {
    let nHentaiEM = document.getElementById('title1').value;
    let wnacgEM = document.getElementById('title2').value;
    if (nHentaiEM == '') {
        location.href = 'https://www.wnacg.org/photos-index-aid-' + wnacgEM + '.html';
    }
    if (wnacgEM == '') {
        location.href = 'https://nhentai.net/g/' + nHentaiEM + '/';
    }
});

linkAEM.addEventListener('click', function () {
    alert('学术研究中，梯子是您必要的工具，而该工具请自备。');
});

linkBEM.addEventListener('click', function () {
    alert('低能儿，以为天上会掉鸡腿？');
});