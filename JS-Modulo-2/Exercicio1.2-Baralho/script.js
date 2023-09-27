let opcao = 0
let pilha = []
let novaCarta = ''
let cartaRemovida = ''

do {
  opcao = Number(prompt(
    'O baralho tem ' + pilha.length + ' cartas: \n' +
    pilha +
    '\nEscolha uma opcao:' +
    '\n1- adicionar uma carta' +
    '\n2- Pegar uma carta' +
    '\n3- Encerrar'
  ))

  switch (opcao) {
    case 1:
      novaCarta = prompt('Digite uma carta para adicionar ao topo do baralho: ')
      pilha.push(novaCarta)
      break

    case 2:
      cartaRemovida = pilha.pop()
      // O programa estava removendo mesmo nao havendo cartas, o if (cartaRemovida) checa se o valor esta retornando um valor booleano verdadeiro
      if (cartaRemovida) {
        alert('a carta: ' + cartaRemovida + ' foi removida')

      } else {
        alert('Não há carta para ser removida')
      }
      break

    case 3:
      alert('Encerrando...')
      break

    default:
      alert('Opção invalida')
      break
  }

} while (opcao != 3)