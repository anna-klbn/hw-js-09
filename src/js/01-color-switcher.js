const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener('click', partyBody);


document.body.classList.add('body-switch');
document.querySelectorAll('button').forEach(buttons => {
    buttons.classList.add('button-switch');
})


