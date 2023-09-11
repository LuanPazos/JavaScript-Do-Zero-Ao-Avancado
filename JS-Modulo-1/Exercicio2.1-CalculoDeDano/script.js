let nome1 = window.prompt('Digite o nome do personagem de ataque')
let poderAtaque = window.prompt('Poder ataque:')

let nome2 = window.prompt('Digite o nome do personagem de defesa')
let vida=window.prompt('Digite a vida:')
let poderDefesa = window.prompt('Poder de defesa:')
let escudo = window.prompt('possui escudo?')

if (poderAtaque > poderDefesa && escudo== 'n') {
  let dano = poderAtaque - poderDefesa
  alert(`${nome1} atacou ${nome2} com ${dano} de dano`)
} else if (poderAtaque > poderDefesa && escudo== 's') {
  let dano = (poderAtaque - poderDefesa) / 2
  alert(`${nome1} atacou ${nome2} com ${dano} de dano`)
} else{
  let dano = 0
  alert(`${nome1} atacou ${nome2} com ${dano} de dano`)
}

let vidaFinal = vida - dano

if (vidaFinal <= 0) {
  document.write(`${nome2} morreu`)
} else {
  document.write(`${nome2} ficou com ${vidaFinal} de vida`)
}

