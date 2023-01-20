'use strict';

/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const checkbutton = document.createElement('button');
checkbutton.setAttribute('id', 'btnToClick');
checkbutton.innerText = 'Haz click aquí'
document.body.append(checkbutton);

const inputClick = document.querySelector('.click');
checkbutton.addEventListener("click", getInputClick);

function getInputClick(){
    console.log(`Valor del input click: ${inputClick.value}`);
}


/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

const inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', getInputFocus);

function getInputFocus(){
    console.log(`Valor del input focus: ${inputFocus.value}`);
}


/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', getInputValue);

function getInputValue(){
    console.log(`Valor del input focus: ${inputValue.value}`);
}

