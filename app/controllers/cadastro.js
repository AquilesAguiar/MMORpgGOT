const { check, validationResult } = require('express-validator');
module.exports.validacoesCad = ()=>{
    return[
        check('nome','Nome não pode ser vazio').notEmpty(),
        check('usuario','Usuario não pode ser vazio').notEmpty(),
        check('senha','Senha não pode ser vazio').notEmpty(),
        check('casa','Casa não pode ser vazio').notEmpty(),
    ]
}
module.exports.cadastro = (app,req,res) =>{
    res.render('cadastro',{error:'',dadosForm:''})
}
module.exports.cadastrar = (app,req,res) =>{
    var dadosForm = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.render('cadastro',{error:errors['errors'],dadosForm:dadosForm})
    }
    var connection = app.config.dbConnection
    var UsuariosDAO = new app.app.models.UsuariosDAO(connection)
    UsuariosDAO.inserirUsuario(dadosForm)
    res.send(dadosForm)
    
}