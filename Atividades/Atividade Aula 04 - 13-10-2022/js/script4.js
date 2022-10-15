/*function enviar(){
    const valor1 = document.getElementById('valor1');
    const valor2 = document.getElementById('valor2');


    if(valor1.value == '' && valor2.value == ''){
        alert('Preencha todos os campos para calcular!');
    }
}*/


function calcular(){
    const valor1 = Number(document.getElementById('valor1').value);
    const valor2 = Number(document.getElementById('valor2').value);
   
    if(departamento.value == 1){
        const resultadoOperacao = valor1 + valor2;
        document.getElementById('resultado').value = resultadoOperacao;
    }
    else if(departamento.value == 2){
        const resultadoOperacao = valor1 - valor2;
        document.getElementById('resultado').value = resultadoOperacao;
    }
    else if(departamento.value == 3){
        const resultadoOperacao = valor1 / valor2;
        document.getElementById('resultado').value = resultadoOperacao.toFixed(2);
     
    }
    else{
        const resultadoOperacao = valor1 * valor2;
        document.getElementById('resultado').value = resultadoOperacao;
    }
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click",calcular);



typeof(valor1);