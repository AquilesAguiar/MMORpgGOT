function UsuariosDAO (connection){
     this._connection = connection()

    this.inserirUsuario = async (usuario) =>{
        const db = await this._connection.
        console.log(db)
        
        console.log(usuario)
    }
}
module.exports = function(){
    return UsuariosDAO
}