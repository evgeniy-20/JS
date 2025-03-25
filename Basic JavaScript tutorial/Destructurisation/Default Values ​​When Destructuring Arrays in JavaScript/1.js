// У наступному коді частини масиву записуються у відповідні змінні: Переробіть цей код через деструктуризацію згідно з вивченою теорією. нехай посада;

let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, position] = arr;

if (arr[3] !== undefined) {
    position = arr[3];
} else {
    посада = 'стажер';
}

console.log(arr[4]);
