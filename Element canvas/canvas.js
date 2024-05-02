let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Head
ctx.fillRect(76, 50, 50, 50);

// Neck
ctx.fillRect(95, 100, 10, 30);

// Arms
ctx.fillRect(10, 120, 150, 20); // Left arm
ctx.fillRect(140, 120, 150, 20); // Right arm

// Body
ctx.fillRect(50, 140, 100, 100);

// Legs
ctx.fillRect(50, 235, 20, 100); // Left leg
ctx.fillRect(130, 235, 20, 100); // Right leg
