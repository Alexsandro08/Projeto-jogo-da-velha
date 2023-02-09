let x = document.querySelector(".x")
let o = document.querySelector(".o")

let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#botoes button")
let msgs = document.querySelector("#msg")
let msgtxt = document.querySelector("#msg p")

let secunPlay

let play01 = 0
let play02 = 0

for(let i= 0; i < boxes.length; i++){

    boxes[i].addEventListener("click", function(){

        let elemento = checar(play01,play02)
        
        if(this.childNodes.length == 0){  
            
        let elementoClone = elemento.cloneNode(true)

        this.appendChild(elementoClone)

        if(play01 == play02){
            play01++
        }
        else{
            play02++
        }


        }

      
    })
}
function checar(play01, play02){
    
    if(play01 == play02){
       elemento = x

    }
    else {
        elemento = o

    }
    
    return elemento
}