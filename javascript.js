var timer = 60;
var score = 0;
var hit;

function aScore() {
    score += 10;
    document.querySelector("#scorehp").innerHTML = score;
}


function getNewHit() {
    hit = Math.floor(Math.random() * 10 );
    document.querySelector("#hithp").innerHTML = hit;
}


function aBubble() {
    var buble = "";
    for (var i = 0; i < 105; i++) {
      var num = Math.floor(Math.random() * 10)
      buble += `<div class="bubble"> ${num} </div>`
      
    }
    document.querySelector("#end").innerHTML = buble;
}


function aTimer() {
    var timerfun = setInterval(function(){    
      if (timer>0) {
        timer--;
        document.querySelector("#timeint").innerHTML = timer;
      }
      else{
        clearInterval(timer)
        document.querySelector("#end").innerHTML = `<h1 id="asd">Game Over</h1>`
      }
    }, 1000) 
}
document.querySelector("#end").addEventListener("click",function(g){
       var num = (Number(g.target.innerHTML))
       if (hit === num) {
              
     aScore ();
     aBubble ();   
     getNewHit ();
    
  }
})

aTimer ();
aBubble ();
getNewHit ();