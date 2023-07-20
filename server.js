const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.get('/api/usuario', (req, res) => {
    return res.send({ usuario: "adim", nome: "Marshall" });
});

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Servidor rodando na URL http://localhost:${PORT}`));
