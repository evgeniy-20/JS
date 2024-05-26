// логічні оператори
// && (I)

let hadShower = true;
let hasBackpack = true;
console.log(hadShower && hasBackpack);

// ||(Або)

let hasApple = false;
let hasOrange = true;
console.log(hasApple || hasOrange);

// !(НЕ)

let isWeekend = false;
let needToShowerToday = !isWeekend;
console.log(needToShowerToday);

// Поєднуємо логічнф оператори

let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);

console.log(shouldGoToSchool);

// Порівнюємо числові із булевими значеннями

// більше ніж

let height = 60;
let heightRestriction = 60;
console.log(height >= heightRestriction);

// менше ніж

let height1 = 60;
let heightRestriction1 = 60;
console.log(height1 < heightRestriction1);

let age = 12;
let accompanied = 13;
console.log(age <= 13);
