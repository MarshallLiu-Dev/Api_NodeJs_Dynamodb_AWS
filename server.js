const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

const usuarioRoute = require("./routes/UsuarioRoutes");

// app.get('/api/usuario', (req, res) => {
//     return res.send({ usuario: "adim", nome: "Marshall" });
// });

app.use(bodyParser.json());

app.use('/usuario', usuarioRoute);


app.listen(PORT, () => console.log(`Servidor rodando na URL http://localhost:${PORT}`));
