let count = 0;

const countDisplay = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

function updateDisplay() {
    countDisplay.textContent = count;

    // Disable buttons at limits
    plusBtn.disabled = count === 10;
    minusBtn.disabled = count === 0;
}

plusBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        updateDisplay();
    }
});

minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

// initialize state
updateDisplay();
