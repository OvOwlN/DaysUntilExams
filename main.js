const timerHtml = document.getElementsByClassName('data-block__timer')[0]
const daysEl = document.getElementsByClassName('timer-days')[0]
const hoursEl = document.getElementsByClassName('timer-hours')[0]
const minutesEl = document.getElementsByClassName('timer-minutes')[0]
const secondsEl = document.getElementsByClassName('timer-seconds')[0]

const daysLabel = document.getElementsByClassName('timer-days-label')[0]
const hoursLabel = document.getElementsByClassName('timer-hours-label')[0]
const minutesLabel = document.getElementsByClassName('timer-minutes-label')[0]
const secondsLabel = document.getElementsByClassName('timer-seconds-label')[0]



const mediaQuery = window.matchMedia('(width <= 270px)')

const targetDate = new Date('May 24, 2027 12:00:00').getTime()
let timeUntilExams = 0;


mediaQuery.addEventListener('change', (e) => {
  if (e.matches){
    changeInnerHtml(daysLabel, "Дней: ")
    changeInnerHtml(hoursLabel, "Часов: ")
    changeInnerHtml(minutesLabel, "Минут: ")
    changeInnerHtml(secondsLabel, "Секунд: ")
  }
  else{
    changeInnerHtml(daysLabel, "Дней ")
    changeInnerHtml(hoursLabel, "Часов ")
    changeInnerHtml(minutesLabel, "Минут ")
    changeInnerHtml(secondsLabel, "Секунд ")
  }

})

function changeInnerHtml(el, content){
  el.innerHTML = content
}

function formatSecondsToDHMS(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  if (days > 0)
  {
    daysEl.innerHTML = formatTimeUnits(days)
  }
  if (hours > 0){
    hoursEl.innerHTML = formatTimeUnits(hours)
  } 
  if (minutes > 0) {
    minutesEl.innerHTML = formatTimeUnits(minutes)
  }
  if (seconds > 0){
    secondsEl.innerHTML = formatTimeUnits(seconds)
  }
}

function formatTimeUnits(time){
  if (time < 10){
    return `0${time}`
  }
  else{
    return `${time}`
  }
}

document.addEventListener('DOMContentLoaded', () => {
  timeUntilExams = Math.floor((targetDate - new Date().getTime()) / 1000)

  formatSecondsToDHMS(timeUntilExams);
})


setInterval(()=>update(), 1000);

function update(){
  if(timeUntilExams > 0){
    timeUntilExams --;
    formatSecondsToDHMS(timeUntilExams);
  }
  if(timeUntilExams === 0){
    timerHtml.innerHTML = 'Time over'
  }
}
