// Даний масив із числами. За допомогою циклу виведіть тільки ті елементи масиву, які більші за нуль і менше 10-ти.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 24, 45, 65, 56];

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 10) {
        console.log(arr[i]);
    }
}
