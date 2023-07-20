const express = require("express");
const routes = express.Router();
const { salvar } = require("../database/UsuarioDB");

routes.post('/', async (req, res) => {
    if (req.body && req.body.email && req.body.name && req.body.senha) {
        const cadastro = await salvar(req.body);
        return res.status(201).json({ mensagem: "Usuário cadastrado", cadastro });
    }
    return res.status(500).json({ mensagem: "Usuário não cadastrado" }); 
});

module.exports = routes;