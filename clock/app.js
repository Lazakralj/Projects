let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let h = 0;
let m = 0;
let s = 0;
let interval;


window.addEventListener("load", function() {
    setInterval(brojac,1000)

    function brojac () {
       s++;
       seconds.textContent = "0" + s;
       if (s >= 10) {
        seconds.textContent = s;
       }
       if(s>= 60) {
        s = "00";
        m++;
        minutes.textContent = "0" + m;
        if (m >= 10) {
            minutes.textContent = m;
        }      
        if (m >= 59) {
            m = "00";
            h++;
            hours.textContent = "0" + h;
        }
        if (h >=10) {
            hours.textContent = h;
        }
        if (h >= 23) {
            h = "00"
        }
       }


    }
})