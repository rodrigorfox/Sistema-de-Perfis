//Classe de serviço das empresas
module.exports = class EmpresaService {

    empresas = []

    buscarEmpresa(id){
        const pesquisa = this.empresas.filter( empresa => empresa.id == id )
        if(pesquisa.length == 0){
            return null
        }

        return {...pesquisa[0]}
    }

    validarEmpresa (empresa){
        return (empresa.empresa != "" && "empresa" in empresa)
    }

    repeticaoEmpresa(nova_empresa) {
        const pesquisa = this.empresas.filter( a => a.empresa == nova_empresa.empresa)
        if(pesquisa.length > 0)
        return true
    }

    inserirEmpresa(empresa){
        this.empresas.push(empresa)
    }

    alterarEmpresa(indice, empresa, edit_empresa){
        empresa.empresa = edit_empresa.empresa
        this.empresas[indice] = empresa
    }
    
    removerEmpresa(id){
        const indice = id -1
        this.empresas.splice(indice, 1)
        this.reordenarEmpresas()
    }

    reordenarEmpresas(){
        var i = 0
        while(i < this.empresas.length){
            this.empresas[i]["id"] = (i+1)
            i++
        }
    }
}