const crypyo = require("crypto");
const algoritimo = require("aes-256-ctr");
const { text } = require("body-parser");
const { buffer } = require("stream/consumers");
const chaveSecreta = "v6tsoLj971D3vmnJQTY5zvumFJ0jM8N7d";

function encrypt(texto){
    const iv = crypto.randomBytes(16);
    const cifra = crypto.createCipheriv(algoritimo, chaveSecreta, iv);
    const encrypt = Buffer.concat([cifra.update(text), cifra.final()]);
    return iv.toString();
}

function decrypt(hash){
    const desifrar = crypto.createDecipheriv(algoritimo,  chaveSecreta, Buffer.from(hash.iv, 'hex'));
    const decriptar = Buffer.concat([desifrar.update(Buffer.from(hash.content, 'hex')), desifrar.final()]);
    return decriptar.toString();
}

function getSenhaDecrypt(senhaEcrypt){
    const senhaSplit = senhaEcrypt.split('_');
    return decrypt({iv: senhaSplit[0], content: senhaSplit[1]});
}

module.exports = {
    encrypt,
    decrypt,
    getSenhaDecrypt
};

