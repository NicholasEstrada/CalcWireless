function calcularNyquist() {
    const larguraDeBandaInput = document.getElementById('larguraDeBanda')
    const modulacaoInput = document.getElementById('modulacao')

    const larguraDeBanda = parseFloat(larguraDeBandaInput.value)
    const modulacao = parseFloat(modulacaoInput.value)

    const taxa = 2 * larguraDeBanda * modulacao

    console.log(taxa)

    if(!isNaN(modulacao) && !isNaN(larguraDeBanda)){
        const taxa = 2 * larguraDeBanda * modulacao

        document.getElementById('resultado').textContent = taxa.toFixed(2)

    }else{
        alert('Por favor, preencha todos os campos corretamente.')
    }

}