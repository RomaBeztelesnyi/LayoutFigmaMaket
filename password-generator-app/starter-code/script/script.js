import { CONFIG } from "./config.js";
import { generatePassword } from "./generate.js";
import { changeProgress } from "./checkProgress.js";
const rangeValue = document.getElementById("character_length");
const value = document.querySelector('.value_range');
const includeUpper = document.getElementById("include_uppercase");
const includeLower = document.getElementById("include_lowercase");
const includeNumbers = document.getElementById("include_numbers");
const includeSymbol = document.getElementById("include_symbol");
const generateBtn = document.querySelector(".btn_generate_password");
const output = document.querySelector(".output_generator .password");

export const bars = document.querySelectorAll('.bar');

export const strengthText = document.querySelector('.strength_label');

rangeValue.oninput = () => {
    value.textContent = rangeValue.value;
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

    changeProgress(countCheckbox, strengthText )

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

