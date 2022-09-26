
window.addEventListener("load", function() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    
    
    
    

   function brojac() {
    let date = new Date()
    
    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();

    seconds.textContent = "0 " + s;
    if(s >= 10) {
        seconds.textContent = s;
    }


    minutes.textContent = "0" + m;
    if(m >= 10) {
        minutes.textContent = m;
    }


    hours.textContent = "0" + h;
    if(h >= 10) {
        hours.textContent = h;
    }
   }

   setInterval(brojac, 1000)

   
})

