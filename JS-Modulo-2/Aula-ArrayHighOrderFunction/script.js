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

//  usando maps
 const nomes2 = personagens.map(function(personagem){
   return personagem.nome
 })
 console.log(nomes2)

//  sem usar filter
const orcsSemFilter = []

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcsSemFilter.push(personagens[i])
  }
}
console.log(orcsSemFilter)

//  usando filter
const orcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})
console.log(orcs)

//  usando reduce
const nivelTotal = personagens.reduce(function(acumulador, personagem){
  return acumulador + personagem.nivel
}, 0)
console.log(nivelTotal)

const racas = personagens.reduce(function(acumulador, personagem){
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})

console.log(racas)