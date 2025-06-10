const pessoa1 = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,
   
    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    }
}

pessoa1.fala()