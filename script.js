let boxes=document.querySelectorAll(".box");

let resetGame=document.querySelector("#resetgame");

let gameChance=document.querySelector(".game-chance");


let container=document.querySelector(".container")

let container2=document.querySelector(".container2");

let winnerMsg=document.querySelector(".winner-msg");

let newGame=document.querySelector("#new-game")

let check=true;
let count=0;

let winPatterns=[

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

let resetBtn=()=>{
    check=true;
    count=0
    enableBoxes();
}



boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(check===true){
            box.style.color="green";
            box.innerText="X";
            gameChance.innerText="Player 0's Turn";
            gameChance.style.color="white"
            check=false;
        }

        else{
            box.style.color="black"
            box.innerText="0";
            gameChance.innerText="Player X's Turn";
            gameChance.style.color="black"
            check=true;
        }

        box.disabled=true;
count++;
        
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
});


let gameDraw = () => {
    winnerMsg.innerText=`It's a Draw Game`    
    container.style.display="none"
    container2.style.display="block"

  };




let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}



let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

let showWinner=(winner)=>{
    container.style.display="none"
    container2.style.display="block"
winnerMsg.innerText=`Congratulations , Winner is  ${winner}`;
disableBoxes();

}


let checkWinner=(()=>{

for(let patterns of winPatterns){
    let pos1val=boxes[patterns[0]].innerText;
    let pos2val=boxes[patterns[1]].innerText;
    let pos3val=boxes[patterns[2]].innerText;

    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
  showWinner(pos1val)
  return true;
        }

    
    }

}
});


newGame.addEventListener("click",resetBtn)
newGame.addEventListener("click",()=>{
    container2.style.display="none"
    container.style.display="block"
})

resetGame.addEventListener("click",resetBtn)