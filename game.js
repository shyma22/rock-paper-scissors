

function getComputerChoice(){
    let value= Math.floor((Math.random())*(3)+1);
    return value;

}



function getHumanChoice(){
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
}



