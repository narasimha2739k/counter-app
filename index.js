let count = 0;

const countDisplay = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

function updateUI() {
    countDisplay.textContent = count;

    
    minusBtn.disabled = count === 0;

    // disable plus at 10
    plusBtn.disabled = count === 10;
}

plusBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        updateUI();
    }
});

/*minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateUI();
    }*/
});

updateUI();
