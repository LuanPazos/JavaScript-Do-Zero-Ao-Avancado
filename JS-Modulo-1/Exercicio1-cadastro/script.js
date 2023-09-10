const nome= window.prompt('Diga o seu nome')
const sobrenome= window.prompt('Diga o seu sobrenome')
let campoDeEstudo = window.prompt('diga o campo de estudo')
const anoDeNascimento = window.prompt('diga o ano de nascimento')

const ano = parseFloat(anoDeNascimento)
let idade = 2023 - ano 

console.log(nome +' '+ sobrenome,campoDeEstudo, idade +' ')
document.write('Nome: '+nome +' '+ sobrenome+' \n')
document.write('Campo de Estudo: '+ campoDeEstudo+' \n')
document.write('idade: '+ idade)

