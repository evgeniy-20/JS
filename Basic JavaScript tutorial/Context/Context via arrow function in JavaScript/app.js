// Візьміть код із попередньої задачі та виправте проблему коду за допомогою вивченого третього способу.
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    alert(square());

    let square = () => {
        return this.value * this.value;
    }
}
