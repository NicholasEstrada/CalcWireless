function calcularConversaoMw(){

    const potenciaInput = document.getElementById('potencia')
    const potencia = parseFloat(potenciaInput.value)

    if(!isNaN(potencia)){
    const calc = 10 * Math.log10(potencia)

    document.getElementById('resultado').textContent = calc.toFixed(2)
    }else{
        alert("Por favor, preencha todos os campos corretamente.")
    }

}