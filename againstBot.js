function findRandomFreeCell(ar) {
    // table.style.pointerEvents = 'none';
    for(let cell of cells){
        cell.style.pointerEvents = 'none';
    }
    let rand = Math.floor(Math.random() * freeArray.length);
    cell = freeArray[rand];

    setTimeout(() => {
        if(inputCheckbox.checked){

        }
        cellClick.play();
        console.log(player2.role);
        if (cell != undefined) {
            document.getElementById(`${cell}`).classList.add(player2.role);
            document.getElementById(`${cell}`).style.pointerEvents = 'none';
            array[cell] = player2.role;
        }
        checkWinner(array, player2.name);
        freeArray = ar.filter((value) => { return value != cell });
        whosTurn = player1.name;
    }, 500)

    setTimeout(() => {
        if(winnerExists==false){
        for(let cell of cells){
            if(!(cell.classList.contains("p1") || cell.classList.contains("p2")))
            cell.style.pointerEvents = 'auto';
        }}
    },600);

}