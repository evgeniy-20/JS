// Дано рядок у форматі JSON, що містить об'єкт із даними: Знайдіть суму чисел із поданих даних.

let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;

let arr = JSON.parse(json);
let sum = 0;
for (let key in arr) {
    if (Array.isArray(arr[key])) {
        for (let i = 0; i < arr[key].length; i++) {
            sum += arr[key][i];
        }
    }
}
console.log(sum);
