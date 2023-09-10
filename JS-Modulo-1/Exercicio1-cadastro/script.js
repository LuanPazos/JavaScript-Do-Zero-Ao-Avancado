const nome= window.prompt('Diga o seu nome')

const sobrenome= window.prompt('Diga o seu sobrenome')

let campoDeEstudo = window.prompt('diga o campo de estudo')


const anoDeNascimento = window.prompt('diga o ano de nascimento')
parseFloat(anoDeNascimento)
let idade = 2023 - anoDeNascimento 
console.log(idade)

console.log(nome +' '+ sobrenome,campoDeEstudo, idade)

