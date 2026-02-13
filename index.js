let count = 0;

const countDisplay = document.getElementById("count");
const plusBtn = document.getElementById("increase");
const minusBtn = document.getElementById("decrease");

function updateUI() {
    // HARD LIMITS (real protection)
    if (count < 0) count = 0;
    if (count > 10) count = 10;

    countDisplay.textContent = count;

    minusBtn.disabled = count === 0;
    plusBtn.disabled = count === 10;
}

plusBtn.addEventListener("click", () => {
    count++;
    updateUI();
});

minusBtn.addEventListener("click", () => {
    count--;
    updateUI();
});

// initial state
updateUI();
