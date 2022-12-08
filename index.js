const bntEM = document.getElementById('bnt');

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