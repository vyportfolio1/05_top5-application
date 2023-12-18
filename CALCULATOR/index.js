let calculation = '';
let result = 0;   

function updateCal(digit) {
    calculation += digit;
    document.getElementById('rezultat').value = calculation;
}

function calculateResult() {
    try {
        result = Function(`'use strict'; return (${calculation})`)();
        document.getElementById('rezultat').value = result;
    } catch (error) {
        document.getElementById('rezultat').value = 'Error';
    }
}

function clearInput() {
    calculation = '';
    result = 0;   
    document.getElementById('rezultat').value = '';
}