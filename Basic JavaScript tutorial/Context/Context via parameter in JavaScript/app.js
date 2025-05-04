// Візьміть код із попередньої задачі та виправте проблему коду за допомогою вивченого другого способу.

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    alert(square());

    function square() {
        return elem.value * elem.value;
    }
}
