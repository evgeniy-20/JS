// У змінній arr міститься деякий масив із числами. Напишіть умову, яка перевірить, що в масиві 3 елемента. Якщо так, виведіть на екран суму елементів масиву.

let arr = [1, 2, 3];
if (arr.length === 3) {
    console.log(arr[0] + arr[1] + arr[2]);
} else {
    console.log('Array length is not 3');
}
