const vagas = []

function menu() {
  const option = Number(prompt(`
  ====== Vagas de Emprego ======
  1. Listar vagas
  2. Cadastrar nova vaga
  3. Visualizar vaga
  4. Candidatar-se a uma vaga
  5. Excluir vaga
  6. Sair
  `))
  return option
}

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, index) => {
    textoFinal += index + '.'
    textoFinal += vaga.nome
    textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
    return textoFinal
  }, '')
  alert(vagasEmTexto)
}

function cadastrarVaga() {
  const nome = prompt(`Digite o nome da vaga`)
  const descricao = prompt(`Digite a descricao da vaga`)
  const dataLimite = prompt(`Digite a data limite da vaga`)
  const confirmacao = confirm(`Confirma a criacao da vaga?\n Nome ${nome}\n Descrição: ${descricao}\n Data limite: ${dataLimite}`)

  if (confirmacao) {
    const novaVaga = {
      nome,
      descricao,
      dataLimite,
      candidatos: []
    }
    vagas.push(novaVaga)
    alert(`Vaga criada com sucesso`)
  }
}

function exibirVaga() {
  const index = Number(prompt(`Digite o indice da vaga`))
  const vaga = vagas[index]
  // usando reduce
  const candiatosEmtexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + candidato,'')
  alert(
    'vaga Numero: ' + index +
    '\nNome: ' + vaga.nome +
    '\nDescricao: ' + vaga.descricao +
    '\nData limite: ' + vaga.dataLimite +
    '\nQuantidade de candidatos: ' + vaga.candidatos.length +
    '\nCandidatos: ' + candiatosEmtexto
  )
}

function inscreverCandidato() {
  const index = Number(prompt(`Digite o indice da vaga`))
  const vaga = vagas[index]
  const nome = prompt(`Digite o nome do candidato`)
  const confirmacao = confirm(`Confirma a inscricao do candidato ${nome} na vaga ${vaga.nome}?`)

  if (confirmacao) {
    vaga.candidatos.push(nome)
    alert(`Candidato inscrito com sucesso`)
  } else {
    alert(`Operacao cancelada`)
  }
}

function excluirVaga() {
  const index = Number(prompt(`Digite o indice da vaga`))
  const vaga = vagas[index]
  const confirmacao = confirm(`Confirma a exclusao da vaga ${vaga.nome}?`)

  if (confirmacao) {
    vagas.splice(index, 1)
    alert(`Vaga excluida com sucesso`)
  } else {
    alert(`Operacao cancelada`)
  }
}

function sair() {
  alert(`Obrigado por usar o sistema de vagas\n Volte sempre!`)
}

function programa() {
  let option = 0
  do {
    option = Number(menu())
    switch (option) {
      case 1:
        listarVagas()
        break
      case 2:
        cadastrarVaga()
        break
      case 3:
        exibirVaga()
        break
      case 4:
        inscreverCandidato()
        break
      case 5:
        excluirVaga()
        break
      case 6:
        sair()
        break
      default:
        console.log(`Opcao invalida`)
        break
    }
  } while (option !== 6)
}

programa()