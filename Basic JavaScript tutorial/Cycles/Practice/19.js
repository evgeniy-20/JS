// Складіть масив днів тижня. За допомогою циклу for виведіть усі дні тижня, а вихідні виведіть жирним.

let arr = ['пн', 'вт', 'cр', 'чт', 'пт', 'сб', 'нд'];
for (let i = 0; i < arr.length; i++) {
    if (i === 5 || i === 6) {
        document.write('<b>' + arr[i] + '</b><br>')
    } else {
        document.write(arr[i] + '<br>')
    }
}
