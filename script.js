function getComputerChoice(){
    let test = ["Rock","Paper","Scissor"];
    let num = Math.floor(Math.random()*3) ;
    // console.log(num);
    let result =  test[num];
    console.log(result);
    return result;
}

function playRound(cc){
    let pc=prompt("Enter your choice of Rock,Paper and Scissor","");
    let b;
    if(cc=="Rock" && pc =="Paper"){
        console.log("You win");
         b = "w";
    }
    else if(cc=="Rock" && pc =="Scissor"){
        console.log("You lose");
        b = "l";

    }
    else if(cc=="Paper" && pc =="Scissor"){
        console.log("You win");
        b = "w";
    }
    else if(cc=="Paper" && pc =="Rock"){
        console.log("You lose");
        b= "l";
    }
    else if(cc=="Scissor" && pc =="Paper"){
        console.log("You lose");
        b = "l";
    }
    else if(cc=="Scissor" && pc =="Rock"){
        console.log("You win");
        b = "w";
    }
    else if(cc == pc){
        console.log("Draw.");
        b="d";
    }
    return b;
}

function game(){
    let w = 0;
    let l =0;
    let r;
    
    for(let i=0;i<5;i++){
        r = playRound(com,pc);
        if(r == "w"){
            w = w +1;
        }
        else if(r ="l"){
            l = l+1;
        }
    }
    if(l>w){
        console.log("You lose");
    }
    else if(w>l){
        console.log("You win");
    }
    else{
        console.log("Draw+ result "+l+" "+w);
    }
}
let com = getComputerChoice();
let pc="Paper";
game();
// playRound(com,pc);