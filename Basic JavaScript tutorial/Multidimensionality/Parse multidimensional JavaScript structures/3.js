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
for (let obj of data) {
    for (let key in obj) {
        for (let value of obj[key]) {
            console.log(value);
        }
    }
}
