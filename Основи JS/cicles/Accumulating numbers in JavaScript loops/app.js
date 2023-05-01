//Знайдіть суму парних чисел від 2до 100.
let sum = 0;
for(let i = 2; i <= 100; i++) {
    if(i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);
//Знайдіть суму непарних чисел від 1 до 99.
let sum1 = 0;
for(let i = 1; i <= 99; i++) {
    if(i % 2) {
        sum1 += i;
    }
}
console.log(sum1);
//Знайдіть добуток цілих чисел від 1 до 20.
let product = 1;
for(let i = 1; i <= 20; i++) {
    product *= i;
}
console.log(product);
