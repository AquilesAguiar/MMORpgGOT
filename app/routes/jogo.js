module.exports = (server) => {
    server.get('/jogo',(req,res)=>{
        server.app.controllers.jogo.jogo(server,req,res)
    })
}