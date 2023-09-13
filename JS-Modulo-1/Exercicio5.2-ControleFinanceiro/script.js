let saldo = Number(prompt('informe o saldo incial:'))
let opcao = ''

do {
  opcao = prompt(
    'Saldo disponivel: '+saldo + '\n' +
    '1 - Depositar\n' +
    '2 - Sacar\n' +
    '3 - Sair'
  )

switch (opcao) {
  case '1':
    saldo += Number(prompt('informe o valor a ser depositado'))
    break
  case '2':
    saldo -= Number(prompt('informe o valor a ser sacado'))
    break
  default:
    alert('Voce saiu do programa')
}

} while (opcao !== '3')

