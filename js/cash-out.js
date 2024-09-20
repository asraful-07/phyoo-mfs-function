document.getElementById('btn-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-pin-out');
    
// **********
    if(isNaN(cashOut)){
        alert('Failed to cash out');
        return;
    }
// **********

    if(pinNumber === 1234){
        const balances = getTextFieldValueId('account-balance');
        const newBalances = balances - cashOut;
        document.getElementById('account-balance').innerText = newBalances;
         
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.classList.add('p-4');
        div.classList.add('m-2')

        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOut} withdraw new Balance ${newBalances}</p>
        `
        document.getElementById('transfer-container').appendChild(div);
    
    }
    else{
        alert('pleas try agin!')
    }
})