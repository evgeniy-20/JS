// Додайте ще дві справи в дату '2019-12-31'.

let affairs = {
    '2019-12-28': ['data11', 'data12', 'data13'],
    '2019-12-29': ['data21', 'data22', 'data23'],
    '2019-12-30': ['data31', 'data32', 'data33'],
}

affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data41', 'data42');

console.log(affairs);
