let x = '';
let y = '';
let symbol = '';
let finish = false;
let result = 0;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+', '-', 'x', '÷', '%', '+/-'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    x = '';
    y = '';
    symbol = '';
    finish = '';
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').addEventListener('click', (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (y ==='' && symbol === '') {
            x += key;
            out.textContent = x;
        } else if (x !== '' && y !== '' && finish) {
            y = key;
            out.textContent = y;
        }
        else {
            y += key;
            out.textContent = y;
        }
        return;
    }

    if (key === '+/-') {
        if (y === '' && symbol === '') {
            x = x ? (-x).toString() : '';
            out.textContent = x;
        } else if (symbol !== '' && !finish) {
            y = y ? (-y).toString() : '';
            out.textContent = y;
        }
        return;
    }

    if (action.includes(key)) { 
        symbol = key;
        out.textContent = symbol;
        return;
    }
    if (key === '=') {
        if(y === '') y = x;
        switch (symbol) {
            case '+':
                x = (+x) + (+y);
                break;
            case '-':
                x = x - y;
                break;
            case 'x':
                x = x * y;
                break;
            case '÷':
                if( y === '0') {
                    alert("Error");
                    clearAll();
                    return;
                }
                x = x / y;
                break;
            case '%':
                x = (y/100) * x;
                break;
        }
       
        
        finish = true;
        out.textContent = x;
    }
});

