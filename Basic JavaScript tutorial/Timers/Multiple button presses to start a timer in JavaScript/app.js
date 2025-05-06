// Візьміть ваш розв'язок попередньої задачі. Перевірте, що багаторазове натискання на кнопку призводить до прискорення відліку. Виправте цю проблему.

let button = document.querySelector('button');
button.addEventListener('click', function func() {
    let countDown = 100;
    setInterval(() => {
        console.log(countDown--)
    }, 1000);

    this.removeEventListener('click', func);
})
