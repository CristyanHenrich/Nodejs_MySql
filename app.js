const express = require('express');
const app = express();
const Tokens = require('./models/Tokens');

app.use(express.json());

//Listo todos os tokens cadastrados no banco de dados
app.post("/atualizar", async (req, res) =>{
    const tokens = await Tokens.findByPk(1);
    //console.log(tokens);
    tokens.TOKEN = req.body.TOKEN;
     
    await tokens.save()
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Token atualizado com sucesso!"
        })
    }).catch(() => {
        return res.Status(400).json({
            erro: true,
            mensagem: "Erro token nao foi atualizado!"
        })
    });

});

//Listo todos os tokens cadastrados no banco de dados
app.get("/listar", async (req, res) =>{

    const tokens = await Tokens.findAll();
    console.log(tokens);

    res.send(tokens);
});

//Cadastro um novo token no banco de dados enviando em um JSON
app.post("/cadastrar", async (req, res) =>{
    //console.log(req.body);
    await Tokens.create(req.body)
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