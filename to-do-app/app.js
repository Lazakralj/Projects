
let button = document.getElementById("btn");


button.addEventListener("click", function() {
    
    let form = document.getElementById("form");
    let input = document.getElementById("text");
    
        const ele = document.createElement('div');
        ele.classList.add("box")
        ele.innerHTML = input.value;
        form.appendChild(ele)

        var counter = 0;
        ele.onclick = function() {
        counter++;
        if(counter % 2 == 1) {
            ele.style.backgroundColor = "#7CFC00"
        }else {
            ele.style.backgroundColor = "white"
        }
        
       }
    


        const x = document.createElement('div')
        x.classList.add('delete')
        x.innerHTML = "X";
        ele.appendChild(x)
      
      x.addEventListener("click", function() {
        form.removeChild(ele)
      })
      
      if(input.value == "") {
        form.removeChild(ele)
      }
      
      input.value = "";
      
      
      
        
       
           
        
    
   
})