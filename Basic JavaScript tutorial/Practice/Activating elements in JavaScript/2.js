// Модифікуйте попереднє завдання так, щоб після натискання на активований пункт списку активація з нього знімалася.

let lis = document.querySelectorAll('#ul li');
for (let li of lis) {
    li.addEventListener('click', function () {
        this.classList.toggle('active');
    })
}
