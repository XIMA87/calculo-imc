//Captura de Evento de Submit do formulário

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacaoImc = getClassificacaoImc(imc);

    const msg = `Seu IMC é ${imc} (${classificacaoImc}).`;

    setResultado(msg, true);

});

function getClassificacaoImc (imc) {
    const classificacao = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc > 39.9) return classificacao[5]
    if (imc >= 34.9) return classificacao[4]
    if (imc >= 29.9) return classificacao[3]
    if (imc >= 24.9) return classificacao[2]
    if (imc >= 18.5) return classificacao[1]
    if (imc < 18.5) return classificacao[0]

}

function getImc (peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function criaParagrafo () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('fundo-resultado-1')
    } else {
        p.classList.add('fundo-resultado-2')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}