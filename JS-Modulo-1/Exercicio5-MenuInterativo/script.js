let opcao = ''

do {
  opcao = prompt(
    'Escolha uma das opções abaixo:\n' +
    '1 - Cadastro\n' +
    '2 - Consulta\n' +
    '3 - Atualização\n' +
    '4 - Exclusão\n' +
    '5 - Encerrar'
  )


  switch (opcao) {
    case '1':
      alert('Bem vindo ao sistema de cadastro')
      break
    case '2':
      alert('Bem vindo ao sistema de consulta')
      break
    case '3':
      alert('Bem vindo ao sistema de atualização')
      break
    case '4':
      alert('Bem vindo ao sistema de exclusão')
      break
    default:
      alert('Você encerrou o programa')

  }

} while (opcao !== '5')