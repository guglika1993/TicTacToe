const cells = document.querySelectorAll(".cells");
const container = document.querySelector(".container");
const table = document.querySelector(".table");
const inputCheckbox = document.querySelector("#checkbox");
const headerText = document.querySelector("#span");
const welcome = document.querySelector("#welcome");
const children = headerText.children;
/////////// INPUTS /////////////////////
const inputsDiv = document.querySelector("#inputs");
const textDiv = document.querySelector("#resultP");
const name1Input = document.querySelector("#p1Input");
const name2Input = document.querySelector("#p2Input");
/////////control buttons//////////////////////////
const bot = document.querySelector("#bot");
const multiplayer = document.querySelector("#mp");
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const again = document.querySelector("#newGameButton");
/////////////////   sound effects  ///////////////////////////////////
const buttonClick = new Audio("button-click.wav");
const cellHover = new Audio("cell-hover.wav");
const cellClick = new Audio("laser-gun-shot.wav");
///////////////default values///////////////////////////

let p1Name, p2Name, p1Score, p2Score, array, freeArray, player, result, id, changer, endOfGame, 
winnerExists, defaultStringReplaced;
let defaultString = "Let's play again. Choose a role and a game mode";



const cellPressed = e => {
    
        e.target.style.pointerEvents = 'none';
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
        for(let cell of cells){
            cell.style.pointerEvents = 'none';
        }
        winnerExists = true;
        decideWinnerName();
        showResult();
        endOfGame = true;
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
    defaultStringReplaced = true;
    document.querySelector("#rulesAndMore").classList.remove("hide");
    document.querySelector("#rulesAndMore").style.backgroundColor = "rgba(20,80,81,1)";
    document.querySelector("#welcomeSpan").classList.add("hide");
    textDiv.classList.remove("hide");
    textDiv.style.textAlign = "center";
    textDiv.style.textAlign = "center";
    name1Input.classList.add("hide");
    name2Input.classList.add("hide");
    start.classList.add("hide");
    showScores();
    inputCheckbox.disabled = false;
}

function decideWinnerName() {
    
    if (!inputCheckbox.checked) {
        if (player == "p1"){
            textDiv.innerHTML = (`${p1Name} is winner!`);
            ++p1Score;
        }
        else{
            textDiv.innerHTML = (`${p2Name} is winner!`);
            ++p2Score;
        }
    }
    else if (inputCheckbox.checked) {
        if (player == "p1"){
            textDiv.innerHTML = (`${p2Name} is winner!`);
            ++p2Score;
        }
        else{
            textDiv.innerHTML = (`${p1Name} is winner!`);
            ++p1Score;
        }
    }
}

function showScores(){
    headerText.classList.remove("hide");
    welcome.classList.add("hide");
    again.classList.remove("hide");
    children[0].innerHTML = (p1Name);
    children[1].innerHTML = (p1Score);
    children[3].innerHTML = (p2Score);
    children[4].innerHTML = (p2Name);
}


