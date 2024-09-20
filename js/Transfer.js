document.getElementById('btn-Transfer').addEventListener('click', function(event){
    event.preventDefault()

    const sendMoney = getInputFieldValueById('input-Transfer');
    const inputPin = getInputFieldValueById('input-pin-Transfer');
// **********
    // if(isNaN(cashOut)){
    //     alert('Failed to cash out');
    //     return;
    // }
// **********
    if(inputPin === 1234){
        const payMoney = getTextFieldValueId('account-balance');
        const newSendMoney = payMoney - sendMoney;
        document.getElementById('account-balance').innerText = newSendMoney;
        
        // add to transfer history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.classList.add('p-4');
        div.classList.add('m-2');
        div.innerHTML = `
         <h4 class="text-2xl font-bold">Transfer money</h4>
        <p>${sendMoney} Transfer new Balance ${newSendMoney}</p>
        `
        document.getElementById('transfer-container').appendChild(div);
    }
    else{
        alert('pleas try agin!')
    }
})