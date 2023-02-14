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
            
            

        if(secunPlay == "um player"){
            play02++

             computerPlay()

        }
        }
        else{
            play02++
        }
        checkWin()


        }

      
    })



for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        secunPlay = this.getAttribute("id")


        for(let g = 0; g < buttons.length; g++){
            buttons[g].style.display = 'none'
        }

        setTimeout(function(){

            let cont = document.querySelector("#container")
            cont.classList.remove("hide")

        }, 300)
    })

}


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

function checkWin(){

    let bloc1 = document.querySelector("#bloco1")
    let bloc2 = document.querySelector("#bloco2")
    let bloc3 = document.querySelector("#bloco3")
    let bloc4 = document.querySelector("#bloco4")
    let bloc5 = document.querySelector("#bloco5")
    let bloc6 = document.querySelector("#bloco6")
    let bloc7 = document.querySelector("#bloco7")
    let bloc8 = document.querySelector("#bloco8")
    let bloc9 = document.querySelector("#bloco9")

    if(bloc1.childNodes.length > 0 && bloc2.childNodes.length > 0 && bloc3.childNodes.length > 0){
        let b1 = bloc1.childNodes[0].className
        let b2 = bloc2.childNodes[0].className
        let b3 = bloc3.childNodes[0].className

        if(b1 == "x" && b2 == "x" && b3 == "x"){
            declaVencedor('x')

        } else if(b1 == "o" && b2 == "o" && b3 == "o"){
            declaVencedor('o')

        }
        
    }  if(bloc4.childNodes.length > 0 && bloc5.childNodes.length > 0 && bloc6.childNodes.length > 0){
        let b4 = bloc4.childNodes[0].className
        let b5 = bloc5.childNodes[0].className
        let b6 = bloc6.childNodes[0].className

        if(b4 == "x" && b5 == "x" && b6 == "x"){
            declaVencedor('x')

        } else if(b4 == "o" && b5 == "o" && b6 == "o"){
            declaVencedor('o')

        }
        

    } if(bloc7.childNodes.length > 0 && bloc8.childNodes.length > 0 && bloc9.childNodes.length > 0){
        let b7 = bloc7.childNodes[0].className
        let b8 = bloc8.childNodes[0].className
        let b9 = bloc9.childNodes[0].className
        
        if(b7 == "x" && b8 == "x" && b9 == "x"){
            declaVencedor('x')

        } else if(b7 == "o" && b8 == "o" && b9 == "o"){
            declaVencedor('o')

        }
    } if(bloc1.childNodes.length > 0 && bloc5.childNodes.length > 0 && bloc9.childNodes.length > 0){
        let b1 = bloc1.childNodes[0].className
        let b5 = bloc5.childNodes[0].className
        let b9 = bloc9.childNodes[0].className
        
        if(b1 == "x" && b5 == "x" && b9 == "x"){
            declaVencedor("x")

        } else if(b1 == "o" && b5 == "o" && b9 == "o"){
            declaVencedor("o")

        }
    } if(bloc3.childNodes.length > 0 && bloc5.childNodes.length > 0 && bloc7.childNodes.length > 0){
        let b3 = bloc3.childNodes[0].className
        let b5 = bloc5.childNodes[0].className
        let b7 = bloc7.childNodes[0].className
        
        if(b3 == "x" && b5 == "x" && b7 == "x"){
            declaVencedor('x')

        } else if(b3 == "o" && b5 == "o" && b7 == "o"){
            declaVencedor('o')

        }
    } if(bloc1.childNodes.length > 0 && bloc4.childNodes.length > 0 && bloc7.childNodes.length > 0){
        let b1 = bloc1.childNodes[0].className
        let b4 = bloc4.childNodes[0].className
        let b7 = bloc7.childNodes[0].className
        
        if(b1 == "x" && b4 == "x" && b7 == "x"){
            declaVencedor('x')

        } else if(b1 == "o" && b4 == "o" && b7 == "o"){
            declaVencedor('o')

        }
    }if(bloc2.childNodes.length > 0 && bloc5.childNodes.length > 0 && bloc8.childNodes.length > 0){
        let b2 = bloc2.childNodes[0].className
        let b5 = bloc5.childNodes[0].className
        let b8 = bloc8.childNodes[0].className
        
        if(b2 == "x" && b5 == "x" && b8 == "x"){
            declaVencedor('x')

        } else if(b2 == "o" && b5 == "o" && b8 == "o"){
            declaVencedor('o')

        
    }if(bloc3.childNodes.length > 0 && bloc6.childNodes.length > 0 && bloc9.childNodes.length > 0){
        let b3 = bloc3.childNodes[0].className
        let b6 = bloc6.childNodes[0].className
        let b9 = bloc9.childNodes[0].className
        
        if(b3 == "x" && b6 == "x" && b9 == "x"){
            declaVencedor('x')

        } else if(b3 == "o" && b6 == "o" && b9 == "o"){
            declaVencedor('o')

        }
    }
    let contador = 0
    
    for(let i =0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            contador++
        }
    }
    if(contador == 9){
        declaVencedor("EMPATE")
    }
}

}
function declaVencedor(winner){
    
    let winX = document.querySelector("#scoreboard1")
    let winO = document.querySelector("#scoreboard2")
    let msg = ''

    if(winner == 'x'){
        winX.textContent = parseInt(winX.textContent) +1
        msg = 'Jogador 1 Venceu'


    } else if(winner == 'o'){
        winO.textContent = parseInt(winO.textContent) +1
        msg = 'Jogador 2 Venceu'

    } else{
        msg = 'EMPATE'
    }
msgtxt.innerHTML = msg
msgs.classList.remove("hide")
setTimeout(function(){

    msgs.classList.add("hide")
}, 2000)

play01 = 0
play02 = 0

let boxs = document.querySelectorAll(".box div")
    for(let i= 0; i < boxs.length; i++){
        boxs[i].parentNode.removeChild(boxs[i])
    }

}
function computerPlay() {
 
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
 
    for(let i = 0; i < boxes.length; i++) {
 
        let randomNumber = Math.floor(Math.random() * 5);
 
       
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i]. appendChild(cloneO);
                counter++;
                break;
            }
       
        } else {
            filled++;
        }
    }
 
    if(counter == 0 && filled < 9) {
        computerPlay();
    }
}