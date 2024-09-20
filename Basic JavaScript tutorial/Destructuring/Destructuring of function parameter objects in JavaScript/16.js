// Переробте наступний код через деструктуризацію згідно з вивченою теорією:

function func({ color = 'black', width, height }) {
    console.log(color);
    console.log(width);
    console.log(height);
}

func({ color: 'red', width: 400, height: 500 });
