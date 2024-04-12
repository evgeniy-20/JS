let heading = $('#heading');
let step = 1;
let maxDistance = 200;
let leftOffset = 0;
let topOffset = 0;


function moveHeading() {
    leftOffset += step;
    topOffset += step;
    heading.offset({
        left: leftOffset,
        top: topOffset
    });
}
setInterval(moveHeading, 10);
