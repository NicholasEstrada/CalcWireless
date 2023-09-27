function calcularConversaodBm(){

    const potenciaInput = document.getElementById('potencia')
    const potencia = parseFloat(potenciaInput.value)

    if(!isNaN(potencia)){
    const calc = Math.pow(10, (potencia/10))

    document.getElementById('resultado').textContent = calc.toFixed(2)
    }else{
        alert("Por favor, preencha todos os campos corretamente.")
    }

}