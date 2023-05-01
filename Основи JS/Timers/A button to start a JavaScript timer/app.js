//Зробіть кнопку, натиснувши яку в консоль буде виводиться зворотний відлік, починаючи з 100.

let start = document.querySelector('#start');

start.addEventListener('click', function() {
    let i = 100;
    setInterval(function() {
        console.log(--i);
    }, 1000);
})

//Візьміть рішення попереднього завдання. Переконайтеся, що багаторазове натискання кнопки призводить до прискорення відліку. Виправте цю проблему.

let start1 = document.querySelector('#start1');

start1.addEventListener('click', function func() {
	let i = 0;
	
	setInterval(function() {
		console.log(++i);
	}, 3000);
	
	this.removeEventListener('click', func);
});