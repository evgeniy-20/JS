// Знайти кількість кілобайт у терабайтах.

let terabyte = 1; // 1 терабайт
let gigabyteInTerabyte = 1024;
let megabyteInGigabyte = 1024;
let kilobyteInMegabyte = 1024;

let kilobyteInTerabyte = terabyte * gigabyteInTerabyte * megabyteInGigabyte * kilobyteInMegabyte;
console.log(kilobyteInTerabyte);
