
function ola(nome){

    return `Bom dia, ${nome}`;
}

variavel = ola('Joao');
console.log(variavel);


function soma(a=10,b=1){ // se nao for passado o valor, ele sera 1
    let soma = a+b
    return console.log(soma);
}

soma(2587);

const raiz  = n => n**0.5; // essa é uma função arrow 



