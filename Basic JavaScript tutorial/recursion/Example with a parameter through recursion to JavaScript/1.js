// Даний масив: За допомогою рекурсії виведіть елементи масиву в консоль.

let arr = [1, 2, 3, 4, 5];

function func(arr) {
    if (arr.length === 0) {
        return;
    }
    console.log(arr.shift());
    func(arr);
}

func(arr);
