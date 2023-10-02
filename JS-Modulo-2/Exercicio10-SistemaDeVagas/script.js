function menu(){
  const opcao = prompt(`====== Vagas de Emprego ======
  1. Listar vagas
  2. Cadastrar nova vaga
  3. Visualizar vaga
  4. Candidatar-se a uma vaga
  5. Excluir vaga
  6. Sair
  `)
  return opcao
}

let vagas = []
function listarVagas(){
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, index) => {
    textoFinal += indice + '.'
    textoFinal += vaga.nome
    textoFinal += '(' + vaga.candidato + 'candidatos)\n'
    return textoFinal
  }, '')
  alert (vagasEmTexto)
}





let option = 0
function programa(){
  do{
    switch(option){
      case 1:
        listarVagas()
        break
      case 2:
        cadastrarVagas()
        break
      case 3:
        visualizarVaga()
        break
      case 4:
        candidatarVaga()
        break
      case 5:
        excluirVaga()
        break
      case 6:
        console.log(`Obrigado por usar o sistema de vagas\n Volte sempre!`)
        break
      default:
        console.log(`Opcao invalida`)
        break
    }
  }while(option != 6)
}

programa()
