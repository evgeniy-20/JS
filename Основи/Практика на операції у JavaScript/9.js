// Знайти кількість байт у терабайті.

let terabyte = 1; // 1 терабайт
let gigabyteInTerabyte = 1024;
let megabyteInGigabyte = 1024;
let kilobyteInMegabyte = 1024;
let byteInKilobyte = 1024;

let bytesInTerabyte = terabyte * gigabyteInTerabyte * megabyteInGigabyte * kilobyteInMegabyte * byteInKilobyte;
console.log(bytesInTerabyte);
