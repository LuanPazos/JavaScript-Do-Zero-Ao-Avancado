let pessoa = {
  nome: 'luan',
  idade: 24,
  dizerOla(){
    console.log(`ola mundo, meu nome é ${this.nome}` )
  }
}

console.log(pessoa)

pessoa.dizerOla()