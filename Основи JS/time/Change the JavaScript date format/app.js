//Дано дату у форматі рік-місяць-день . Перетворіть цю дату на формат день.місяць.год .

let str = '2022-10-05';
let newStr = str.split('-').reverse().join('/');
console.log(newStr);