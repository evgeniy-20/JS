// На сторінці є діви. У них є текст. Обійдіть усі діви й обріжте той текст, який у них стоїть так, щоб він став довжиною 10 символів. І додайте три крапки в кінець обрізаного тексту

let divs = document.querySelectorAll('div');

divs.forEach(div => {
    let text = div.textContent;
    if (text.length > 10) {
        div.textContent = text.slice(0, 10) + '...';
    }
});
