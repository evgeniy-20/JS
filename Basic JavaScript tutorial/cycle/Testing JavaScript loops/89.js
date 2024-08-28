// Даний масив числами, наприклад: Виведіть на екран лише ті числа з масиву, які починаються на цифру 1, 2 або 5

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    let newString = String(arr[i]);
    if (newString[0] === '1' || newString[0] === '2' || newString[0] === '5') {
        console.log(arr[i]);
    }
}
