//  Що виведеться в консоль у результаті виконання наступного коду: Поясніть, чому. Що хотів зробити автор цього коду? Виправте помилку автора.

function func(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(func(5));
