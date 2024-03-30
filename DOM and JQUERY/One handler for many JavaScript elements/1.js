// Дані 5абзаців: Дана наступна функція:
// Прив'яжіть цю функцію до всіх 5абзаців.

function func() {
    console.log('message');
}

for (let i = 1; i <= 5; i++) {
    let elem = document.querySelector(`#elem${i}`);
    elem.addEventListener('click', func);
}
