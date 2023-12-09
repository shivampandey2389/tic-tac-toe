let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let new_game = document.querySelector(".new");
let msgctn = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;
let count = 0;
const winnerpattern = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8], 

     
];
const resetgame=()=>{
    turnO=true;
    count =0;
    enableBoxes();
    msgctn.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText="O";
            turnO = false;
        } else {
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgctn.classList.remove("hide");
    disableBoxes();
};
  
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulation,the winner is ${winner}`;
    msgctn.classList.remove("hide");
    disableBoxes(); 

};
const checkWinner=()=>{
    for(let pattern of winnerpattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if (posval1 !="" && posval2 !="" && posval3 !=""){
            if (posval1===posval2 && posval2===posval3){
                showWinner(posval1);
                return true;

            }
        }
    }
};
new_game.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);