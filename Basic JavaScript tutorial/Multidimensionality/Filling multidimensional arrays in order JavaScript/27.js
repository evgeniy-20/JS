// Автор наступного коду хотів зробити такий масив: Для цього було написано наступний код: Написаний код, проте, робить задуманого. Знайдіть та виправте помилку автора.

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}

console.log(arr);