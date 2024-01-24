const buttonCript = document.querySelector('.button-cript');
const buttonDecript = document.querySelector('.button-descript');

const buttonCopy = document.querySelector('.button-copy');
const displayCript = document.querySelector('.displayCript');

const input = document.querySelector('textarea');
const display = document.querySelector('.displayCript');

const cardDescript = document.querySelector('.cardDescript');
const cardDescriptEmpty = document.querySelector('.cardDescript-empty');


const criptografia = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decriptografia = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function criptografar(texto) {

    if (texto === '') {
        cardDescript.classList.add('hidden');
        cardDescriptEmpty.classList.remove('hidden');
        return;
    }

    let textoCriptografado = texto;
    for (let chave in criptografia) {
        let regex = new RegExp(chave, 'g');
        textoCriptografado = textoCriptografado.replace(regex, criptografia[chave]);
    }
    cardDescript.classList.remove('hidden');
    cardDescriptEmpty.classList.add('hidden');
    return textoCriptografado;
}

function descriptografar(textoCriptografado) {

    if (textoCriptografado === '') {
        cardDescript.classList.add('hidden');
        cardDescriptEmpty.classList.remove('hidden');
        return;
    }

    let texto = textoCriptografado;
    for (let chave in decriptografia) {
        let regex = new RegExp(chave, 'g'); 
        texto = texto.replace(regex, decriptografia[chave]);
    }
    cardDescript.classList.remove('hidden');
    cardDescriptEmpty.classList.add('hidden');
    return texto;
}

buttonCript.addEventListener('click', () => {

    let texto = input.value;
    let textoCriptografado = criptografar(texto);
    display.textContent = textoCriptografado;
});

buttonDecript.addEventListener('click', () => {

    let textoCriptografado = input.value;
    let texto = descriptografar(textoCriptografado);
    display.textContent = texto;
});


buttonCopy.addEventListener('click', () => {

    let tempTextArea = document.createElement('textarea');
    tempTextArea.value = displayCript.textContent;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextArea);

    let messageBox = document.getElementById('messageBox');
    messageBox.classList.remove('hidden');
    messageBox.classList.add('show');

    setTimeout(() => {
        messageBox.classList.remove('show');
        messageBox.classList.add('hidden');
    }, 2000);
});