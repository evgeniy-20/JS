// На сторінці є діви. У них є текст. Обійдіть усі діви й обріжте той текст, який у них стоїть так, щоб він став довжиною 10 символів. І додайте три крапки в кінець обрізаного тексту

document.querySelector('#truncateText').addEventListener('click', function () {
    let divs = document.querySelectorAll('div');

    divs.forEach(function (div) {
        let originalText = div.textContent;
        if (originalText.length > 10) {
            div.textContent = originalText.slice(0, 10) + '...';
        }
    });
});
