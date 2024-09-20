function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // console.log(id,inputValue, inputNumber);
    return inputNumber;
}

function getTextFieldValueId(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    // hide all the sections
    document.getElementById('cash-add-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('transfer-from').classList.add('hidden');
    document.getElementById('cash-Transfer-from').classList.add('hidden');
    document.getElementById('cash-Bonus-from').classList.add('hidden');
    document.getElementById('cash-bill-from').classList.add('hidden');
    // show the section with the  provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}