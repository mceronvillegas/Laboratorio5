const submit = document.getElementById('calcular');


submit.addEventListener('click', function(event){
    event.preventDefault();

    const operador1 = parseInt(document.getElementById('operador1').value)
    const signo = document.getElementById('signo').value
    const operador2 = parseInt(document.getElementById('operador2').value)

    let resultado
    
if (signo == "+") {
    resultado = operador1+operador2;
} else if (signo == "-") {
    resultado = operador1-operador2;
} else if (signo == "*") {
    resultado = operador1*operador2;
} else if (signo == "/") {
    if (operador2 == 0) {
        resultado="ERROR: ¡No se puede dividir por cero!";
    }  else { 
            resultado = operador1/operador2
    }
} else { 
    resultado = "ERROR: operador no valido";
}


document.getElementById('resultado').innerText = resultado;
})