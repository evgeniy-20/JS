//Дано рядок: let str = 'aa aba abba abbba abca abea'; Напишіть регулярку, яка знайде рядки 'aba', 'abba', 'abbba' за шаблоном: літера 'a', літера 'b' будь-яку кількість разів, літера'a'

let str = 'aa aba abba abbba abca abea';

let res = str.replace(/ab ?a/g, '!');
console.log(res);