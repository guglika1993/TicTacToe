let cell;

function findRandomFreeCell(ar) {
    table.style.pointerEvents = 'none';
    let rand = Math.floor(Math.random() * freeArray.length);
    cell = freeArray[rand];

    setTimeout(() => {
        if (player == "p1") {
            player = "p2";
        } else {
            player = "p1";
        }
        cellClick.play();
        if (cell != undefined) {
            document.getElementById(`${cell}`).classList.add(player);
            document.getElementById(`${cell}`).style.pointerEvents = 'none';
            array[cell] = player;
        }
        checkWinner(array, player);
        freeArray = ar.filter((value) => { return value != cell });
        if (player == "p1") {
            player = "p2";
        } else {
            player = "p1";
        }
    
    }, 500)

    setTimeout(() => {
        table.style.pointerEvents = 'auto';
    },600);

}