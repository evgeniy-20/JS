// Даний багатовимірний об'єкт довільного рівня вкладеності, наприклад, такий: За допомогою рекурсії знайдіть суму елементів цього об'єкта. {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

function sumNestedValues(obj) {
    let total = 0;

    // Перевіряємо тип об'єкта
    if (typeof obj === 'object' && obj !== null) {
        // Якщо об'єкт - це словник або об'єкт, рекурсивно викликаємо функцію для кожного значення
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                total += sumNestedValues(obj[key]);
            }
        }
    } else if (typeof obj === 'number') {
        // Якщо об'єкт - це число, додаємо його до загальної суми
        total += obj;
    }

    return total;
}

// Приклад об'єкта
const data = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: 4
    },
    f: {
        g: 5,
        j: 6,
        k: {
            l: 7,
            m: {
                n: 8,
                o: 9
            }
        }
    }
};

// Виклик функції
const result = sumNestedValues(data);
console.log(result);  // Виведе 45
