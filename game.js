

function getComputerChoice(){
    let value= Math.floor((Math.random())*(3)+1);
    return value;

}



/*function getHumanChoice(){
    let choice=prompt("Enter your choice.Rock,Paper or Scissors? Note:1-Rock 2-Paper 3-Scissors");
    if(choice==="Rock"){
        return 1;
    }
    else if(choice==="Paper"){
        return 2;
    }
    else if(choice==="Scissors"){
        return 3;
    }
}


function playGame(h,c){
   
    
    if(h===c){
        console.log(`Your choice: ${h}     Computer's choice: ${c}`);
        console.log("It's a tie")
        console.log(`Current score:Computer-${computerPoint} You-${humanPoint}`);
    }
    else if((h===1 && c===3)||(h===2 && c===1)||(h===3 && c===2)){
        console.log(`Your choice: ${h}     Computer's choice: ${c}`);
        console.log("You gain a point!");

        humanPoint++;

        console.log(`Current score:Computer-${computerPoint} You-${humanPoint}`);
    }
    else if((c===1 &&h===3)||(c===2 && h===1)||(c===3 && h===2)){
        console.log(`Your choice: ${h}     Computer's choice: ${c}`);
        console.log("Computer gains a point!")
        computerPoint++;
        console.log(`Current score:Computer-${computerPoint} You-${humanPoint}`);
    }

 
}
let humanPoint=0;
let computerPoint=0;
while(humanPoint!=5 && computerPoint!=5){
const human=getHumanChoice();
const comp=getComputerChoice();
playGame(human,comp);
}

console.log("Yay! the game is over");
if(humanPoint>computerPoint){
  console.log(`You win! Your score is ${humanPoint} while the Computer's score is ${computerPoint} `);

}
else{
  console.log("Computer wins.Better luck next time!"); 
}*/

const commentary=document.querySelector("#commentary");
let human;
let humanPoint=0;
let computerPoint=0;
const scoreBoard=document.querySelector("#scoreBoard");
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
const choice=document.querySelector("#choice");
let flag=0;
rock.addEventListener("click",()=>{choice.textContent="You chose Rock";
 human=1;
      setTimeout(() => {
       comp= compu();
       playGame(human,comp);
    }, 500);
    




})
paper.addEventListener("click",()=>{choice.textContent="You chose Paper";
  human=2;
   setTimeout(() => {
    comp=compu();
    playGame(human,comp);
    
}, 1000);

   
})
scissors.addEventListener("click",()=>{choice.textContent="You chose Scissors";
   human=3;
   setTimeout(() => {
    comp=compu();
    playGame(human,comp);
}, 1000);

   
})
const com=document.querySelector("#com");
let comp;
function compu(){
let compChoice=getComputerChoice();
if(compChoice==1 ){
    com.textContent="Computer chose rock";
    return 1;
   
    
}
if(compChoice==2){
    com.textContent="Computer chose paper";
    return 2;
}
if(compChoice==3){
    com.textContent="computer chose scissor";
    return 3;
}
}

function playGame(h,c){
    if(humanPoint!=5 &&computerPoint!=5){
    if(h===c){
        
        commentary.textContent="It's a tie";
        scoreBoard.textContent=`Current score:Computer-${computerPoint} You-${humanPoint}`;
    }
    else if((h===1 && c===3)||(h===2 && c===1)||(h===3 && c===2)){
       
        commentary.textContent="You gain a point!";

        humanPoint++;

        scoreBoard.textContent=`Current score:Computer-${computerPoint} You-${humanPoint}`;
    }
    else if((c===1 &&h===3)||(c===2 && h===1)||(c===3 && h===2)){
        
       commentary.textContent="Computer gains a point!";
        computerPoint++;
        scoreBoard.textContent=`Current score:Computer-${computerPoint} You-${humanPoint}`;
    }}
    else{
        if(humanPoint>computerPoint){
            commentary.textContent="You win the game woohoo!"
        }
        else{
            commentary.textContent="Computer wins the game, better luck next time"
        }
    }
    
}




