// Автор наступного коду хотів зробити двомірний масив:Написаний код, проте, робить задуманого. Знайдіть та виправте помилку автора.

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr);
