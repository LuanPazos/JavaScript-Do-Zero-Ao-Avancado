const palavra = prompt("Informe a palavra:")
let palavraInvertida = ""

for (let count = palavra.length - 1; count >= 0; count--) {
  palavraInvertida += palavra[count]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}
