// const crypto = require("crypto");
// const algoritimo = require("aes-256-ctr");
// const { text } = require("body-parser");
// const { buffer } = require("stream/consumers");
// const chaveSecreta = "v6tsoLj971D3vmnJQTY5zvumFJ0jM8N7d";

// function encrypt(texto){
//     const iv = crypto.randomBytes(16);
//     const cifra = crypto.createCipheriv(algoritimo, chaveSecreta, iv);
//     const encrypt = Buffer.concat([cifra.update(text), cifra.final()]);
//     return iv.toString();
// }

// function decrypt(hash){
//     const desifrar = crypto.createDecipheriv(algoritimo,  chaveSecreta, Buffer.from(hash.iv, 'hex'));
//     const decriptar = Buffer.concat([desifrar.update(Buffer.from(hash.content, 'hex')), desifrar.final()]);
//     return decriptar.toString();
// }

// function getSenhaDecrypt(senhaEcrypt){
//     const senhaSplit = senhaEcrypt.split('_');
//     return decrypt({iv: senhaSplit[0], content: senhaSplit[1]});
// }

// module.exports = {
//     encrypt,
//     decrypt,
//     getSenhaDecrypt
// };

// const crypto = require("crypto");
// const algoritimo = "aes-256-ctr"; // Use the string "aes-256-ctr" instead of requiring the module 'aes-256-ctr'
// const chaveSecreta = "v6tsoLj971D3vmnJQTY5zvumFJ0jM8N7d";

// function encrypt(text) {
//     const iv = crypto.randomBytes(16);
//     const cipher = crypto.createCipheriv(algoritimo, chaveSecreta, iv);
//     const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
//     return iv.toString("hex") + "_" + encrypted.toString("hex"); // Return IV and encrypted text as a single string
// }

// function decrypt(hash) {
//     const iv = Buffer.from(hash.iv, 'hex');
//     const encryptedText = Buffer.from(hash.content, 'hex');
//     const decipher = crypto.createDecipheriv(algoritimo, chaveSecreta, iv);
//     const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
//     return decrypted.toString();
// }

// function getSenhaDecrypt(senhaEcrypt) {
//     const senhaSplit = senhaEcrypt.split('_');
//     return decrypt({ iv: senhaSplit[0], content: senhaSplit[1] });
// }

// module.exports = {
//     encrypt,
//     decrypt,
//     getSenhaDecrypt
// };
const crypto = require('crypto');

const algoritmo = 'aes-256-ctr';
const chaveSecreta = 'v6tsoLj97lD3vnwjQY5zvumFJ0jM8N7d';

function encrypt(texto) {
    const iv = crypto.randomBytes(16);
    const cifra = crypto.createCipheriv(algoritmo, chaveSecreta, iv);
    const encriptar = Buffer.concat([cifra.update(texto), cifra.final()]);

    return iv.toString('hex') + '_' + encriptar.toString('hex');
}


function decrypt(hash) {

    const decifrar = crypto.createDecipheriv(algoritmo, chaveSecreta, Buffer.from(hash.iv, 'hex'));
    const decriptar = Buffer.concat([decifrar.update(Buffer.from(hash.content, 'hex')), decifrar.final()]);

    return decriptar.toString();
}

function getSenhaDecrypt(senhaEncrypt) {
    const senhaSplit = senhaEncrypt.split('_');
    return decrypt({ iv: senhaSplit[0], content: senhaSplit[1] });
}

module.exports = {
    encrypt,
    decrypt,
    getSenhaDecrypt
}