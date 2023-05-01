//Виведіть у консоль усі елементи наступного масиву:

let arr = ['a', 'b', 'c', 'd', 'e'];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//Виведіть у консоль усі елементи наступного масиву, за винятком нульового та останнього:

let arr1 = ['a', 'b', 'c', 'd', 'e'];
for(let i = 1; i < arr1.length - 1; i++) {
    console.log(arr1[i]);
}

//Виведіть у консоль елементи наступного масиву у зворотному порядку:

let arr2 = ['a', 'b', 'c', 'd', 'e'];
for(let i = arr2.length - 1; i > 0; i--) {
    console.log(arr2[i]);
}

//Виправте помилку, допущену в наступному коді:

let arr3 = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr3.length; i++) {
	console.log(arr3[i]);
}