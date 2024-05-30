let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#btnreset");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let container = document.querySelector(".msg-container ");
let player1=document.querySelector("#p1");
let player2=document.querySelector("#p2");
let s1=document.querySelector("#s1");
let s2=document.querySelector("#s2");

let x=prompt("player one name:");
player1.innerText= x+" : ";
let y=prompt("player two name:");
player2.innerText ="    "+ y+" : ";
let scoreO = 0;
let scoreX = 0;

let winingptn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let count=0;
let turnO = true;

for (let box of boxes) {
  box.addEventListener("click", () => {

    if (turnO) {
      box.innerText = "O";
      box.style.color='yellow';
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count=count+1;

    checkwinner();
  });
}

const checkwinner = () => {
    console.log(count)
  for (let pattern of winingptn) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        count=0;
        if (pos1 === "O") {
          scoreO = scoreO + 1;
          s1.innerText=scoreO;
          showwinner(x, scoreO);
        } else {
          scoreX = scoreX + 1;
          s2.innerText=scoreX;
          showwinner(y, scoreX);
        }
        //showwinner(pos1);
      }
    }
    
  if(count===9 && pos1 != pos2 && pos2 != pos3){
    draw()
  }
}
};

const showwinner = (winner,score) => {
    msg.innerText = `congratulation winner is ${winner} and score is ${score}`;
    container.classList.remove("hide");
    disabledBoxes();
  };

  const draw = () => {
    msg.innerText = "Match is draw....try again";
    container.classList.remove("hide");
    count=0;
    disabledBoxes();
  };

  const disabledBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

// const resetgame = () => {
//     turnO = true;
//     enabledBoxes();
//     container.classList.add("hide");
//   };

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetgame = () => {
  
    enabledBoxes();
    container.classList.add("hide");
    scoreO = 0;
    s1.innerText=scoreO;
    scoreX = 0;
    s2.innerText=scoreX;
  
};
const newG = () => {
  for (let box of boxes) {
    enabledBoxes();
    container.classList.add("hide");
  }
};





reset.addEventListener("click", resetgame);
newgame.addEventListener("click", newG);
