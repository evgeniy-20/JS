//

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((paragraph, index) => {
    paragraph.setAttribute('data-num', index + 1);
});
