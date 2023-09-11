let velocidade1 = window.prompt('Velocidade do carro 1')
let vel1 = parseFloat(velocidade1)
let velocidade2 = window.prompt('Velocidade do carro 2')
let vel2 = parseFloat(velocidade2)

if (vel1 > vel2) {
  document.write('Velocidade do carro 1(' + vel1 +') é maior que a do carro 2 (' + vel2 +')')
} else if (vel2 > vel1) {
  document.write('Velocidade do carro 2(' + vel2 +') é maior que a do carro 1 (' + vel1 +')')
} else {
  document.write('As velocidades são iguais ' + vel1 + ' e ' + vel2)
}
