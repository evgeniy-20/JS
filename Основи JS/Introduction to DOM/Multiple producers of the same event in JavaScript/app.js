let p = document.querySelector('#elem');
p.addEventListener('click', func1);
p.addEventListener('click', func2);
p.addEventListener('click', func3);
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}