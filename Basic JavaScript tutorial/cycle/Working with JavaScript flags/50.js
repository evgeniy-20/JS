// Даний масив:  Перевірте, що в цьому масиві є елемент 'c'. Якщо є – виведіть '+++', а якщо ні – виведіть '---'.


let arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
    if (elem === 'c') {
        console.log('+++');
        break
    } else {
        console.log('---');
    }
}
