// Нехай функція замикання зберігає число 10. Зробіть так, щоб кожен виклик функції зменшував це число 1і виводив в консоль зменшене число
function test() {
    let num = 10;
    return function () {
        num--;
        console.log(num);
    }
}

let func1 = test();

func1(); // 9
func1(); // 8
func1(); // 7
