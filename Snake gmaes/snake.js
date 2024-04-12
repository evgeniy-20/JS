let snake;
let food;
let dx = 0;
let dy = 0;
let snakeX;
let snakeY;
let foodX;
let foodY;
let score = 0;
let speed = 200;
let gameInterval;
let obstacles = [];
let obstacleInterval;
let gameContainer;

function startGame() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    gameContainer = document.getElementById('game-container');
    snake = document.getElementById('snake');
    food = document.getElementById('food');
    obstacles = [];
    createSnake();
    createFood();
    gameInterval = setInterval(moveSnake, speed);
    obstacleInterval = setInterval(createObstacle, 3000);
    document.addEventListener('keydown', changeDirection);
}

function gameOver() {
    clearInterval(gameInterval);
    clearInterval(obstacleInterval);
    document.removeEventListener('keydown', changeDirection);
    alert('Game Over! Your Score: ' + score);
    score = 0;
    speed = 200;
    gameContainer.innerHTML = '';
    document.getElementById('menu').classList.remove('hidden');
}

function createSnake() {
    snakeX = 10;
    snakeY = 10;
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
}

function createFood() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function moveSnake() {
    snakeX += dx;
    snakeY += dy;
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
    checkCollision();
}

function changeDirection(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (dy !== 20) {
                dy = -20;
                dx = 0;
            }
            break;
        case 'ArrowDown':
            if (dy !== -20) {
                dy = 20;
                dx = 0;
            }
            break;
        case 'ArrowLeft':
            if (dx !== 20) {
                dx = -20;
                dy = 0;
            }
            break;
        case 'ArrowRight':
            if (dx !== -20) {
                dx = 20;
                dy = 0;
            }
            break;
    }
}

function checkCollision() {
    if (snakeX < 0 || snakeY < 0 || snakeX >= 400 || snakeY >= 400) {
        gameOver();
    }
    if (snakeX === foodX && snakeY === foodY) {
        score++;
        speed -= 5;
        createFood();
    }
    for (let i = 0; i < obstacles.length; i++) {
        if (snakeX === obstacles[i].x && snakeY === obstacles[i].y) {
            gameOver();
        }
    }
}

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = Math.floor(Math.random() * 20) * 20 + 'px';
    obstacle.style.top = Math.floor(Math.random() * 20) * 20 + 'px';
    obstacles.push({ x: parseInt(obstacle.style.left), y: parseInt(obstacle.style.top) });
    gameContainer.appendChild(obstacle);
}

function toggleInstructions() {
    const instructions = document.getElementById('instructions');
    instructions.classList.toggle('hidden');
}
