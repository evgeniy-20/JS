//Є масив слів. Порахуй, скільки в ньому унікальних.
let words = ['apple', 'banana', 'apple', 'orange', 'banana'];
let set = new Set(words);
let newWords = [...set];
console.log(newWords);
console.log(set);
// 👉 Очікуваний результат: 3
