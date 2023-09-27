// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const matriz = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item"  ,  "Olá, mundo!"],
    ["3º nível, 2º item"  ,  "Oi, mundo!"],
  ],
  []
]

console.log(matriz)
console.log(matriz[0])

console.log(matriz[1])
console.log(matriz[1][0])
console.log(matriz[1][1])

console.log(matriz[2])
console.log(matriz[2][0])
console.log(matriz[2][1][0])