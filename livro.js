const { Router } = require('express');
const router = Router();
const { getLivros } = require("../controllers/livros");
//const routerLivros = require('./rotas/livro')
router.get('/', (req, res) => {
    res.send('Olá mundo alura br');
});

router.post('/', (req, res) => {
    res.send('Você fez uma requisição DELETE');
});

module.exports = router;