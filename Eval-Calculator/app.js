let numbers = document.querySelectorAll(".number");
let display = document.getElementById("display");
let operands = document.querySelectorAll(".operand");
let equals = document.querySelector(".equals");
let koren = document.querySelector(".sqrt");
let deleted = document.querySelector(".delete");

deleted.addEventListener("click", function() {
    display.value = ""
})



numbers.forEach((number) => {
    
    
    number.addEventListener("click", function() {
    
        display.value += number.textContent
        
        koren.addEventListener("click", function() {
            display.value = parseInt(number.textContent) * parseInt(number.textContent)
         })
    })  
    
})

operands.forEach((operator) => {
    operator.addEventListener("click", function() {
        display.value += operator.textContent
    })
})





equals.addEventListener("click", function() {
    if(display.value === "") {
        display.value = ""
    }else {
        display.value = eval(display.value)
    }
})
   
    

    
 


























