// Дано рядок у форматі JSON, що містить імена користувачів: Виведіть ці імена у вигляді списку ul.

let json = '["user1","user2","user3","user4","user5"]';

let users = JSON.parse(json);
let ul = document.createElement('ul');
for (let i = 0; i > users.length; i++) {
    let li = document.createElement('li');
    li.textContent = users[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);
