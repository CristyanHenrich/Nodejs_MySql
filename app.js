const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get("/", async (req, res) =>{
    res.send("Pagina inicial nodemon");
});

app.post("/cadastrar", async (req, res) =>{
    //console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Token cadastrado com sucesso!"
        })
    }).catch(() => {
        return res.Status(400).json({
            erro: true,
            mensagem: "Erro token nao cadastrado!"
        })
    });

});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});