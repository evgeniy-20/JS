// Дано наступну структуру з даними: За допомогою вкладених циклів виведіть на екран усі рядки з даними.

let data = [
    {
        1: 'data11',
        2: 'data12',
        3: 'data13',
    },
    {
        1: 'data21',
        2: 'data22',
        3: 'data33',
    },
    {
        1: 'data31',
        2: 'data32',
        3: 'data33',
    },
];
for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    let output = '';

    for (let key in obj) {
        output += obj[key] + ' ';
    }

    console.log(output.trim());
}
