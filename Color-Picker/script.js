const boje = ["pink", "green", "orange", "royalblue", "gray"];

window.addEventListener("load", function() {
    var body = document.querySelector("body");
    var dugme =document.getElementById("dugme");
    var span = document.querySelector("span");
    
    
    dugme.addEventListener("click", function() {
        var broj = getRandomNumber();
        body.style.backgroundColor = boje[broj]
        span.textContent = boje[broj]
        if(body.style.backgroundColor === "pink") {
            span.style.color = "black";
        }else {
            span.style.color = "white"
        }
    })
})

function getRandomNumber() {
    return Math.floor(Math.random() * boje.length)
}
