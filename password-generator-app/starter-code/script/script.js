const rangeValue = document.getElementById("character_length");
const value = document.querySelector('.value_range');

const includeUpper = document.getElementById("include_uppercase");
const includeLower = document.getElementById("include_lowercase");
const includeNumbers = document.getElementById("include_numbers");
const includeSymbol = document.getElementById("include_symbol");
const generateBtn = document.querySelector(".btn_generate_password");
const output = document.querySelector(".output_generator .password");



// const firstBarStrength = document.getElementById('first');
// const secondBarStrength = document.getElementById('second');
// const thirdBarStrength = document.getElementById('third');
// const forthBarStrength = document.getElementById('forth');

const bars = document.querySelectorAll('.bar');

console.log(bars);

const strengthText = document.querySelector('.strength_label');

rangeValue.oninput = () => {
    value.textContent = rangeValue.value;
}

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?/|";

const generatePassword = (length, useUpperCase, useLowwerCase, useNumber, useSymbols) => {
    let chars = ''; 
    console.log(chars);
    
    if (useUpperCase) chars += uppercase;
    if (useLowwerCase) chars += lowercase;
    if (useNumber) chars += numbers;
    if (useSymbols) chars += symbols;
    if (chars.length === 0) return; 

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        console.log(randomIndex);
        
        password += chars[randomIndex];
        console.log(password);
        
    }

    return password;

}

generateBtn.addEventListener('click', ()=> {
    const generate = generatePassword(
        parseInt(rangeValue.value),
        includeUpper.checked,
        includeLower.checked,
        includeNumbers.checked,
        includeSymbol.checked,
    )
    output.textContent = generate;
    passwordCopy.textContent = '';

    let countCheckbox = 0;
    
    if (includeUpper.checked)  countCheckbox += 1;
    if (includeLower.checked)  countCheckbox += 1;
    if (includeNumbers.checked)  countCheckbox += 1;
    if (includeSymbol.checked)  countCheckbox += 1;
    console.log(countCheckbox);

    bars.forEach(bar => {
        bar.className = 'bar'
    })

    switch (countCheckbox) {
        case 1:
            strengthText.textContent = 'too weak!'
            bars[0].classList.add('low')
            break;
        case 2:
            strengthText.textContent = 'weak'
            bars[0].classList.add('weak')
            bars[1].classList.add('weak')
            break;
        case 3:
            strengthText.textContent = 'medium'
            bars[0].classList.add('medium')
            bars[1].classList.add('medium')
            bars[2].classList.add('medium')
            break;
        case 4:
            strengthText.textContent = 'strong'
            bars[0].classList.add('strong')
            bars[1].classList.add('strong')
            bars[2].classList.add('strong')
            bars[3].classList.add('strong')
            break;

        default:
            strengthText.textContent = ''
            break;
    }
    // switch (countCheckbox) {
    //     case 1:
    //         strengthText.textContent = 'too weak!'
    //         firstBarStrength.classList.add('low')
    //         break;
    //     case 2:
    //         strengthText.textContent = 'weak'
    //         firstBarStrength.classList.add('weak')
    //         secondBarStrength.classList.add('weak')
    //         break;
    //     case 3:
    //         strengthText.textContent = 'medium'
    //         firstBarStrength.classList.add('medium')
    //         secondBarStrength.classList.add('medium')
    //         thirdBarStrength.classList.add('medium')
    //         break;
    //     case 4:
    //         strengthText.textContent = 'strong'
    //         firstBarStrength.classList.add('strong')
    //         secondBarStrength.classList.add('strong')
    //         thirdBarStrength.classList.add('strong')
    //         forthBarStrength.classList.add('strong')
    //         break;

    //     default:
    //         strengthText.textContent = ''
    //         break;
    // }
})

const copiedBtn = document.querySelector('.cope-btn');
const passwordCopy = document.querySelector('.copied')

copiedBtn.addEventListener('click', () => {
    const text = output.textContent;
    navigator.clipboard.writeText(text).then(() => {
        passwordCopy.textContent = 'copied';
    setTimeout(() => {
        passwordCopy.textContent = ''
    },5000)
    })
})