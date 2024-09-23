// Визначте, скільки годин пройшло між вчорашнім опівдні та поточним моментом часу.

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let result = (today - date) / (1000 * 60 * 60);
console.log(result);
