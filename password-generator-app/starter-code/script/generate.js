import { CONFIG } from "./config.js";
export const generatePassword = (length, useUpperCase, useLowwerCase, useNumber, useSymbols) => {
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