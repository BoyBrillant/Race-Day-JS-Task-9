let raceNumber= Math.floor(Math.random()*1000);
let earlyRegistered = false;
let runnerAge= 17 ;

if(earlyRegistered && runnerAge > 18){
  raceNumber+=1000;
}

if(earlyRegistered && runnerAge >18) {
  console.log(`the race starts at 9:30, your race number is ${raceNumber}.`)
}
else if (!earlyRegistered && runnerAge>18) {
  console.log(`The race starts at 11:00, your race number is ${raceNumber}`)
}

else if (runnerAge<18) {
  console.log(`Race will start at 12:30, your race number is ${raceNumber}.`)
}
else {
  console.log("see the registration desk")
}
