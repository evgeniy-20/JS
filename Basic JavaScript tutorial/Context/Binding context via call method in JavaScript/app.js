// За допомогою методу call і функції func виведіть на екран value кожного з інпутів.
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

function func() {
    console.log(this.value);
}

func.call(elem1);
func.call(elem2);
func.call(elem3);
console.log('Values logged successfully.');
