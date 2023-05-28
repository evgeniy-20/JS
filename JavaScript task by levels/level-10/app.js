//Напишіть код, який виведе на канвасі стрілочний годинник, що тикає, що показує поточний час.

let canvas = document.getElementById("clockCanvas");
let context = canvas.getContext("2d");
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let clockRadius = 150;
function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX, centerY, clockRadius, 0, 2 * Math.PI);
    context.stroke();
    context.font = "20px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    for (var i = 1; i <= 12; i++) {
        var angle = (i * Math.PI) / 6;
        var x = centerX + Math.sin(angle) * (clockRadius - 20);
        var y = centerY - Math.cos(angle) * (clockRadius - 20);
        context.fillText(i, x, y);
    }
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let hourAngle = ((hours % 12) * Math.PI) / 6;
    hourAngle += (Math.PI / 6) * (minutes / 60) + (Math.PI / 360) * (seconds / 60);
    let minuteAngle = (minutes * Math.PI) / 30;
    minuteAngle += (Math.PI / 30) * (seconds / 60);
    let secondAngle = (seconds * Math.PI) / 30;
    context.beginPath();
    context.lineWidth = 6;
    context.lineCap = "round";
    context.moveTo(centerX, centerY);
    context.lineTo(
        centerX + Math.sin(hourAngle) * (clockRadius - 60),
        centerY - Math.cos(hourAngle) * (clockRadius - 60)
    );
    context.stroke();
    context.beginPath();
    context.lineWidth = 4;
    context.moveTo(centerX, centerY);
    context.lineTo(
        centerX + Math.sin(minuteAngle) * (clockRadius - 40),
        centerY - Math.cos(minuteAngle) * (clockRadius - 40)
    );
    context.stroke();
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.moveTo(centerX, centerY);
    context.lineTo(
        centerX + Math.sin(secondAngle) * (clockRadius - 20),
        centerY - Math.cos(secondAngle) * (clockRadius - 20)
    );
    context.stroke();
}
setInterval(drawClock, 1000);
drawClock();