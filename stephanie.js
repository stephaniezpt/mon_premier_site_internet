

const secondHand = document.querySelector('.second-hand');
console.log(secondHand);
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  console.log(secondsDegrees);
  secondHand.style.transform = 'rotate('+secondsDegrees+'deg)';

  console.log(seconds);
}

const minHand = document.querySelector('.min-hand');
console.log (minHand);
function setMin(){
  const now = new Date();
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = 'rotate('+minutesDegrees+'deg)';

  console.log(minutes);
}

const hourHand = document.querySelector('.hour-hand');
console.log (hourHand);
function setHour(){
  const now = new Date();
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = 'rotate('+hoursDegrees+'deg)';

  console.log(hours);
}

setDate();
setMin();
setHour();

setInterval(setDate, 1000);
setInterval(setMin, 60000);
setInterval(setHour, 3600000);
