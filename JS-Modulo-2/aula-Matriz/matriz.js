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

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz2 = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz2)
