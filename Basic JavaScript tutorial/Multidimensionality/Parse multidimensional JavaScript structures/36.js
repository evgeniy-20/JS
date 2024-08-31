// Дано наступну структуру з даними: За допомогою вкладених циклів виведіть на екран усі рядки з даними.

let data = {
    1: [
        'data11',
        'data12',
        'data13',
    ],
    2: [
        'data21',
        'data22',
        'data23',
    ],
    3: [
        'data31',
        'data32',
        'data33',
    ],
    4: [
        'data41',
        'data42',
        'data43',
    ],
};

for (let getDate in data) {
    for (let name of data[getDate]) {
        console.log(name);
    }
}
