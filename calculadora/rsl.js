function calcularRSL(){
    const potencia = parseFloat(document.getElementById('potencia').value);
    const ganhoAntenaTX = parseFloat(document.getElementById('ganhoAntenaTX').value);
    const perdaCabosTX = parseFloat(document.getElementById('perdaCabosTX').value);
    const FSLP = parseFloat(document.getElementById('FSLP').value);
    const ganhoAntenaRX = parseFloat(document.getElementById('ganhoAntenaRX').value);
    const perdaCabosRX = parseFloat(document.getElementById('perdaCabosRX').value);


    if(!isNaN(potencia) && !isNaN(ganhoAntenaTX) && !isNaN(perdaCabosTX) && !isNaN(FSLP) && !isNaN(ganhoAntenaRX) && !isNaN(perdaCabosRX) ){
        let resultado = (potencia + ganhoAntenaTX + ganhoAntenaRX) - (perdaCabosTX + perdaCabosRX + FSLP);

        document.getElementById('resultado').textContent = resultado.toFixed(2) + " dBm";
    }else{
        alert('Por favor, preencha todos os campos corretamente.');
    }
}