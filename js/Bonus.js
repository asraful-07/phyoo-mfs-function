document.getElementById('btn-Bonus').addEventListener('click', function(event){
    event.preventDefault();

    const getBonus = getInputFieldValueById('input-Bonus');
    const inputPin = getInputFieldValueById('input-pin-Bonus');

    if(inputPin === 1234){
        const addCash = getTextFieldValueId('account-balance');
        const newCash = addCash + getBonus;
        document.getElementById('account-balance').innerText = newCash;
    }
    else{
        alert('pleas try agin!')
    }
 
})