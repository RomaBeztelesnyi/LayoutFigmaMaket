const bill = document.getElementById('bill');



const tips = document.querySelectorAll('.tip');

tips.forEach((tip) => {
    tip.addEventListener('click', (e) => { 
        console.log(parseFloat(e.target.textContent));
          
    })
})
