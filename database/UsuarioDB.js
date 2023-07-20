const crypto = require("crypto");
const AWS = require("aws-sdk");
const { encrypt, getSenhaDecrypt } = require("../utils/cripto");
const { AwsConfig } = require("../config/credenciais");

const tableName = "Usuario";
AWS.config.update(AwsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function salvar(bodyRequest){
    const senhaEncrypt = encrypt(bodyRequest.senha);
    bodyRequest.id = crypto.randomBytes(32).toString('hex');
    bodyRequest.ativo = true;
    bodyRequest.dataCadastro = new Data().toString();
    bodyRequest.senha = senhaEncrypt;


    var params = {
        TableName: tableName,
        Item: bodyRequest
    };

    try {
        await dynamodb.put(params).promise();
        return bodyRequest;
    } catch (error) {
        console.log('Erro', error);
        return null;
    }

}