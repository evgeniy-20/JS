// let encryptedData = 'ENCRYPTEDTEXT123';
let encryptedData = 'ENCRYPTEDTEXT123';

let decryptedData = '';

for (let i = 0; i < encryptedData.length; i++) {
    decryptedData += encryptedData[i].toLowerCase();
}

console.log(decryptedData);
