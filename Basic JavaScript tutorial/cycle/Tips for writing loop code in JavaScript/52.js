// Даний масив: Візьміть із цього масиву ті елементи, які мають першу цифру 1 або 2, і знайдіть їхню суму.

let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let elem of arr) {
    let str = String(elem);
    if (str[0] === '1' || str[0] === '2') {
        sum += Number(str);
    }
}

console.log(sum);
