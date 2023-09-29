function triangulo() {
  const base = Number(prompt(`Digite a base`))
  const altura = Number(prompt(`Digite a altura`))
  return (base * altura) / 2
}

function retangulo() {
  const base = Number(prompt(`Digite a base`))
  const altura = Number(prompt(`Digite a altura`))
  return (base * altura)
}

function quadrado() {
  const lado = Number(prompt(`Digite o lado`))
  return (lado * 2)
}

function trapezio() {
  const baseMenor = Number(prompt(`Digite a base Menor`))
  const baseMaior = Number(prompt(`Digite a base Maior`))
  const altura = Number(prompt(`Digite a base altura`))
  return (baseMenor + baseMaior) * altura / 2
}

function circulo() {
  const raio = Number(prompt(`Digite o raio`))
  return Math.PI * (raio ** 2)
}

function menu() {
  return prompt(`Bem vindo a calculadora geométrica
  Digite a opção desejada:
  -1 area do triangulo
  -2 area do retangulo
  -3 area do quadrado
  -4 area do trapezio
  -5 area do circulo
  -6 Encerrar programa
  `)
}
// // // // // // // // // // // // // // // // // //

function executar() {
  let opcao = 0

  do {
    opcao = Number(menu())
    let resultado

    switch (opcao) {
      case 1:
        resultado = triangulo()
        break
      case 2:
        resultado = retangulo()
        break
      case 3:
        resultado = quadrado()
        break
      case 4:
        resultado = trapezio()
        break
      case 5:
        resultado = circulo()
        break
      case 6:
        alert(`Encerrando programa...`)
        break
      default:
        alert(`Opção invalida`)
        break
    }
    if (resultado) {
      alert(`resultado: ${resultado}`)
    }
  } while (opcao !== 6)
}

executar()