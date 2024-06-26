const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userS=document.querySelector("#yourscore");
const comS=document.querySelector("#compscore");


let userScore=0;
let compScore=0;

const generateCompChoice=()=>{
    const availableChoices=["rock","paper","scissor"];
    return availableChoices[Math.floor(Math.random()*3)];
};
const gameDraw=()=>{
    msg.innerText="game was a Draw";
    msg.style.backgroundColor="grey";
};
const showWinner=(winner)=>{
    if(winner){
        userScore++;
        userS.innerText=userScore;
        msg.innerText="you Won";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comS.innerText=compScore;
        msg.innerText="computer Won";
        msg.style.backgroundColor="red";
    }
};
const playGame=(userchoice)=>{
    const compchoice=generateCompChoice();
    if(userchoice===compchoice){
        gameDraw();
    }
    else{
        let winner=true;

        if(userchoice==="rock"){
            winner=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            winner=compchoice==="scissor"?false:true;
        }
        else{
            winner=compchoice==="rock"?false:true;
        }
        showWinner(winner);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
