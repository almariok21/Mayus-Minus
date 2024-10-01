const btnMayusculas = document.querySelector('.btn-mayusculas');
const btnMinusculas = document.querySelector('.btn-minusculas');
const btnCapitalizar = document.querySelector('.btn-capitalizar');
const btnCopiar = document.querySelector('.btn-copiartext');
const outputText = document.querySelector('#outputText');

btnMayusculas.addEventListener('click', convertToMayusculas);
btnMinusculas.addEventListener('click', convertToMinusculas);
btnCapitalizar.addEventListener('click', capitalizeText);
btnCopiar.addEventListener('click', copyText);

function copyText() {
    const textArea = document.getElementById('inputText');
    navigator.clipboard.writeText(textArea.value);
    btnCopiar.innerHTML = 'Copiado!';
    setTimeout(() => {
        btnCopiar.innerHTML = 'Copiar el Texto';
    }, 500);
}


function convertToMayusculas() {
    const textArea = document.getElementById('inputText');
    textArea.value = textArea.value.toUpperCase();
}

function convertToMinusculas() {
    const textArea = document.getElementById('inputText');
    textArea.value = textArea.value.toLowerCase();
}

function capitalizeText() {
    const textArea = document.getElementById('inputText');
    textArea.value = textArea.value.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
