let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

function updateDisplay(){
    countDisplay.textContent = count;

    if(count >= 10){
        increaseBtn.disabled = true;
    } else {
        increaseBtn.disabled = false;
    }
}

increaseBtn.addEventListener("click", () => {
    if(count < 10){
        count++;
        updateDisplay();
    }
});

decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

updateDisplay();
