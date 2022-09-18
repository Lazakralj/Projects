
window.addEventListener("load", function() {
    var body = document.querySelector("body");
    var dugme =document.getElementById("dugme");
    var span = document.querySelector("span");
    
    dugme.addEventListener("click", function() {
        body.style.backgroundColor = randomHexNumber();
        span.textContent = randomHexNumber()
    })

    
})

function randomHexNumber () {
    var letters = "0123456789ABCDEF";
    var simbol = '#'
    for(let i = 0; i < 6; i++) {
        var result = simbol += letters[Math.floor(Math.random() * 16)
    ]}
return result;
}

