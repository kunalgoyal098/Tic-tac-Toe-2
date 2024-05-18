let player = document.getElementById('changeturn');
let box1 = document.getElementById('0');
let box2 = document.getElementById('1');
let box3 = document.getElementById('2');
let box4 = document.getElementById('3');
let box5 = document.getElementById('4');
let box6 = document.getElementById('5');
let box7 = document.getElementById('6');
let box8 = document.getElementById('7');
let box9 = document.getElementById('8');
let win = document.querySelector('.winner');
let reset = document.getElementById('reset');
boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
let Players = ['X', 'O'];
let currentPlayer = 0;


win.innerHTML = "Play the game to win "
function PlayerTurn() {
  console.log("ki player changed")
  if (player.innerText == "X") {
    player.innerText = " O"
  }
  else {
    player.innerText = "X"
  }

}

function resetGame() {
  console.log("reset game");
  for (let box of boxes) {
    box.value = "";
  }
  player.innerText = "X";
  win.innerHTML = " play the game to win ";
}


function choosewinner() {
  if (box1.value == box2.value && box2.value == box3.value && box1.value != "") {
    win.innerHTML = box1.value + " is the winner";
  }

  else if (box1.value == box4.value && box4.value == box7.value && box1.value != "") {
    win.innerHTML = box1.value + " is the winner";

  }

  else if (box1.value == box5.value && box5.value == box9.value && box1.value != "") {
    win.innerHTML = box1.value + " is the winner";
  }


  else if (box2.value == box5.value && box5.value == box8.value && box2.value != "") {
    win.innerHTML = box2.value + " is the winner";
  }
  else if (box3.value == box6.value && box6.value == box9.value && box3.value != "") {
    win.innerHTML = box3.value + " is the winner";
  }
  else if (box3.value == box5.value && box5.value == box7.value && box3.value != "") {
    win.innerHTML = box3.value + " is the winner";
  }
  else if (box4.value == box5.value && box5.value == box6.value && box4.value != "") {
    win.innerHTML = box4.value + " is the winner";
  }
  else if (box7.value == box8.value && box8.value == box9.value && box7.value != "") {
    win.innerHTML = box7.value + " is the winner";
  }

}
/*function choosewinner() {
  for (let i = 0; i < 8; i++) {
    if (boxes[i].value == boxes[i + 1].value && boxes[i + 1].value == boxes[i + 2].value && boxes[i].value != "") {
      win.innerHTML = boxes[i].value + " is the winner";

    }
    if (i == 0 || i == 1 || i == 2) {
      if (boxes[i].value == boxes[i + 3].value && boxes[i + 3].value == boxes[i + 6] && boxes[i] != "") {
        win.innerHTML = boxes[i].value + " is the winner";
      }
      else if (i == 0) {
        if (boxes[i].value == boxes[i + 4].value && boxes[i + 4].value == boxes[i + 8].value && boxes[i] != "") {
          win.innerHTML = boxes[i].value + " is the winner";
        }
      }
      else if (i == 2) {
        if (boxes[i].value == boxes[i + 2].value && boxes[i + 2].value == boxes[i + 4].value && boxes[i] != "") {
          win.innerHTML = boxes[i].value + " is the winner";
        }
      }

    }
  }
}
*/

player.addEventListener('change', PlayerTurn);
for (let box of boxes) {
  box.addEventListener('click', function(e) {
    if (box.value == "") {
      box.value = player.innerText;
      PlayerTurn();
      choosewinner();
    }
  })
}

reset.addEventListener('click', resetGame);