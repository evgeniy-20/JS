// Даний масив: Візьміть з цього масиву ті елементи, які мають першу цифру 1або 2, і знайдіть їх суму.

let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let str = String(arr[i]);
    if (str[0] === '1' || str[0] === '2') {
        sum += arr[i];
    }
}

console.log(sum);
