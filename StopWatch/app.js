
  var dugmeStart = document.getElementById("start");
  var dugmeStop = document.getElementById("stop");
  var dugmeReset = document.getElementById("reset")
  var tens = 0;
  var minuts = 0;
  var interval;
  var sekunde = document.getElementById("seconds");
  var minuti = document.getElementById("hours");
  dugmeStart.addEventListener("click", function() {
         interval = setInterval(count, 10)
  })
  
    function count () {
        tens++;
        sekunde.textContent = "0" + tens;
        if (tens > 9) {
            sekunde.textContent = tens;
        }
        if(tens >= 99) {
            tens = 0;
            minuti.textContent = "0" + ++minuts;
        }
        if(minuts > 9) {
            minuti.textContent = minuts;
        }
    }

    dugmeStop.addEventListener("click", function() {
        clearInterval(interval)
    })
 
    dugmeReset.addEventListener("click", function() {
        
        clearInterval(interval)
        tens = 0;
        minuts =0;
        sekunde.textContent = "00";
        minuti.textContent = "00";
        
    })
  


