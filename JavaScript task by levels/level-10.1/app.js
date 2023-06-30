const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
const arcRadius = 50;
const arcWidth = 10;
const centerX = canvas.width / 2;
const centerY = canvas.height - arcRadius - arcWidth;

for (let i = 0; i < rainbowColors.length; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, arcRadius + (i * arcWidth), 0, Math.PI, false);
    ctx.lineWidth = arcWidth;
    ctx.strokeStyle = rainbowColors[i];
    ctx.stroke();
}