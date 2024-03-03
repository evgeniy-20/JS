// Знайти кількість байт у 10 гігабайтах.

let gigabyte = 10;
let megabyteInGigabyte = 1024;
let kilobyteInMegabyte = 1024;
let byteInKilobyte = 1024;

let bytesInGigabyte = gigabyte * megabyteInGigabyte * kilobyteInMegabyte * byteInKilobyte;
console.log(bytesInGigabyte);
