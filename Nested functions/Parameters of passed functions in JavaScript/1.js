//  Скопіюйте код моєї функції test. Викличте цю функцію, передавши їй параметром анонімну функцію, яка буде приймати числом і повертати його куб.

test(function (num) {
    return num * num * num;
});

function test(func) {
    console.log(func(3));
}
