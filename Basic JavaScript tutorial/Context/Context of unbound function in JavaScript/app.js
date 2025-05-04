// Створи об'єкт dog з методом bark, який виводить this.name. Потім присвой bark змінній і виклич її.
const dog = {
    name: 'Rex',
    bark() {
        console.log(this.name);
    }
};
let barkFn = dog.bark;
console.log(barkFn);
