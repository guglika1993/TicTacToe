reset.classList.toggle("disabled");
reset.addEventListener("click",()=>{
    player = "p1";
    changer = 0;
    result = 0;
    endOfGame = false;
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let freeArray = [0,1,2,3,4,5,6,7,8];
    for(let cell of cells){
        if(cell.classList.contains("p1") || cell.classList.contains("p2")){
            cell.classList.remove("p1");
            cell.classList.remove("p2");
            cell.classList.toggle("disabled");
        }
    }
    table.style.pointerEvents = 'auto';
    bot.classList.toggle("disabled");
    mp.classList.toggle("disabled");
    reset.classList.toggle("disabled");
})
bot.addEventListener("click", () => {
    changer = 1;
    bot.classList.toggle("disabled");
    mp.classList.toggle("disabled");
    reset.classList.toggle("disabled");
})
mp.addEventListener("click", () => {
    changer = 2;
    mp.classList.toggle("disabled");
    bot.classList.toggle("disabled");
    reset.classList.toggle("disabled");
})