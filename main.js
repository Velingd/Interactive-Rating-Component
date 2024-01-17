const mainContainer = document.querySelector(".card");
const thanksContainer = document.querySelector(".thankyou__card");

const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".number");



submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

rates.forEach((rates)  => {
    rates.addEventListener("click", () => {
        rating.innerHTML = rates.innerHTML;

    }) 
    
});


