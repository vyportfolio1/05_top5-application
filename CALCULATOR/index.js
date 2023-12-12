let calculation = '';
let result = 0;   

function updateCal(digit) {
  calculation += digit;
  document.getElementById('rezultat').value = calculation;
  console.log(calculation);
}

function rezult() {
  result = eval(calculation);
  document.getElementById('rezultat').value = result;
  console.log(result);
}

function c() {
  calculation = '';
  result = 0;   
  document.getElementById('rezultat').value = '';
  console.log(calculation);
}