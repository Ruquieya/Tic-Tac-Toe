let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgContainer=document.querySelector (".msgContainer");
let msg=document.querySelector (".msg");
let newGameBtn=document.querySelector("#newGameBtn") ;

let turnO=true;
let count=0;
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

const resetGame = () =>{
  turnO=true;
  count =0;
  enableBoxes();
}


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log ("box was clicked");
    if (turnO) {
      box.innerText="O";
      turnO=false;
    } else {
      box.innerText ="X";
      turnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner =checkWinner();
       if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = "Game was a Draw.";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (const box of boxes) {
    box.disabled=true;
  }
}
const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled=false;
    box.innerText="";
    msgContainer.classList.add("hide");
  }
}


 const showWinner=(winner)=>{
 msg.innerText=`${winner} won the game`;
   msgContainer.classList.remove("hide");
 disableBoxes();
}


  const checkWinner=()=>{
  for (let pattern of winPatterns) {
   
  let pos1Val = boxes[pattern[0]].innerText,
  pos2Val = boxes[pattern[1]].innerText,
  pos3Val = boxes[pattern[2]].innerText;
    
if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){                                  if(pos1Val===pos2Val&&pos2Val===pos3Val){
  console.log ("winner",pos1Val);
  showWinner(pos1Val);
  }
   }
};
}
  newGameBtn.addEventListener('click', resetGame);
  resetBtn.addEventListener('click', resetGame);



