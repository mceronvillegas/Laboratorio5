const formulario = document.getElementById("formulario")


formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const operador1 = parseInt(document.getElementById('operador1').value);
    const signo = parseInt(document.getElementById('signo').value); 
    const operador2 = parseInt(document.getElementById('operador2').value);
    
    if (signo == "+") {
        resultado = operador1 + operador2;
    } else if(operador == "-") {
        resultado = operador1 - operador2; 
    } else if(operador == "*") {
        resultado = operador1 *  operador2;
    } else if(operador == "/") {
        resultado = operador1 / operador2;
    }



    document.getElementById('resultado').innerText = textoFinal
})