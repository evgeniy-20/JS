let Car = function (x, y) {
    this.x = x;
    this.y = y;
};
let drawVar = function (car) {
    let carHtml = '<img src="https://content1.rozetka.com.ua/goods/images/original/163021243.jpg">';
    let carElement = $(carHtml);
    carElement.css({
        position: 'absolute',
        left: car.x,
        top: car.y
    });
    $('body').append(carElement);
}
