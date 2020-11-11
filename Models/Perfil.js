//Classe de Perfis
module.exports = class Perfil {

    id = null;
    nome = null;
    id_empresa = null;
    id_usuario = null;

    constructor ( id, nome, id_empresa, id_usuario){
        
        this.id = id;
        this.nome = nome;
        this.id_empresa = id_empresa;
        this.id_usuario = id_usuario;
    }
}