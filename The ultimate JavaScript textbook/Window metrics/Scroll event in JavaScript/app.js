// При прокручуванні сторінки до кінця, виведіть повідомлення про це.

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('Ви прокруили сторінку до кінця')
    }
})
