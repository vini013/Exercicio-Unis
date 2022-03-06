const pilha = document.querySelector('#pilha-items');
const input = document.querySelector('#input-pilha');
const addButton = document.querySelector('#add-button');
const removeButton = document.querySelector('#remove-button');

function pushItem() {
    if (input.value === undefined || input.value === '') {
       alert('Digite Algo');
    } else {
        let element = document.createElement('li');
        element.innerText = input.value;
        input.value = '';
        pilha.appendChild(element);
    }
}

function popItem() {
    if (pilha.children.length === 0 ) {
        alert('Pilha Vazia')
    } else {
        pilha.removeChild(pilha.children[pilha.children.length-1]);
    }
}

window.onload = function () {
addButton.addEventListener('click', pushItem);
removeButton.addEventListener('click', popItem);
}
