// Даний масив із числами. Запустіть цикл, який по черзі виводитиме елементи цього масиву в консоль доти, доки не зустрінеться елемент зі значенням 0. Після цього цикл має завершити свою роботу.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        break
    }
    console.log(arr[i]);
}
