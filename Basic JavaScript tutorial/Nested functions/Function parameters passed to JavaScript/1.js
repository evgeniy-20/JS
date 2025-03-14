// Скопіюйте код моєї функції test. Викличте цю функцію, передавши їй параметром анонімну функцію, яка буде приймати числом і повертати його куб.

test(function (num) {
    return Math.pow(num, 3);
})

function test(func) {
    console.log(func(9));
}
