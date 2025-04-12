// Дано інпут і кнопку. Після натискання на кнопку згенеруйте випадковий рядок з 8-ми символів і запишіть в інпут.

let input = document.querySelector('#randomInput');
let button = document.querySelector('#generateBtn');

button.addEventListener('click', () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    input.value = result;
});
