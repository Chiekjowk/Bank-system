const deposit = document.getElementById('deposit')
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');

const deposit_btn = document.querySelector('.deposit-btn');
const withdraw_btn = document.querySelector('.withdraw-btn');

const withdraw_inputBox = document.querySelector('.withdraw_input-box');
const deposit_inputBox = document.querySelector('.deposit_input-box');


deposit_btn.addEventListener('click', () => {
    
    const value = deposit_inputBox.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
   
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    deposit_inputBox.value = '';
  
    
})

withdraw_btn.addEventListener('click', () => {
    const value = withdraw_inputBox.value;
    
    if(value > Number(balance.innerText)) {
        alert('Insufficient balance');
        return;
    }
    const withdrawValue = Number(withdraw.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) - Number(value);
 
    withdraw.innerText = withdrawValue;
    balance.innerText = balanceValue;
    withdraw_inputBox.value = '';

})

