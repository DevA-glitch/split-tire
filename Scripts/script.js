'use strict';

const billEl = document.getElementById('bill');
const tipCustomEl = document.querySelector('.tip-custom');
const tipPerEL = document.querySelectorAll('.tip-percent');
const peropleEl = document.getElementById('people');
const tipAmountEl = document.getElementById('tip-amount');
const totalAmountEl = document.getElementById('total-amount')
const btnResetEL = document.getElementById('btnReset');  

let persons, bill, tipPercent;

function init() {
    persons = 0;
    bill = 0;
    tipPercent = 0

    tipAmountEl.innerText = `$0.00`;
    totalAmountEl.innerHTML = `$0.00`;

    billEl.value = null;
    peropleEl.value = null;
    tipAmountEl.value = null; 
}

init();


function calculationBillTilEl (tipPercent) {
    bill = Number(billEl.value);
    persons = Number(peropleEl.value)

    const tipTotal = bill * tipPercent;
    const amountTotal = bill + tipTotal;
    const perPersonTip = tipTotal / persons;
    const perPersonAmount = amountTotal / persons;
    
    tipAmountEl.innerText = `$` + perPersonTip;
    totalAmountEl.innerText = `$` + perPersonAmount;
}


//event listeners
for (let i = 0; i < tipPerEL.length; i++) {
    tipPerEL[i].addEventListener('click', function () {
    tipPercent = Number(this.value) / 100;
    calculationBillTilEl(tipPercent);
    });
  }
  
    tipCustomEl.addEventListener('change', function () {
    tipPercent = Number(this.value) / 100;
    calculationBillTilEl(tipPercent);
    this.value = null;
  });
  
  btnResetEL.addEventListener('click', function () {
    init();
  });
  
  //initial settings
     init();
  