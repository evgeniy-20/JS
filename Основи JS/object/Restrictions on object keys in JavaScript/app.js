//Даний об'єкт:
//Для яких ключів даного об'єкта лапки обов'язкові, а яких немає?
let obj = {
    '1a': 1,
    b2: 2,
    'с-с': 3,
	'd 4': 4,
	e5: 5
};
console.log(obj);
//Виправте помилки, допущені в наступному коді:
let obj1 = {
	'1a': 1,
	b2: 2,
	'с-с': 3,
	'd 4': 4,
	e5: 5
};

console.log(obj1["1a"]);
console.log(obj1.b2);
console.log(obj1["с-с"]);
console.log(obj1["d 4"]);
console.log(obj1.e5);