inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
        player1.role = "p2";
        player2.role = "p1";
        document.querySelector("#o").style.backgroundColor = "yellow";
        document.querySelector("#x").style.backgroundColor = "white";
    }
    else {
        player1.role = "p1";
        player2.role = "p2";
        document.querySelector("#x").style.backgroundColor = "yellow";
        document.querySelector("#o").style.backgroundColor = "white";
    }
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
    firstLoad ? firstLoad=false : buttonClick.play();
    for(let cell of cells){
        cell.style.pointerEvents = 'none';
    }
    player1 = new Player("player1", 0, "p1");
    player2 = new Player("player2", 0, "p2");
    whosTurn = player1.name;
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    freeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    id = -1;
    result = 0;
    changer = 2;
    winnerExists = false;
    endOfGame = false;
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
    buttonClick.play();
    changer = 1;
    textDiv.classList.add("hide");
    if(changer == 1){
        name2Input.classList.add("hide");
    }
    inputsDiv.classList.remove("hide"); 
})

mp.addEventListener("click", () => {
    buttonClick.play();
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
    decideMode();
    decideName();
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
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    freeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    showScores();
    decideMode();
    toggleColor();
    bot.classList.add("disabled");
    mp.classList.add("disabled");
})

function disableEnable() {
    document.querySelector("#rulesAndMore").classList.add("hide");
    buttonClick.play();
    mp.classList.toggle("disabled");
    bot.classList.toggle("disabled");
    reset.classList.remove("disabled");
    bot.disabled = true;
    mp.disabled = true;
    reset.disabled = false;
    
}

function decideMode(){
    if(player1.role == "p1"){
        whosTurn = player1.name;
    }
    else{
        whosTurn = player2.name;
    }

    if(changer == 1){
        console.log(whosTurn);
        if(whosTurn == player1.name){
            for(let cell of cells){
                cell.style.pointerEvents = 'auto';
            }
        }
        else{
            for(let cell of cells){
                cell.style.pointerEvents = 'auto';
            }
            findRandomFreeCell(freeArray);
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
    let saxeli, saxeli2;
    if (changer == 1) {
        saxeli = name1Input.value.trim();
        if(saxeli != ""){
            player1.name = saxeli;
        }
        player2.name = "Bot";
    }
    else if (changer == 2){
        saxeli = name1Input.value.trim();
        saxeli2 = name2Input.value.trim();
        if(saxeli != ""){
            player1.name = saxeli;
        }
        if(saxeli2 != ""){
            player2.name = saxeli2;
        }
    }
    else{
        console.log("Mode not choosen!");
    }
    player1.name = sliceName(player1.name);
    player2.name = sliceName(player2.name);
}

let sliceName = (name)=>{
    return name.slice(0,8);
}


