// Даний інпут та кнопка. Після натискання на кнопку дізнайтеся, заблоковано інпут чи ні.
document.getElementById('checkButton').addEventListener('click', function () {
    const inputField = document.getElementById('myInput');
    const statusText = document.getElementById('status');

    if (inputField.disabled) {
        statusText.textContent = 'Інпут заблоковано.';
    } else {
        statusText.textContent = 'Інпут не заблоковано.';
    }
});
