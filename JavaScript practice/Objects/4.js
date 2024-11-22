// Видаліть одну властивість з об'єкта.

let user = {
    name: 'Yevhen',
    surName: 'Prokopiv',
    age: 27
}
user.positions = 'frontend developer';
console.log(user);

delete user.age;

console.log(user);
