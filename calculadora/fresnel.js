const inputChannel = document.getElementById('inputChannel');
const frequencia = document.getElementById('frequencia');

function validarNumero(inputChannel) {
    const valor = inputChannel.value;
    const mensagemErro = document.getElementById('mensagemErro');
    
    if (valor < 1 || valor > 13) {
        mensagemErro.textContent = 'O número deve estar entre 1 e 13.';
        inputChannel.setCustomValidity(''); // Limpa qualquer erro personalizado
    } else {
        mensagemErro.textContent = '';
        inputChannel.setCustomValidity(''); // Limpa qualquer erro personalizado
    }
}

inputChannel.addEventListener('input', function () {
    const channels = [
        2412, 2417, 2422, 2427, 2432, 2437, 2442, 2447, 2452, 2457, 2462, 2467, 2472
    ];

    const valorChannel = parseInt(inputChannel.value); 

    if (!isNaN(valorChannel) && valorChannel >= 1 && valorChannel <= 13) {
        frequencia.value = channels[valorChannel - 1];
    } else {
        frequencia.value = ''; 
    }
});

function calcularClearance() {
    const grandezaDitancia = parseInt(document.getElementById('distanciaAntena').value);
    let distancia = parseFloat(document.getElementById('distancia').value)/1000;
    distancia = distancia*grandezaDitancia;

    const grandezaFrequencia = parseInt(document.getElementById('grandezaHz').value);
    let frequencia = parseFloat(document.getElementById('frequencia').value);
    frequencia = frequencia*grandezaFrequencia;

    const grandezaObjeto = parseInt(document.getElementById('distanciaObj').value);
    let objeto = parseFloat(document.getElementById('objeto').value)/1000;
    objeto = objeto*grandezaObjeto;

    if (!isNaN(distancia) && !isNaN(frequencia) && !isNaN(objeto)) {

        const clearance = 550 * Math.sqrt((objeto * (distancia - objeto )) / (frequencia * distancia));

        document.getElementById('resultado').textContent = clearance.toFixed(2);

    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}