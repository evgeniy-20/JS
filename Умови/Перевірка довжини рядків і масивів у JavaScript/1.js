// У змінній arr міститься деякий масив із числами. Напишіть умову, яка перевірить, що в масиві 3 елементи. Якщо це так, виведіть на екран суму елементів масиву.

let arr = [1, 2, 3];
let sum = 0;
if (arr.length === 3) {
    sum = arr[0] + arr[1] + arr[2];
}

console.log(sum);
