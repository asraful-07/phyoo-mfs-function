document.getElementById('btn-bill').addEventListener('click', function(event){
    event.preventDefault();

    const billAmount = getInputFieldValueById('input-bill');
    const inputPin = getInputFieldValueById('input-pin-bill');

    if(inputPin === 1234){
        const payBill = getTextFieldValueId('account-balance');
        const newAmount = payBill - billAmount;
        document.getElementById('account-balance').innerText = newAmount;
    
        // added transfer history
        const div = document.createElement('div')
        div.classList.add('bg-yellow-300')
        div.classList.add('p-4');
        div.classList.add('m-2')
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${billAmount} PAy Bill ${newAmount}</p>
        `
        document.getElementById('transfer-container').appendChild(div);
    }
    else{
        alert('pleas try agin!')
    }
})