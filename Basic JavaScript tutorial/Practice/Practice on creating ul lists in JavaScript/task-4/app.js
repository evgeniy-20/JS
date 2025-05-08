// Модифікуйте попереднє завдання так, щоб повторне натискання на li не призводило до додавання другого '!'.

let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem
    li.addEventListener('click', function () {
        if (!li.textContent.endsWith('!')) {
            li.textContent += '!';
        }
    })
    parent.append(li);
}
