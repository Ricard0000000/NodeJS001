function getLivros(req, res) {
    try {
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send({error:error.Error()})
    }
}
module.exports = {
    getLivros
}