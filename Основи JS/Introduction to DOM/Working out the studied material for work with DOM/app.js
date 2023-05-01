//Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

let text = document.querySelector('#text');
let input = document.querySelector('#input')

input.addEventListener('blur', function() {
    text.innerHTML += input.value;
})

//Дано кілька інпутів, абзац та кнопка. Після натискання на кнопку отримайте числа, що стоять у цих інпутах і запишіть їхню суму в абзац.

let submit = document.querySelector('#submit');
let number = document.querySelectorAll('.number');
let result = document.querySelector('#result');

submit.addEventListener('click', function() {
    let sum = 0;
    for(let i = 0; i < number.length; i++) {
        sum += +number[i].value;
    }
    result.innerHTML += sum;
})

//Даний інпут. До нього вводиться число. За втратою фокусу знайдіть суму цифр цього числа.

let number1 = document.querySelector('#number1');
let result1 = document.querySelector('#result1');
number1.addEventListener('blur', function() {
    let sum = 0;
    let str = number1.value;
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }
    result1.innerHTML += sum;
})

//Даний інпут. У нього вводяться числа через кому. За втратою фокусу знайдіть середнє арифметичне цих чисел (сума поділити на кількість).

let number2 = document.querySelector('#number2');
let result2 = document.querySelector('#result2');
number2.addEventListener('blur', function() {
    let sum2 = 0;
    let str2 = number2.value;
    let arr2 = str2.split(',');
    for(let i = 0; i < arr2.length; i++) {
        sum2 += +arr2[i];
    }
    result2.innerHTML = sum2 / arr2.length;
})

//Дано 4 інпута. У перший інпут вводиться ПІБ через пропуск. За втрати фокусу запишіть прізвище, ім'я та по батькові до інших 3 інпутів.

let fullName = document.querySelector('#fullName')
let name = document.querySelectorAll('.name');
fullName.addEventListener('focus', function() {
    fullName.placeholder = '';
})
fullName.addEventListener('blur', function() {
    if (fullName.value !== 0) {
		let str2 = fullName.value;
		let arr3 = str2.split(' ');
		for (let i = 0; i < arr3.length; i++) {
			name[i].value = arr3[i];
		}
	}
	if (fullName.value == 0) {
		fullName.placeholder = 'Введите ведіть ваше прізвище';
		for (let i = 0; i < name.length; i++) {
			name[i].value = '';
		}
	}
})

//Даний інпут. У нього вводиться ПІБ через пропуск. ПІБ вводиться з маленької літери. Зробіть так, щоб за втратою фокусу інпутом, введені прізвище, ім'я та по батькові автоматично стали записаними з великої літери (у цьому ж інпуті).

let fullName1 = document.querySelector('#fullName');
const uswords = (str4) => {
	let arr4 = str4.split(' ');
	for (let i = 0; i < arr4.length; i++) {
		arr4[i] = arr4[i].split('');
		arr4[i][0] = arr4[i][0].toUpperCase();
		arr4[i] = arr4[i].join('');
	}
	str4 = arr4.join(' ');
	return str4;
}
fullName.addEventListener('blur', bigLetter = () => {
    fullName1.value = uswords(fullName1.value);
})

//Даний інпут. До нього вводиться текст. Після втрати фокусу дізнайтеся кількість слів у цьому тексті.

let text1 = document.querySelector('#text1');
let p = document.querySelector('#p');
text1.addEventListener('blur', getText = () => {
    let num = 0;
	let str5 = text1.value;
	let arr5 = str5.split(' ');
	for (var i = 0; i < arr5.length; i++) {
		num += 1;
 	}
	p.innerHTML += num;
})

//Даний інпут. До нього вводиться дата у форматі 31.12.2016 . За втрати фокусу в цьому ж інпуті поставте цю дату у форматі 2016-12-31.

let text2 = document.querySelector('#text2');

text2.addEventListener('blur', getText1 = () => {
    let arr6 = [];
    let str6 = text2.value;
    let arr7 = str6.split('.');
    arr6 = arr7.reverse();
    let str7 = arr6.join('-');
    text2.value = str7;
})
