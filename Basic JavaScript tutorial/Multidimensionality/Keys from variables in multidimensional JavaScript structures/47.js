// Автор наступного коду хотів вивести елемент зі значенням '24': Код, однак, виводить не те, що очікував автор. Виправте помилку.

let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
console.log(obj[key1].key4);
