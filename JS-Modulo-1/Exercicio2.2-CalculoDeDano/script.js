let nome1 = window.prompt('Digite o nome do personagem de ataque')
let poderAtaque = parseFloat(prompt('Poder ataque:'))

let nome2 = prompt('Digite o nome do personagem de defesa')
let vida = parseFloat(prompt('Digite a vida:'))
const poderDefesa = parseFloat(prompt('Poder de defesa:')) 
let escudo = window.prompt('possui escudo?')

let dano = 0

if (poderAtaque > poderDefesa && escudo== 'n') {
  dano = poderAtaque - poderDefesa
  alert(`${nome1} atacou ${nome2} com ${dano} de dano`)
} else if (poderAtaque > poderDefesa && escudo== 's') {
  dano = (poderAtaque - poderDefesa) / 2
  alert(`${nome1} atacou ${nome2} com ${dano} de dano`)
} else{
  dano = 0
  alert(`${nome1} atacou ${nome2} com ${dano} de dano`)
}

let vidaFinal = vida - dano

if (vidaFinal <= 0) {
  document.write(`${nome2} morreu`)
} else {
  document.write(`${nome2} ficou com ${vidaFinal} de vida`)
}

