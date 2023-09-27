let quantidade = 0
let opcao = 0
let pilha = []
let novaCarta= ''
let cartaRemovida = ''

do{

  opcao = Number(prompt(
    'O baralho tem ' + quantidade + ' cartas: \n' +
    pilha +
    '\nEscolha uma opcao:'+
    '\n1- adicionar uma carta' +
    '\n2- Pegar uma carta'+
    '\n3- Encerrar'
  ))
  switch (opcao){
    case 1:
      novaCarta= prompt('Digite uma carta para adicionar ao topo do baralho: ')
      pilha.push(novaCarta)
      quantidade ++
      break
    case 2:
      cartaRemovida = pilha.pop()
      alert('a carta: '+ cartaRemovida + ' foi removida')
      quantidade --
      break
    case 3:
      alert('Encerrando...')
      break
    default:
      alert('Opção invalida')
      break
  }
  
} while(opcao!=3)