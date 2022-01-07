"use strict";
// import Swal from 'sweetalert2';
const stopBtn = document.querySelector('.cronometro__btn--stop');
const startBtn = document.querySelector('.cronometro__btn--start');
const resetBtn = document.querySelector('.cronometro__btn--reset');
const markBtn = document.querySelector('.cronometro__btn--mark');
const cronometro = new Cronometro();
const estadisticas = new Estadisticas();
//---
let cron;
function stop() {
    clearInterval(cron);
}
function run() {
    const timer = document.querySelector('.cronometro__time');
    cron = setInterval(() => {
        timer.innerHTML = cronometro.formatedTime();
        cronometro.configTime();
    }, 1000);
}
function customAlert(text) {
    // Swal.fire({
    //   title: text,
    //   width: 600,
    //   padding: '3em',
    //   color: '#716add',
    //   background: '#fff',
    //   backdrop: 'rgba(0,0,123,0.4)'
    // });
    alert(text);
}
//TODO: usar swite-alert o similares para las alertas
//--
stopBtn.addEventListener('click', e => {
    if (cronometro.getIsRunning()) {
        cronometro.stop();
        stop();
    }
    else {
        customAlert("El cronómetro está detenido.");
    }
});
startBtn.addEventListener('click', e => {
    if (!cronometro.getIsRunning()) {
        cronometro.start();
        run();
    }
    else {
        customAlert("El cronómetro está corriendo.");
    }
});
resetBtn.addEventListener('click', e => {
    if (cronometro.getIsRunning()) {
        cronometro.stop();
        stop();
    }
    cronometro.reset();
    estadisticas.reset();
    document.querySelector('.cronometro__time').textContent = cronometro.formatedTime();
    document.querySelector('.estadisticas__list').innerHTML = '';
});
markBtn.addEventListener('click', e => {
    const currentTime = cronometro.formatedTime();
    estadisticas.add(currentTime);
    const newTimeLi = document.createElement('li');
    const newTime = document.createElement('p');
    newTime.classList.add('estadisticas__list__item');
    newTime.textContent = currentTime;
    newTimeLi.appendChild(newTime);
    document.querySelector('.estadisticas__list').appendChild(newTimeLi);
});
