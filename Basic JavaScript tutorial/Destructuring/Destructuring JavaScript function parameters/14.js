// Переробіть наступний код через деструктуризацію згідно з вивченою теорією:

function func(department, [name, surname], [year, month, day]) {
    console.log(`Відділ: ${department}`);
    console.log(`Ім'я: ${name}, Прізвище: ${surname}`);
    console.log(`Дата прийому: ${year}-${month}-${day}`);
}

func('development', ['John', 'Smit'], [2018, 12, 31]);
