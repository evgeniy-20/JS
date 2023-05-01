//Якимось способом отримаєте псевдомасив елементів. Перетворіть його на масив трьома описаними способами.

let elems = document.querySelectorAll('p');

let arr = [...elems];
console.log(arr);

//Дано абзаци: let elems = document.querySelectorAll('p'); За допомогою методу slice отримайте всі абзаци, крім першого та останнього.

let elems1 = document.querySelectorAll('p');

let newArr = elems1.slice()

