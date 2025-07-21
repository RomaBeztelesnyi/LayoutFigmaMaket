import {bars, strengthText} from './script.js'
export function changeProgress(progress) {
    if(progress === 0) {
        strengthText.textContent = ''
        return
    }
    const mapping = {
        1: ['too weak', 'low'],
        2: ['weak', 'weak'],
        3: ['medium', 'medium'],
        4: ['strong', 'strong']
    }
    strengthText.textContent = mapping[progress][0]
    for(let i = 1; i <= progress; i++) {
        bars[i-1].classList.add(mapping[progress][1])
    }
}