//Зробіть функцію, яка виводить у консоль ваше ім'я.
function getName()  {
    console.log('Yevhen');
}
getName()
//Зробіть функцію, яка виводить у консоль суму чисел від 1до 10
let sum = 0;
const getSum = () => {
    for(let i = 0; i <= 100; i++) {
        sum += i;
    }
}
console.log(getSum());