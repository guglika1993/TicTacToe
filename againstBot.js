let freeArray = [0,1,2,3,4,5,6,7,8];
let cell;

function findRandomFreeCell(ar){
    table.style.pointerEvents = 'none'; 
    if (player == "p1") {
        player = "p2";
    } else{
        player = "p1";
    }
    let rand = Math.floor(Math.random()*freeArray.length);
    cell = freeArray[rand];
    
    setTimeout(()=>{
        cellClick.play();
        if(cell!=undefined){
            document.getElementById(`${cell}`).classList.add(player);
            document.getElementById(`${cell}`).classList.toggle("disabled");
            array[cell] = player;
        }
        checkWinner(array, player);
        freeArray = ar.filter((value)=>{return value != cell});
        if (player == "p1") {
            player = "p2";
        } else{
            player = "p1";
        }
        table.style.pointerEvents = 'auto'; 
    },500)
    
}