let dinosaurs = [
    'T-Rex',
    'Velociraptor',
    'Stegosaurus',
    'Triceratops',
    'Brachiosaurus',
    'Pteranodon',
    'Apatosaurus',
    'Diplodocus',
    'Compsognathus'
];

dinosaurs[2] = 'Triceratops Rex';

console.log(dinosaurs);


// Набір слів для генерації образливих фраз
const слова = ['безглуздий', 'невдячний', 'примітивний', 'тупий', 'безталанний', 'гидкий', 'нудний', 'бестолковий'];

// Функція для випадкового вибору елемента з масиву
function випадковийЕлемент(масив) {
  return масив[Math.floor(Math.random() * масив.length)];
}

// Генератор образливої фрази
function генеруватиОбразливуФразу() {
  const першеСлово = випадковийЕлемент(слова);
  const другеСлово = випадковийЕлемент(слова);
  
  return `Ти ${першеСлово} і ${другеСлово}!`;
}

// Приклад використання
const образливаФраза = генеруватиОбразливуФразу();
console.log(образливаФраза);
