// Зашифрувати пароль, перетворивши його символи у верхній регістр.

let password = 'mySecurePassword123';
let encryptedPassword = '';

for (let i = 0; i < password.length; i++) {
    encryptedPassword += password[i].toUpperCase();
}

console.log(encryptedPassword);
