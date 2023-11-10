const cells = document.querySelectorAll(".cells");
const container = document.querySelector(".container");
const table = document.querySelector(".table");
const inputCheckbox = document.querySelector("#checkbox");
/////////control buttons//////////////////////////
const bot = document.querySelector("#bot");
const multiplayer = document.querySelector("#mp");
const reset = document.querySelector("#reset");
/////////////////   sound effects  ///////////////////////////////////
const buttonClick = new Audio("button-click.wav");
const cellHover = new Audio("cell-hover.wav");
const cellClick = new Audio("laser-gun-shot.wav");
///////////////default values///////////////////////////
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player = "p1";
let result = 0;
let id;
let changer = 0;    //defines a game mode, 1 = against bot, 2 = multiplayer, 0 = starting position
let endOfGame = false;
let winnerExists = false;
table.style.pointerEvents = 'none';
/////////////////////////////////////////////////////////

const cellPressed = e => {
    
        e.target.classList.toggle("disabled");
        if (changer == 1) {
            
            e.target.classList.add(player);
            id = e.target.id;
            array[id] = player;
            checkWinner(array, player);
            freeArray = freeArray.filter((value) => { return value != id });

            if (!endOfGame && result < 8) {
                findRandomFreeCell(freeArray);
                ++result;
            }
            ++result;
            if (result == 9 && winnerExists==false) {
                document.querySelector("#rulesAndMore").innerHTML = ("Draw!");
                showResult();   
            }
        }
        else if (changer == 2) {
            mP(e);              //run multiplayer mode
        }
    }

for (let cell of cells) {
    cell.addEventListener("click", cellPressed);
    playCellAudio();
}

function checkWinner(arr, who) {
    if (
        checkArray(arr[0], arr[1], arr[2]) ||
        checkArray(arr[3], arr[4], arr[5]) ||
        checkArray(arr[6], arr[7], arr[8]) ||
        checkArray(arr[0], arr[3], arr[6]) ||
        checkArray(arr[1], arr[4], arr[7]) ||
        checkArray(arr[2], arr[5], arr[8]) ||
        checkArray(arr[0], arr[4], arr[8]) ||
        checkArray(arr[2], arr[4], arr[6])
    ) {
        winnerExists = true;
        document.querySelector("#rulesAndMore").innerHTML = (`Player${who[1]} Won!`);
        showResult();

        endOfGame = true;
        table.style.pointerEvents = 'none';
    }
}
//checks array values
const checkArray = (a, b, c) => {
    if ((a === b) && (b === c)) {
        return true;
    }
    else {
        return false;
    }
}

function toggleColor(){
    if(inputCheckbox.checked){
        document.querySelector("#o").style.backgroundColor = "yellow";
        document.querySelector("#x").style.backgroundColor = "white";
    }
    else{
        document.querySelector("#o").style.backgroundColor = "white";
        document.querySelector("#x").style.backgroundColor = "yellow";
    }
}

function showResult() {
    document.querySelector("#rulesAndMore").style.transitionDuration = "0.5s";
    document.querySelector("#rulesAndMore").style.opacity = "1";
    document.querySelector("#rulesAndMore").style.paddingBottom = "10px";
    document.querySelector("#rulesAndMore").classList.remove("hide");
}

