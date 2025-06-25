// Отримайте значення записів із різними номерами.

localStorage.setItem('name', 'Yevhen');
localStorage.setItem('age', '28');
localStorage.setItem('city', 'Kyiv');

let firstKey = localStorage.key(0);
console.log('Перший ключ у localStorage:', firstKey);
