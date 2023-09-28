// todo:Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

// - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// - O menu deve ter a opção de salvar um imóvel.
// - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//     - Nome do proprietário.
//     - Quantidade de quartos.
//     - Quantidade de banheiros.
//     - Se possui garagem.
// - O menu também deve ter a opção de mostrar todos os imóveis salvos.

let imoveis = [] // array para armazenar os imóveis cadastrados
let opcao = 0

do {
  opcao = parseInt(
    prompt(`
Quantidade de imóveis cadastrados: ${imoveis.length}\n
Menu interativo: \n
1. Salvar um imóvel
2. Mostrar todos os imóveis
3. Sair \n
Digite o número da opção desejada:
    `)
  )

  switch (opcao) {
    case 1:
      let imovel = {}
      imovel.nome = prompt("Digite o nome do proprietário:")
      imovel.quarto = parseInt(prompt("Digite a quantidade de quartos:"))
      imovel.banheiro = parseInt(prompt("Digite a quantidade de banheiros:"))
      imovel.garagem = prompt("Possui garagem?")

      const confirmacao = confirm(`
Dados do imóvel:
Nome do proprietário: ${imovel.nome}
Quantidade de quartos: ${imovel.quarto}
Quantidade de banheiros: ${imovel.banheiro}
Garagem: ${imovel.garagem}
      `)
      if (confirmacao) {
        imoveis.push(imovel)
      } else {
        alert("Operação cancelada!")
      }
      break
    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(`
Imóvel ${i + 1}:
Nome do proprietário: ${imoveis[i].nome}
Quantidade de quartos: ${imoveis[i].quarto}
Quantidade de banheiros: ${imoveis[i].banheiro}
Garagem: ${imoveis[i].garagem}
        `)
      }
      break

    case 3:
      alert("Saindo...")
      break

    default:
      alert("Opção inválida")
      break
  }
} while (opcao != 3)
