let counter = 0;
let w = 0;
let l =0;
let d=0;

function getComputerChoice(){
    let test = ["Rock","Paper","Scissor"];
    let num = Math.floor(Math.random()*3) ;
    // console.log(num);
    let result =  test[num];
    console.log(result);
    return result;
}

function playRound(cc,pc){
    // let pc=prompt("Enter your choice of Rock,Paper and Scissor","");
    let b;
    if(cc=="Rock" && pc =="Paper"){
        console.log("You win"+" "+cc+" "+pc);
         b = "w";
         if(counter<5){
            w++;
         }
    }
    else if(cc=="Rock" && pc =="Scissor"){
        console.log("You lose"+" "+cc+" "+pc);
        b = "l";
        if(counter<5){
            l++;
        }

    }
    else if(cc=="Paper" && pc =="Scissor"){
        console.log("You win"+" "+cc+" "+pc);
        b = "w";
        if(counter <5){
            w++;
        }
    }
    else if(cc=="Paper" && pc =="Rock"){
        console.log("You lose"+" "+cc+" "+pc);
        b= "l";
        if(counter <5){
            l++;
        }
    }
    else if(cc=="Scissor" && pc =="Paper"){
        console.log("You lose"+" "+cc+" "+pc);
        b = "l";
        if(counter <5){
            l++;
        }
    }
    else if(cc=="Scissor" && pc =="Rock"){
        console.log("You win"+" "+cc+" "+pc);
        b = "w";
        if(counter <5){
            w++;
        }
    }
    else if(cc == pc){
        console.log("Draw."+" "+cc+" "+pc);
        b="d";
        if(counter <5){
            d++;
        }
    }
    return b;
}

function ouputTimer(time){
    const timer = document.querySelector('#timer');
    // timer.style.cssText = "border: solid black 2px;"
    timer.textContent = `Counter: ${counter}`

}

function reset(){
    counter = 0;
    w =0;
    l=0;
    d=0;
}

function game(result,com,pc){
    const out = document.querySelector("#output")
    if (counter < 5){
        if(result == 'w'){
            out.textContent = `You win, ${pc} beat ${com}`;
        }
        else if(result == 'l'){
            out.textContent = `You lose, ${com} beat ${pc}`;
        }
        else if(result == 'd'){
            out.textContent = `You draw, both choose ${pc} and ${com}`;
        }
        else{
            out.textContent = "input error";
        }
        counter = counter+1;
        ouputTimer(counter);
    }
    else if (counter === 5){

        out.textContent = "Game Over. 5 rounds have been reached";
        const result = document.querySelector('#fres');
        if(w>l){
            result.textContent =`You win. W:${w} +L${l} +D${d}`;
        }
        else if(l>w){
            result.textContent =`You lose. W:${w} +L${l} +D${d}`;
        }
        else{
            result.textContent =`You draw W:${w} +L${l} +D${d}`;
        }
        reset();

    }
    else{
        return;
    }

}




function chooseRock(){
    let pc = "Rock";
    let com = getComputerChoice();
    let result = playRound(com,pc);
    game(result,com,pc);
    
}
function choosePaper(){
    let pc = "Paper";
    let com = getComputerChoice();
    let result = playRound(com,pc);
    game(result,com,pc);
}
function chooseScissor(){
    let pc = "Scissor";
    let com = getComputerChoice();
    let result = playRound(com,pc);
    game(result,com,pc);
}



const btnRock = document.querySelector("#rock")
btnRock.addEventListener('click',chooseRock)

const btnPaper = document.querySelector("#paper")
btnPaper.addEventListener('click',choosePaper)

const btnScissor = document.querySelector("#scissor")
btnScissor.addEventListener('click',chooseScissor)    




