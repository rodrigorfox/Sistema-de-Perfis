//Classe de modelo de usuários
module.exports = class Usuario {

    id = null
    username = null
    senha = null
    nomeCompleto = null
    nomeSocial = null
    email = null

    constructor(id, username, senha, nomeCompleto, nomeSocial, email){
        
        this.id = id
        this.username = username
        this.senha = senha
        this.nomeCompleto = nomeCompleto
        this.nomeSocial = nomeSocial
        this.email = email
    }
}