// Дано наступну структуру з даними: За допомогою вкладених циклів виведіть на екран усі рядки з даними.

let data = [
    {
        1: [
            'data111',
            'data112',
            'data113',
        ],
        2: [
            'data121',
            'data122',
            'data123',
        ],
    },
    {
        1: [
            'data211',
            'data212',
            'data213',
        ],
        2: [
            'data221',
            'data222',
            'data223',
        ],
    },
    {
        1: [
            'data411',
            'data412',
            'data413',
        ],
        2: [
            'data421',
            'data422',
            'data423',
        ],
    },
];
for (let i = 0; i < data.length; i++) {
    let obj = data[i];

    for (let key in obj) {
        let subArray = obj[key];
        let output = '';

        for (let j = 0; j < subArray.length; j++) {
            output += subArray[j] + ' ';
        }

        console.log(output.trim());
    }
}
