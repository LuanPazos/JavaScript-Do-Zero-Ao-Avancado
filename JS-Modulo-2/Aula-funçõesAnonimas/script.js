function somar (a, b){
  return a + b
}

let operacao = somar

console.log(operacao(1,2))

operacao = function (a, b){
  return a - b
}

console.log(operacao(1,2))

//Chamando uma função antes da declaração
olaMundo()
oiMundo()

// nessa podemos chamar a função antes da declaração
function olaMundo() {
  console.log('Ola Mundo!')
}

// Nao podemos chamar a função anonima antes da declaração
const oiMundo = function() {
  console.log('Oi Mundo!')
}

