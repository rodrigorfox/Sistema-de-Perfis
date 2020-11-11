//Classe de serviço dos Perfis
module.exports = class PerfilService {

    perfis = []

    buscarPerfil(id){
        const pesquisa = this.perfis.filter( perfil => perfil.id == id )
        if(pesquisa.length == 0){
            return null
        }

        return pesquisa[0]
    }

    validarPerfil (perfil){
        return (perfil.nome == "" || perfil.id_empresa == "" || perfil.id_usuario == "" || !("nome" in perfil && "id_empresa" in perfil && "id_usuario" in perfil))
    }

    repeticaoPerfil(novo_perfil) {
        const pesquisa = this.perfis
            .filter( perfil => perfil.nome == novo_perfil.nome)
            .filter( perfil => perfil.id_empresa == novo_perfil.id_empresa)
            .filter(perfil => perfil.id_usuario == novo_perfil.id_usuario)
        if(pesquisa.length > 0)
        return true
    }

    inserirPerfil(perfil){
        this.perfis.push(perfil)
    }

    alterarPerfil(indice, perfil, edit_perfil){
        perfil.nome = edit_perfil.nome
        this.perfis[indice] = perfil
    }
    
    removerPerfil(id){
        const indice = id -1
        this.perfis.splice(indice,1)
        this.reordenarPerfis()
    }

    reordenarPerfis(){
        var i = 0
        while(i < this.perfis.length){
            this.perfis[i]["id"] = (i+1)
            i++
        }
    }
}