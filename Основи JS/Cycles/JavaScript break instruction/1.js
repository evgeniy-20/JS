// Даний масив із числами. Запустіть цикл, який по черзі виводитиме елементи цього масиву в консоль доти, доки не зустрінеться елемент зі значенням 0. Після цього цикл має завершити свою роботу.

let arr = [1,2,3,0,4,5,6];

for(let elem of arr) {
    if(elem === 0) {
        console.log(elem);
        break
    }
}