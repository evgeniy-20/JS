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
