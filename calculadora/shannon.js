function calcularShannon() {

    const grandezaHz = parseInt(document.getElementById('grandezaHz').value);

    const larguraDeBanda = parseFloat(document.getElementById('larguraDeBanda').value);
    const sinalRuido = parseFloat(document.getElementById('sinalRuido').value);

    if (!isNaN(larguraDeBanda) && !isNaN(sinalRuido)) {
        const capacidade = (larguraDeBanda*grandezaHz) * Math.log2(1 + Math.pow(10, sinalRuido / 10));
        document.getElementById('resultadoShannon').textContent = capacidade.toFixed(2) + ' bps';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}
