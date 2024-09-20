// Дано дату у форматі рік-місяць-день . Перетворіть цю дату на формат день.місяць.рік

let date = new Date;
let todayDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
let newDate = todayDate.split('.').reverse().join();
console.log(newDate);
