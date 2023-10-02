const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// sem usar maps
const nomes = []

for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}
console.log(nomes)

//  usando maps (pegando os nomes)
 const nomes2 = personagens.map(function(personagem){
   return personagem.nome
 })
 console.log(`Metodo Map`,nomes2)

//  sem usar filter 
const orcsSemFilter = []

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcsSemFilter.push(personagens[i])
  }
}
console.log(orcsSemFilter)

//  usando filter (filtrando orcs)
const orcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})
console.log(`Metodo filter`,orcs)

//  usando reduce (soma de níveis)
const nivelTotal = personagens.reduce(function(acumulador, personagem){
  return acumulador + personagem.nivel
}, 0)
console.log(`Metodo reduce`,nivelTotal)

const racas = personagens.reduce(function(acumulador, personagem){
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})
console.log(`Metodo reduce`,racas)

// Usando o método sort (ordenação)
// const personagensOrdenados = personagens.sort(function(personagem1, personagem2){
//   return personagem1.nivel - personagem2.nivel
// })
// console.log(`Metodo sort`, personagensOrdenados)

// nota: o sort altera o array original. é preciso usar o slice para copiar o array antes de ordenar:
const personagensOrdenados2 = personagens.slice().sort(function(personagem1, personagem2){
  return personagem1.nivel - personagem2.nivel
})
console.log(`Metodo sort com slice`, personagensOrdenados2)
console.log(`array original:`,personagens)
