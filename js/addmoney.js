document.getElementById('btn-add')
.addEventListener('click', function(event){
event.preventDefault();
// console.log('add money button clicked');

const addMoney = getInputFieldValueById('input-add-money');
const pinNumber = getInputFieldValueById('input-pin');
// console.log('add money with parameter', addMoney, pinNumber);

// **********
// if(isNaN(cashOut)){
//     alert('Failed to cash out');
//     return;
// }
// **********

if(pinNumber === 1234){
    const balance = getTextFieldValueId('account-balance');
     // console.log(addMoney, balance);
    const newBalance = balance + addMoney;
    document.getElementById('account-balance').innerText = newBalance;
    
    // add to transaction history
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300')
    div.classList.add('m-2')
    div.classList.add('p-4')
    div.innerHTML = `
    <h4 class="text-2xl font-bold">Cash add</h4>
    <p>Added new Balance</p>
    `
    // console.log(p);
    document.getElementById('transfer-container').appendChild(div);
}
else{
    alert('pleas try agin!')
}
})