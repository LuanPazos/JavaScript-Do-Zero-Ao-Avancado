let velocidade1 = window.prompt('Velocidade do carro 1')
let vel1 = parseFloat(velocidade1)
let velocidade2 = window.prompt('Velocidade do carro 2')
let vel2 = parseFloat(velocidade2)

if (vel1 > vel2) {
  alert('Velocidade do carro 1 é maior que a do carro 2')
} else if (vel2 > vel1) {
  alert('Velocidade do carro 2 é maior que a do carro 1')
} else {
  alert('As velocidades são iguais')
}
