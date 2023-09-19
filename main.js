const audio = new Audio("./heart.mp3");


const tlacitko = document.querySelector("button");

tlacitko.addEventListener("click", () => {
    audio.play();
});
