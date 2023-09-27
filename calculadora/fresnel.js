const inputChannel = document.getElementById('inputChannel');
const frequencia = document.getElementById('frequencia');

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
    const distancia = parseFloat(document.getElementById('distancia').value)/1000;
    const frequencia = parseFloat(document.getElementById('frequencia').value);
    const objeto = parseFloat(document.getElementById('objeto').value)/1000;

    if (!isNaN(distancia) && !isNaN(frequencia) && !isNaN(objeto)) {

        const clearance = 550 * Math.sqrt((objeto * (distancia - objeto )) / (frequencia * distancia));

        document.getElementById('resultado').textContent = clearance.toFixed(2);

    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}