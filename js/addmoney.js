document.getElementById('btn-add')
.addEventListener('click', function(event){
event.preventDefault();
// console.log('add money button clicked');

const addMoney = getInputFieldValueById('input-add-money');
const pinNumber = getInputFieldValueById('input-pin');
// console.log('add money with parameter', addMoney, pinNumber);

// **********
if(isNaN(cashOut)){
    alert('Failed to cash out');
    return;
}
// **********

if(pinNumber === 1234){
    const balance = getTextFieldValueId('account-balance');
     // console.log(addMoney, balance);
    const newBalance = balance + addMoney;
    document.getElementById('account-balance').innerText = newBalance;
    
    // add to transaction history
    const p = document.createElement('p');
    p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`
    // console.log(p);
    document.getElementById('transfer-container').appendChild(p);
}
else{
    alert('pleas try agin!')
}
})