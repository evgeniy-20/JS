// Даний масив із числами. Запустіть цикл, який по черзі виводитиме елементи цього масиву в консоль доти, доки не зустрінеться елемент зі значенням 0. Після цього цикл має завершити свою роботу

let arr = [1, 0, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem === 0) {
        break
    }
    console.log(elem);
}
