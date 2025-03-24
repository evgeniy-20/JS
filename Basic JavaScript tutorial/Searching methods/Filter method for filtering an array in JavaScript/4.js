// Дано масив із рядками. Залиште в ньому тільки ті рядки, довжина яких більша за 5-ть символів.

let arr = ['hello', 'world', 'hit', 'the', 'rood', 'jack', 'sparrow'];
let newArray = arr.filter(elem => elem.length > 5);
console.log(newArray);
