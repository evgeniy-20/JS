let headingElement = document.getElementById('main-heading');
let newHeadingText = prompt('Please provide a new heading:');
// Змінюємо текст заголовка використовуючи JQUERY
$('#main-heading').text(newHeadingText);

// Створюємо нові елементи за допомогою JQUERY

for (let i = 0; i < 3; i++) {
    let hobby = prompt('Tell me one of your hobbies!');
    $('body').append('<p>' + hobby + '<p>');
}

// Анімуємо елементи за допомогою JQUERY

$('h1').fadeOut(3000).fadeIn(2000);
