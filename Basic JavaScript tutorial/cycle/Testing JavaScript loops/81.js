// Даний масив із числами. За допомогою циклу виведіть тільки ті елементи масиву, які більші за нуль і менше 10-ти.

let arr = [1, 2, 3, 4, 14, 15, 16, 65, 75, 35, 45, 25];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 10) {
        console.log(arr[i]);
    }
}