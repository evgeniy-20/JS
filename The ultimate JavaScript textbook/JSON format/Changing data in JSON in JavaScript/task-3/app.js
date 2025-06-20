// Дано такий JSON:  Додайте в цей рядок ще одного працівника.

let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let arr = JSON.parse(json);
arr.push({
    "name": 'user4',
    "age": 28,
    "salary": 4000
})
let res = JSON.stringify(arr);
console.log(res);
