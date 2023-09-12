const turista = prompt('turista, qual o seu nome')
let cidades = ''
let count = 0

let continuar = Number(prompt('voce visitou alguma cidade? (1-SIM / 2-NAO)'))

while (continuar == 1) {
  let cidade = prompt('digite a cidade que você visitou')
  cidades += ' - ' + cidade + '\n'
  count++
  continuar = Number(prompt('voce visitou mais alguma? (1-SIM / 2-NAO)'))
}

alert(`Ola ${turista}, voce visitou ${count} cidades: ${cidades}`)