const bill = document.getElementById('bill'); // input
const numberOFPeople = document.getElementById('people'); // input
const tips = document.querySelectorAll('.tip');// nodeList
const tipAmount = document.getElementById('tip_amount');
const total = document.getElementById('total');
const customTip = document.getElementById('tips');
let selectPercent = 0;
function clearActiveTips() {
    tips.forEach(tip => tip.classList.remove('active'));
}
tips.forEach((tip) => {
    tip.addEventListener('click', (e) => {
        e.preventDefault()
        tip.classList.add('active');
        selectPercent = parseFloat(tip.textContent)
        calculateAmount(selectPercent)
    })
})
customTip.addEventListener('blur', () => {
    clearActiveTips();

    const customValue = Number(customTip.value);

    if (!isNaN(customValue) && customValue >= 0) {
        selectPercent = customValue;
        calculateAmount(selectPercent);
    }
    
});
numberOFPeople.addEventListener('blur', ()=> {
    calculateAmount(selectPercent);
})
const calculateAmount = (select) => {
    let billValue = parseFloat(bill.value);
    let numberOfPeopleValue = parseInt(numberOFPeople.value);
    if (billValue < 1 || numberOfPeopleValue < 1) {
        return bill.value = '', numberOFPeople.value = '', selectPercent = 0, customTip.value = '', tipAmount.textContent = `$0.00`, total.textContent = `$0.00`
    }
    if (billValue > 0 && numberOfPeopleValue > 0) {
        let tipAmountValue = (billValue * select) / 100;
        let totalAmount = (billValue + tipAmountValue) / numberOfPeopleValue;
        tipAmount.textContent = `$${(tipAmountValue / numberOfPeopleValue).toFixed(2)}`;
        total.textContent = `$${totalAmount.toFixed(2)}`;
    } else {
        tipAmount.textContent = `$0.00`;
        total.textContent = `$0.00`;
    }
}
// const resetApp = document.querySelector('.reset_btn');
// resetApp.addEventListener('click', ()=> {
//     clearActiveTips()
//     bill.value = '';
//     numberOFPeople.value = '';
//     customTip.value = '';
//     selectPercent = 0;
//     tipAmount.textContent = `$0.00`
//     total.textContent = `$0.00`
// })