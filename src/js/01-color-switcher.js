const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener('click', partyBody);
stopBtn.addEventListener('click', boringBody);


document.body.classList.add('body-switch');
document.querySelectorAll('button').forEach(buttons => {
    buttons.classList.add('button-switch');
})

let interval;
function setBodyColor() {
    
    document.body.style.backgroundColor = getRandomHexColor();
}
function partyBody() {

    interval = setInterval(setBodyColor, 1000);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
}

function boringBody() {
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    clearInterval(interval); 
}