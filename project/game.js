var timer=10;
var score=0;
var rnHit=0;

function increaseScore(){
  score += 10;
  document.querySelector("#score").innerHTML =score;
}

function getNewHit(){
  rnHit = parseInt(Math.random()*10)
  document.querySelector("#hit").textContent=rnHit;
}

function makeBubble(){
  var clutter="";

for (var i=1;i<=263;i++){
    var rn = parseInt(Math.random()*10)
  clutter +=   `<div class="bubble">${rn}</div>`

}
document.querySelector("#container").innerHTML=clutter;
}

function runTimer(){
 var timeInt = setInterval(function(){
    if (timer>0){
      timer--;
      document.querySelector("#timerval").innerHTML=timer;

    }else{
      clearInterval(timeInt);
      document.querySelector("#container").innerHTML=`<h1> Game Over ! </h1>`;
    }
  },1000)
}
document.querySelector("#container").addEventListener("click",function(details){
  
   var clickedhit = Number(details.target.textContent) 
   if(clickedhit===rnHit){
     increaseScore();
     getNewHit();
     makeBubble();
   }else{
      makeBubble();
      getNewHit();
   }
})


getNewHit();
makeBubble();
runTimer();

