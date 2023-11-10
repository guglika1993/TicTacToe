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
    document.querySelector("#rulesAndMore").classList.add("hide");
})
reset.addEventListener("click", () => {
    document.querySelector("#rulesAndMore").classList.add("hide");
    table.style.pointerEvents = 'none';
    buttonClick.play();
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    freeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    player = "p1";
    result = 0;
    changer = 0;
    winnerExists = false;
    endOfGame = false;
    for (let cell of cells) {
        if (cell.classList.contains("p1") || cell.classList.contains("p2")) {
            cell.classList.remove("p1");
            cell.classList.remove("p2");
            cell.classList.toggle("disabled");
        }
    }
    bot.classList.toggle("disabled");
    mp.classList.toggle("disabled");
    reset.classList.toggle("disabled");
    bot.disabled = false;
    mp.disabled = false;
    reset.disabled = true;
    inputCheckbox.disabled = false;
    inputCheckbox.checked = false;
    toggleColor();
})
bot.addEventListener("click", () => {
    if (player == "p2") {
        findRandomFreeCell(freeArray);
    }
    document.querySelector("#rulesAndMore").classList.add("hide");
    table.style.pointerEvents = 'auto';
    buttonClick.play();
    changer = 1;
    bot.classList.toggle("disabled");
    mp.classList.toggle("disabled");
    reset.classList.toggle("disabled");
    bot.disabled = true;
    mp.disabled = true;
    reset.disabled = false;
    inputCheckbox.disabled = true;
})
mp.addEventListener("click", () => {
    document.querySelector("#rulesAndMore").classList.add("hide");
    table.style.pointerEvents = 'auto';
    buttonClick.play();
    changer = 2;
    mp.classList.toggle("disabled");
    bot.classList.toggle("disabled");
    reset.classList.toggle("disabled");
    bot.disabled = true;
    mp.disabled = true;
    reset.disabled = false;
    inputCheckbox.disabled = true;
})