// Перепишіть розв'язок задачі з попереднього уроку через обчислювальну властивість.



let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield { key: key, val: this[key] };
        }
    }
};

for (let elem of obj) {
    console.log(elem);
}
