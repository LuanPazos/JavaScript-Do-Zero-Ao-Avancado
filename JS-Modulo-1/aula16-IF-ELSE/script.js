const idade = prompt('informe a sua idade')


if(idade > 18){
  alert('voce é maior de idade')
} else if(idade>12){
  alert('voce é menor de idade')
} else if(idade>4){
  alert('voce é criança')
} else{
  alert('..')
}

// // uma forma direta de fazer um if else ->
// const resultado = (6===6)? 'verdadeiro' : 'falso'
// console.log(resultado)