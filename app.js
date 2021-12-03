"Use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millesecond = 0;

let cron = 0;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => start();
document.form_main.reset.onclick = () => start();

function start() {
    pause();
    cron = setInterval(() => {TimeRanges(); }, 10);
}

function pause() {
    clearInterval(cron);  
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '';
    document.getElementById('minute').innerText = '';
    document.getElementById('second').innerText = '';
    document.getElementById('millisecond').innerText = '';
}

function timer() {
    if((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
    }
    if (second == 60) {
    second = 0;
    minute++;
    }
}

if (minute == 60) {
minute = 0;
hour ++;
}

document.getElementById('hour').innerText = returnData(hour);
document.getElementById('minute').innerText = returnData(minute);
document.getElementById('second').innerText = returnData(second);
document.getElementById('millisecond').innerText = returnData(millisecond);

}

function returnData(input) {
    return input > 10 ? input : `${input}`
}
