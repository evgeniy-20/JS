// Даний масив із рядками. Залиште в ньому тільки ті рядки, довжина яких більше 5 символів.

let arr = ['Stas', 'Yura', 'Yevhen'];

let newArr = arr.filter(elem => elem.length > 5);

console.log(newArr);
