// Дано багатовимірний масив довільного рівня вкладеності, що містить усередині себе рядки, наприклад, такий: За допомогою рекурсії злийте елементи цього масиву в один рядок: 'abcdefgjk'

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]

function func(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            str += func(arr[i]);
        } else {
            str += arr[i];
        }
    }
    return str;
}

console.log(func(arr));
