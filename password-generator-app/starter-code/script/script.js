const rangeValue = document.getElementById("character_length");
console.dir(document.getElementById("character_length"));
const value = document.querySelector('.value_range');


rangeValue.oninput = () => {
    value.textContent = rangeValue.value;
    console.log(rangeValue.value);
    
}
