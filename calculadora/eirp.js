function calcularEirp(){
    const potencia = parseFloat(document.getElementById('potencia').value);
    const ganhoAntena = parseFloat(document.getElementById('ganhoAntena').value);
    const perdaCabos = parseFloat(document.getElementById('perdaCabos').value);


    if(!isNaN(potencia) && !isNaN(ganhoAntena) && !isNaN(perdaCabos) ){
        let resultado = (potencia + ganhoAntena) - perdaCabos;

        document.getElementById('resultado').textContent = resultado.toFixed(2) + " dBm";
    }else{
        alert('Por favor, preencha todos os campos corretamente.');
    }

}