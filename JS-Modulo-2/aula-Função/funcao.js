// function dobro(x) {
// 	alert(`o dobro de ${x} é = ${(x*2)}`)
// }

// dobro(5)

// function dizerOla(nome) {
//   alert(`ola ${nome}!`)
// }
// dizerOla('Luan')
// dizerOla() 
//retornando undefined, entao precisamos criar um valor default

// function dizerOla2(nome2 = 'Carlos') {
//   alert(`ola ${nome2}!`)
// }
// dizerOla2()

// function soma(a, b) {
//   alert(`resultado da soma = ${a+b}`)
// }
// soma(1, 2)

function criarUsuario(nome, email, senha, tipo = 'admin') {
  const usuario ={
    Nome: nome,
    email: email,
    senha: senha,
    tipo: tipo
  }
  console.log(usuario)
}




function novoUsuario(nome,tipo = 'admin', email, senha ){
  const usuario ={
    Nome: nome,
    email: email,
    senha: senha,
    tipo: tipo
  }
  console.log(usuario)
}


criarUsuario(`Luan`, `luansp@outlook.com`, `senha123`)
novoUsuario(`Luan`, `luansp@outlook.com`, `senha123`)

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  console.log(usuario)
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")


const dadosDoUsuario = {
  nome: "luan",
  telefone: "739999999",
  email: "luansp@outlook.com",
  senha: "senha123",
  aniversario: "21091999",
  endereco: "Jardins"
}
parametrosDoJeitoCerto(dadosDoUsuario)

