// Дано масив з рядками. Залиште в ньому тільки ті рядки, довжина яких більше 5символів.

let arrNames = ['Stas', 'Yura', 'Yevhen'];

let newArr = arrNames.filter(elem => elem.length > 5);

console.log(newArr);
