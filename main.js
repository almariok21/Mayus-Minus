const btnMayusculas = document.querySelector('.btn-mayusculas');
const btnMinusculas = document.querySelector('.btn-minusculas');
const btnCapitalizar = document.querySelector('.btn-capitalizar');
const outputText = document.querySelector('#outputText');

btnMayusculas.addEventListener('click', convertToMayusculas);
btnMinusculas.addEventListener('click', convertToMinusculas);
btnCapitalizar.addEventListener('click', capitalizeText);

function updateOutput() {
    outputText.innerHTML = document.getElementById('inputText').value;
}


function convertToMayusculas() {
    const textArea = document.getElementById('inputText');
    textArea.value = textArea.value.toUpperCase();
    updateOutput();
}

function convertToMinusculas() {
    const textArea = document.getElementById('inputText');
    textArea.value = textArea.value.toLowerCase();
    updateOutput();
}

function capitalizeText() {
    const textArea = document.getElementById('inputText');
    textArea.value = textArea.value.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    updateOutput();
}

updateOutput();