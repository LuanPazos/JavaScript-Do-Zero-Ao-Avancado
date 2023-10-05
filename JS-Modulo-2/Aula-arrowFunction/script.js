//função normal:
function ola(){
  return 'ola mundo'
}
console.log(ola())

//função anonima:
let oi = function(){
  return console.log('oi mundo')
}
oi()

// arrow function:
let hello =() => console.log('hello world')
hello()

// arrow function com parametro:
let eai = (nome) => console.log(`Eai ${nome}`)
eai('luan')

// arrow function com parametro e retorno:
let coe = (nome) => {
  return `coe ${nome}`
}
console.log(coe('luan'))

