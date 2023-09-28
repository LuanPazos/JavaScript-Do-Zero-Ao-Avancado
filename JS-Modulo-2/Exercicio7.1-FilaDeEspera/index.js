let fila = []
let opcao = ''

do {
  let pacientes = ''
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i+1) + 'º - ' + fila[i] + '\n'
  }

  opcao= prompt(
    'Pacientes:\n' + pacientes + 
    '\nEscolha uma opção:\n\n1 -Novo Paciente \n2- Consultar paciente \n3- Sair'
  )
  
  switch (opcao) {
    case '1':
      const novoPaciente = prompt('Digite o nome do novo paciente')
      fila.push(novoPaciente)
      break
      case '2':
        const pacienteConsultado = fila.shift()
        if (!pacienteConsultado) {
          alert('nao ha pacientes na fila')
        } else {
          alert(pacienteConsultado + ' foi removido da fila.')
        }
      break
      case '3':
        alert('Encerrando...')
        break
      default:
        alert('Opção invalida')
        break
  }
} while (opcao !== '3')