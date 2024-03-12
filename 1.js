// Оголошення констант
const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;

// Оголошення глобальних змінних
let board = [];
let currentPiece;
let intervalId;
let gameOver = false;

// Функція для створення ініціалізованого поля
function createBoard() {
    for (let row = 0; row < ROWS; row++) {
        board[row] = [];
        for (let col = 0; col < COLS; col++) {
            board[row][col] = 0;
        }
    }
}

// Функція для створення нового блоку
function newPiece() {
    const pieces = [
        [[1, 1, 1, 1]],    // I
        [[1, 1, 1], [0, 1, 0]],   // T
        [[1, 1, 1], [1, 0, 0]],   // L
        [[1, 1, 1], [0, 0, 1]],   // J
        [[0, 1, 1], [1, 1, 0]],   // O
        [[1, 1], [1, 1]],         // S
        [[0, 1, 0], [1, 1, 1]]    // Z
    ];

    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    const piece = {
        matrix: randomPiece,
        row: 0,
        col: Math
