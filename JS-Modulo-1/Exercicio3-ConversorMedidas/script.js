const medida = Number(prompt('Digite uma medida em metros'))
const unidade = Number(prompt(
  'Digite qual a unidade de medida desejada: \n'+
  '1 - milímetro(mm) \n' +
  '2 - centímetro(cm) \n' +
  '3 - decímetro(dm) \n' +
  '4 - decâmetro(dam) \n' +
  '5 - hectômetro(hm) \n'+
  '6 - kilômetro(km)'
))

console.log(medida)

switch (unidade) {
  case 1:
    alert(`Resultado de ${medida}m = ${medida *1000}mm`)
  case 2:
    alert(`Resultado de ${medida}m = ${medida *100}cm`)
  case 3:
    alert(`Resultado de ${medida}m = ${medida *10}dm`)
  case 4:
    alert(`Resultado de ${medida}m = ${medida *0.1}dam`)
  case 5:
    alert(`Resultado de ${medida}m = ${medida *0.01}hm`)
  case 6:
    alert(`Resultado de ${medida}m = ${medida *0.001}km`)
  default:
    alert(`ERROR: Unidade de ${unidade}`)
}


