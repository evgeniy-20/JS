// Розробіть функцію, яка приймає рядок та два індекси, а потім замінює символи між цими індексами на інший рядок. Використайте методи slice та конкатенацію.

function replaceSubstring(str, startIndex, endIndex, replacement) {
    let part1 = str.slice(0, startIndex);
    let part2 = str.slice(endIndex + 1);
    return part1 + replacement + part2;
}

let str = 'Hello, world!';
let startIndex = 7;
let endIndex = 11;
let replacement = 'Universe';

console.log(replaceSubstring(str, startIndex, endIndex, replacement)); // Виведе: "Hello, Universe!"
