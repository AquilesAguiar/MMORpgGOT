module.exports = (server) => {
    const validacoes = require('../controllers/cadastro').validacoesCad()
    server.get('/cadastro',(req, res) => {
        server.app.controllers.cadastro.cadastro(server, req, res)
    })
    server.post('/cadastrar',validacoes,(req, res) => {
        
        server.app.controllers.cadastro.cadastrar(server, req, res)
    })
}