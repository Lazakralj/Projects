

let container = document.getElementById("container");
let where = document.getElementById("wheres");
let datum = document.getElementById("date1");
let amount = document.getElementById("amount1");

let button = document.getElementById("btn");

let deleteDiv = document.querySelector(".prvi-red");



button.addEventListener("click", function() {
    
    
    let table = document.getElementById("tabla");
    let whereValue = where.value;
    let datumValue = datum.value;
    let amountValue = amount.value;
    
       
    if(whereValue == "" || amountValue == "" || datumValue == "") {
        return;
    }

    deleteDiv.remove();
    
    let row = table.insertRow(1);
   
    let cel1 = row.insertCell(0)
    cel1.style.border = "1px solid  rgb(216, 208, 208)"
    let cel2 = row.insertCell(1)
    cel2.style.border = "1px solid  rgb(216, 208, 208)"
    let cel3 = row.insertCell(2)
    cel3.style.border = "1px solid  rgb(216, 208, 208)"
    let cel4 = row.insertCell(3)
    cel4.style.border = "1px solid  rgb(216, 208, 208)"

    let buttonx = document.createElement("button");
    buttonx.innerHTML = "X";
   
    
    cel1.textContent = whereValue;
    cel2.textContent = datumValue;
    cel3.textContent = "$" + amountValue;
    cel4.appendChild(buttonx)

    buttonx.addEventListener("click", function() {
        row.remove()
        container.appendChild(deleteDiv)
    })
    
  where.value = "";
  datum.value = "";
  amount.value = "";  


})



 

