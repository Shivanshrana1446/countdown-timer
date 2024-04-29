let countdown;
function startTimer() {
const hoursInput = document.getElementById('hours').value;
const minutesInput = document.getElementById('minutes').value;
const timerDisplay = document.getElementById('timer');
let totalSeconds = parseInt(hoursInput)*3600+parseInt(minutesInput)*60;

function displayTimeLeft(totalSeconds) {
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds % 3600)/60);
    const seconds = totalSeconds % 60;
    const display = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;//template literals
    timerDisplay.textContent = display;
}

function timer(totalSeconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + (totalSeconds * 1000);
    displayTimeLeft(totalSeconds);

    countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);
    
    if(secondsLeft>0){
        document.getElementById('img1').style.display='none';
        document.getElementById('img2').style.display='none';
        document.getElementById('img3').style.display='block';
    }
    if (secondsLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.textContent = 'END';
        document.getElementById('img1').style.display='none';
        document.getElementById('img2').style.display='block';
        document.getElementById('img3').style.display='none';
        return;
    }
    displayTimeLeft(secondsLeft);
    }, 1000);

}
timer(totalSeconds);
}

function changeTheme(theme) {
    $('body').removeClass('theme-anime theme-space theme-nature');
    $('body').addClass('theme-' + theme);
  }