// Função que recebe outra função como parametro
// function calcular(n1, n2, operacao) {
//     return operacao(n1, n2)
//   }
  
//   function soma(n1, n2) {
//     return n1 + n2
//   }
  
//   function subtracao(n1, n2) {
//     return n1 - n2
//   }
  
//   console.log(calcular(2, 3, subtracao))

function calcular(a, b, operacao){
  console.log('Realizando uma operacao...')
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y){
  console.log('Realizando uma soma...')
  return x + y
}

console.log(calcular(2, 3, somar))


console.log(calcular(8,9, function(x, y){
  console.log('Realizando uma subtracao...')
  return x - y
}))



function exibirElemento(elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
  })
}
const lista = ['maça', 'banana', 'laranja', 'limao']


for (let i = 0; i < lista.length; i++){
  exibirElemento(lista[i], i, lista)
}

// mesma funcionalidade:
lista.forEach(exibirElemento)

// mesma funcionalidade:
lista.forEach(function(elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
  })
})