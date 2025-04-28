const rangeValue = document.getElementById("character_length");
const value = document.querySelector('.value_range');

const includeUpper = document.getElementById("include_uppercase");
const includeLower = document.getElementById("include_lowercase");
const includeNumbers = document.getElementById("include_numbers");
const includeSymbol = document.getElementById("include_symbol");
const generateBtn = document.querySelector(".btn_generate_password");
const output = document.querySelector(".output_generator .password");

const bars = document.querySelectorAll('.bar');

const strengthText = document.querySelector('.strength_label');

rangeValue.oninput = () => {
    value.textContent = rangeValue.value;
}

const CONFIG = {
    CHARS: {
        UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
        NUMBERS: "0123456789",
        SYMBOLS: "!@#$%^&*()_+{}[]<>?/|"
    },
    STRENGTH: {
        TOO_WEAK: { text: 'too weak!', class: 'low'},
        WEAK: { text: 'weak', class: 'weak'},
        MEDIUM: { text: 'medium', class: 'medium'},
        STRONG: { text: 'strong', class: 'strong'}
    },
    COPY_TIMEOUT: 5000
};

const generatePassword = (length, useUpperCase, useLowwerCase, useNumber, useSymbols) => {
    let chars = '';
    if (useUpperCase) chars += CONFIG.CHARS.UPPERCASE;
    if (useLowwerCase) chars += CONFIG.CHARS.LOWERCASE;
    if (useNumber) chars += CONFIG.CHARS.NUMBERS;
    if (useSymbols) chars += CONFIG.CHARS.SYMBOLS;
    if (chars.length === 0) return; 

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
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
    
    if (includeLower.checked)  countCheckbox ++;
    if (includeUpper.checked)  countCheckbox ++;
    if (includeNumbers.checked)  countCheckbox ++;
    if (includeSymbol.checked)  countCheckbox ++;
    console.log(countCheckbox);

    bars.forEach(bar => bar.className = 'bar')

    switch (countCheckbox) {
        case 1:
            strengthText.textContent = CONFIG.STRENGTH.TOO_WEAK.text
            bars[0].classList.add(CONFIG.STRENGTH.TOO_WEAK.class)
            break;
        case 2:
            strengthText.textContent = CONFIG.STRENGTH.WEAK.text
            bars[0].classList.add(CONFIG.STRENGTH.WEAK.class)
            bars[1].classList.add(CONFIG.STRENGTH.WEAK.class)
            
            break;
        case 3:
            strengthText.textContent = CONFIG.STRENGTH.MEDIUM.text
            bars[0].classList.add(CONFIG.STRENGTH.MEDIUM.class)
            bars[1].classList.add(CONFIG.STRENGTH.MEDIUM.class)
            bars[2].classList.add(CONFIG.STRENGTH.MEDIUM.class)
            break;
        case 4:
            strengthText.textContent = CONFIG.STRENGTH.STRONG.text
            bars.forEach(bar =>  bar.classList.add(CONFIG.STRENGTH.STRONG.class))
            break;

        default:
            strengthText.textContent = ''
            break;
    }
})

const copiedBtn = document.querySelector('.cope-btn');
const passwordCopy = document.querySelector('.copied')

copiedBtn.addEventListener('click', () => {
    const text = output.textContent;
    navigator.clipboard.writeText(text).then(() => {
        passwordCopy.textContent = 'copied';
    setTimeout(() => {
        passwordCopy.textContent = ''
    },CONFIG.COPY_TIMEOUT)
    })
})