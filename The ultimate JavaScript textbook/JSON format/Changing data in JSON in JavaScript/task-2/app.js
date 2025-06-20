// Дано наступний JSON: Поміняйте ім'я другого юзера.

let json = '["user1","user2","user3","user4","user5"]';
let arr = JSON.parse(json);
arr[1] = 'Yevhen';
arr[2] = 'Kristina';
let res = JSON.stringify(arr);
console.log(res);
