const formulaFresnel = document.getElementById('formulaFresnel');
formulaFresnel.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula');
    conteudo.innerHTML = '';
    fetch('forms/fresnel.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data;
            carregarScriptFresnel();
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error);
        });
});

function carregarScriptFresnel() {
    const script = document.createElement('script');
    script.src = 'calculadora/fresnel.js'; // Caminho para o seu arquivo JavaScript
    script.async = true;

    script.onload = function () {
        // O código JavaScript foi carregado e está pronto para ser usado
    };

    document.body.appendChild(script);
}


const formulaShannon = document.getElementById('formulaShannon');
formulaShannon.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula');
    conteudo.innerHTML = '';
    fetch('forms/shannon.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data;
            carregarScriptShannon()
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error);
        });
});

function carregarScriptShannon() {
    const script = document.createElement('script');
    script.src = 'calculadora/shannon.js'; // Caminho para o seu arquivo JavaScript
    script.async = true;

    script.onload = function () {
        // O código JavaScript foi carregado e está pronto para ser usado
    };

    document.body.appendChild(script);
}

const formulaNyquist = document.getElementById('formulaNyquist')
formulaNyquist.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula')
    conteudo.innerHTML=''
    fetch('forms/nyquist.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data
            carregarScriptNyquist()
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error)
        })
})

function carregarScriptNyquist(){
    const script = document.createElement('script')
    script.src = 'calculadora/nyquist.js'
    script.async = true

    script.onload = function () {

    }

    document.body.appendChild(script)
}

const formulaMiliwatts = document.getElementById('formulaConvertMw')
formulaMiliwatts.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula')
    conteudo.innerHTML=''
    fetch('forms/miliwatts.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data
            carregarScriptMiliwatts()
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error)
        })
})

function carregarScriptMiliwatts(){
    const script = document.createElement('script')
    script.src = 'calculadora/miliwatts.js'
    script.async = true

    script.onload = function () {

    }

    document.body.appendChild(script)
}


const formulaDecibeis = document.getElementById('formulaConvertdBm')
formulaDecibeis.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula')
    conteudo.innerHTML=''
    fetch('forms/decibeis.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data
            carregarScriptDecibeis()
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error)
        })
})

function carregarScriptDecibeis(){
    const script = document.createElement('script')
    script.src = 'calculadora/decibeis.js'
    script.async = true

    script.onload = function () {

    }

    document.body.appendChild(script)
}

const formulaEIRP = document.getElementById('formulaEIRP')
formulaEIRP.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula')
    conteudo.innerHTML=''
    fetch('forms/eirp.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data
            carregarScriptEirp()
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error)
        })
})

function carregarScriptEirp(){
    const script = document.createElement('script')
    script.src = 'calculadora/eirp.js'
    script.async = true

    script.onload = function () {

    }

    document.body.appendChild(script)
}

const formulaFSLP = document.getElementById('formulaFSLP')
formulaFSLP.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula')
    conteudo.innerHTML=''
    fetch('forms/fslp.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data
            carregarScriptFslp()
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error)
        })
})

function carregarScriptFslp(){
    const script = document.createElement('script')
    script.src = 'calculadora/fslp.js'
    script.async = true

    script.onload = function () {

    }

    document.body.appendChild(script)
}

const formulaRSL = document.getElementById('formulaRSL')
formulaRSL.addEventListener('click', () => {
    const conteudo = document.querySelector('.formula')
    conteudo.innerHTML=''
    fetch('forms/rsl.html')
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data
            carregarScriptRSL()
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo HTML:', error)
        })
})

function carregarScriptRSL(){
    const script = document.createElement('script')
    script.src = 'calculadora/rsl.js'
    script.async = true

    script.onload = function () {

    }

    document.body.appendChild(script)
}