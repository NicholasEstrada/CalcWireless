function calcularFSLP(){
    let larguraDeBanda = parseFloat(document.getElementById('larguraDeBanda').value)
    const grandezaHz = document.getElementById('grandezaHz').value

    if (grandezaHz == 'Hz'){
        larguraDeBanda = larguraDeBanda*1000000;
    } else if (grandezaHz == 'KHz'){
        larguraDeBanda = larguraDeBanda*1000;
    } else if (grandezaHz == 'MHz'){
        larguraDeBanda = larguraDeBanda
    } else if (grandezaHz == 'GHz'){
        larguraDeBanda = larguraDeBanda/1000
    } 

    let distancia = parseFloat(document.getElementById('distancia').value)
    const grandezaDistancia = parseInt(document.getElementById('grandezaDistancia').value)
    distancia = distancia*grandezaDistancia

    const fslp = 32.4 + (20 * Math.log10(larguraDeBanda)) + (20 * Math.log10(distancia))

    document.getElementById('resultado').textContent = fslp.toFixed(2) + " dB"
    
}