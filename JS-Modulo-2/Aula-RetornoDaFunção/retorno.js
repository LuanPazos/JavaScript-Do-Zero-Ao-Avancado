function calcularMedia(a,b){
  const media = (a+b)/2
  return media
}

// const resultado = calcularMedia(7,2)
// console.log(resultado)
//////////////////////////////////////////////////////////////
function criarProduto(nome, preco){
  const produto ={
    nome, // nome: nome
    preco, // preco: preco
    estoque: 1
  }
  return produto
}

// console.log(criarProduto('Notebook intel core i5 8gb', 2500))
////////////////////////////////////////////////////////////////
function areaRetangulo(base, altura){
  return base * altura
}

function areaQuadro(lado){
  return areaRetangulo(lado,lado)
}

// console.log(areaRetangulo(3,5))
// console.log(areaQuadro(9))

////////////////////////////////////////////////////////////////
function ola(){
  let texto = '...'
  return texto
  texto = 'ola mundo'
  console.log(texto)
}
// uma funcao so pode retornar uma unica vez. Ela se encerra no momento do return
console.log(ola())

////////////////////////////////////////////////////////////////
function maioridade(idade){
  if(idade>=18){
    return `maior de idade`
  }else{
    return `menor de idade`
  }
}

console.log(maioridade(19))
console.log(maioridade(17))