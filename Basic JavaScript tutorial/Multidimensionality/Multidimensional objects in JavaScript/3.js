// Даний наступний об'єкт: Вручну, без циклу, знайдіть суму всіх елементів чисел.


let obj = {
    key1: {
        a: 1, b: 2, c: {
            d: 3,
            e: 4,
        }, f: 5,
    },
    key2: {
        g: 6, h: 7,
    },
}

let sum = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f +
    obj.key2.g + obj.key2.h;

console.log(sum);
