reset.classList.toggle("disabled");
reset.disabled = true;

inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
        player = "p2";
        document.querySelector("#o").style.backgroundColor = "yellow";
        document.querySelector("#x").style.backgroundColor = "white";
    }
    else {
        player = "p1";
        document.querySelector("#x").style.backgroundColor = "yellow";
        document.querySelector("#o").style.backgroundColor = "white";
    }
    // document.querySelector("#rulesAndMore").classList.add("hide");
})

reset.addEventListener("click", resetF);

function resetF(){
    
    document.querySelector("#rulesAndMore").classList.remove("hide");
    document.querySelector("#rulesAndMore").style.backgroundColor = "rgba(20,80,81,0.8)";
    if(defaultStringReplaced){
        textDiv.innerHTML = defaultString;
    }        
    textDiv.classList.remove("hide");    
    inputsDiv.classList.add("hide"); //was remove
    name1Input.classList.remove("hide");
    name2Input.classList.remove("hide");
    start.classList.remove("hide");
    headerText.classList.add("hide");
    welcome.classList.remove("hide");
    again.classList.add("hide");
    buttonClick.play();
    for(let cell of cells){
        cell.style.pointerEvents = 'none';
    }
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    freeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    player = "p1";
    id = -1;
    result = 0;
    changer = 2;
    winnerExists = false;
    endOfGame = false;
    p1Name = "";
    p2Name = "";
    p1Score = 0;
    p2Score = 0;
    for (let cell of cells) {
        if (cell.classList.contains("p1") || cell.classList.contains("p2")) {
            cell.classList.remove("p1");
            cell.classList.remove("p2");
            cell.classList.add("disabled"); //
        }
    }
    bot.classList.remove("disabled"); //
    mp.classList.remove("disabled");  //
    reset.classList.add("disabled");  //
    bot.disabled = false;
    mp.disabled = false;
    reset.disabled = true;
    inputCheckbox.disabled = false;
    inputCheckbox.checked = false;
    toggleColor();
}


bot.addEventListener("click", () => {
    changer = 1;
    textDiv.classList.add("hide");
    if(changer == 1){
        name2Input.classList.add("hide");
    }
    inputsDiv.classList.remove("hide"); 
})

mp.addEventListener("click", () => {
    changer = 2;
    textDiv.classList.add("hide");
    if(changer == 1){
        name2Input.classList.add("hide");
    }
    else{
        name2Input.classList.remove("hide");
    }
    inputsDiv.classList.remove("hide");
})

start.addEventListener("click", ()=>{
    inputCheckbox.disabled = true;
    decideName();
    decideMode();
    showScores();
})

again.addEventListener("click", ()=>{
    buttonClick.play();
    inputCheckbox.disabled = true;
    for(let cell of cells){
        cell.style.pointerEvents = 'auto';
        if (cell.classList.contains("p1") || cell.classList.contains("p2")) {
            cell.classList.remove("p1");
            cell.classList.remove("p2");
            cell.classList.toggle("disabled");
        }
    }
    document.querySelector("#rulesAndMore").classList.add("hide");
    winnerExists = false;
    endOfGame = false;
    result = 0;
    player = "p1";
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    freeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    showScores();
})

function disableEnable() {
    document.querySelector("#rulesAndMore").classList.add("hide");
    buttonClick.play();
    mp.classList.toggle("disabled");
    bot.classList.toggle("disabled");
    reset.classList.toggle("disabled");
    bot.disabled = true;
    mp.disabled = true;
    reset.disabled = false;
    
}

function decideMode(){
    if(changer == 1){
        if (player == "p2") {
            findRandomFreeCell(freeArray);
        }
        else if(player == "p1"){
            for(let cell of cells){
                cell.style.pointerEvents = 'auto';
            }
        }
        disableEnable();
    }
    else if(changer == 2){
        for(let cell of cells){
            cell.style.pointerEvents = 'auto';
            disableEnable();
        }
    }       
    
}

function decideName(){
    if (changer == 1) {
        p1Name = name1Input.value.trim();
        if(p1Name == ""){
            p1Name = "Player";
        }
        p2Name = "Bot";
    }
    else if (changer == 2){
        p1Name = name1Input.value.trim();
        p2Name = name2Input.value.trim();
        if(p1Name == ""){
            p1Name = "Player";
        }
        if(p2Name == ""){
            p2Name = "Player2";
        }
    }
    else{
        console.log("Mode not choosen!");
    }
}
