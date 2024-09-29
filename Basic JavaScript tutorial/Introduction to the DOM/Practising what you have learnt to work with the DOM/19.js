// Дано інпут і кнопку. Після натискання на кнопку згенеруйте випадковий рядок з 8-ми символів і запишіть в інпут.

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Можливі символи
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

document.querySelector('#generateButton').addEventListener('click', function () {
    const randomString = generateRandomString(8);
    document.querySelector('#randomStringInput').value = randomString;
});
