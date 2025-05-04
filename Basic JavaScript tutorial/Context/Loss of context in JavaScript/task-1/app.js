// Передай метод bark з попереднього завдання у setTimeout без виклику.
const dog = {
    name: 'Rex',
    bark() {
        console.log(this.name);
    }
};
let barkFn = dog.bark;
console.log(barkFn);
setTimeout(dog.bark, 1000);
