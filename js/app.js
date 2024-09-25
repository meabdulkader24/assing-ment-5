// common function
function getInputFieldValueById(id) {
    const value = document.getElementById(id).value;
    return value;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    return textValue;
}


// donate and history button
function showSection(id) {
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show section by id
    document.getElementById(id).classList.remove('hidden')
}

let currentBalance = 65000;
const mainBalance = document.getElementById('main-balance');
mainBalance.innerText = currentBalance;


function handleDonation(btnId, inputId, amountId, title) {
    // for modal
    const modal = document.getElementById('modal');
    const close = document.getElementById('btn');
    // const mainAccount = Number(mainBalance.innerText);

    // For donation
    document.getElementById(btnId).addEventListener('click', function () {
        const inputValue = Number(getInputFieldValueById(inputId));
        const textValue = Number(getTextFieldValueById(amountId));
        
        if (!isNaN(inputValue) && inputValue > 0 && inputValue <= currentBalance) {
            const donateAccount = inputValue + textValue;
            document.getElementById(amountId).innerText = donateAccount;
            currentBalance -= inputValue;
            mainBalance.innerText = currentBalance;

            // Add history
            const div = document.createElement('div');
            div.classList.add('border-2', 'p-2', 'space-y-2');
            div.innerHTML = `
          <h4 class="text-xl">${inputValue} TAKA is Donated for ${title}, Bangladesh</h4>
          <p>Date: ${new Date()}</p>
        `
            document.getElementById('history').appendChild(div);
            document.getElementById(inputId).value = '';
            modal.style.display = 'block'
        }
        else {
            alert('Amount is not Valid');
            return;
        }
    })
    // hide modal
    close.onclick = function () {
        modal.style.display = 'none';
    }
}

