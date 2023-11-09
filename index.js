const cells = document.querySelectorAll(".cells");
const container = document.querySelector(".container");
const table = document.querySelector(".table");
/////////control buttons//////////////////////////
const bot = document.querySelector("#bot");
const multiplayer = document.querySelector("#mp");
const reset = document.querySelector("#reset");
////////////////////////////////////////////////////

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player = "p1";
let result = 0;
let id;
let changer = 0;
let length = 8;
let endOfGame = false;

const cellPressed = e => {
    if (changer == 0) {
        alert("First choose a game mode, please");
    }
    else {
        e.target.classList.toggle("disabled");
        if (changer == 1) {

            e.target.classList.add(player);
            id = e.target.id;
            array[id] = player;
            checkWinner(array, player);
            freeArray = freeArray.filter((value) => { return value != id });

            if(!endOfGame&&result<8){
            findRandomFreeCell(freeArray);
            ++result;
            }
            ++result;
            if (result == 9) {
                setTimeout(() => {
                    alert("End of game!");
                }, 100);
            }
        }
        else if(changer == 2){
            mP(e);              //run multiplayer mode
        }
    }
}
for (let cell of cells) {
    cell.addEventListener("click", cellPressed);
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
        setTimeout(() => {
            alert(`Player${who[1]} Won!`);
        }, 100)
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

