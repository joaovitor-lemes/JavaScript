const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log("Evento Realizado")
    setResultado('Olá')


});


function criaP(){
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qualquer Coisa';

}



function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';    
    resultado.appendChild(p);


}







/*

let peso;
let altura;
imc = peso/(altura*altura);




if (imc < 18.5) {

    console.log("Abaixo do Peso");

} else if(imc >= 18.5 & imc <24.9 ){

    console.log("Peso Normal");

}else if (imc >= 24.9 & imc <29.9 ){
    
    console.log("Sobrepeso");

}else if (imc >= 29.9 & imc < 39.9){

    console.log("Obesidade")
} else {

    console.log("Obesidade Grave")
}

*/