//

function test() {
    let num = 10;
    return function () {
        if (num > 0) {
            num--;
            console.log(num);
        } else {
            console.log("Відлік завершено.");
        }
    }
}

let func1 = test();

func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
