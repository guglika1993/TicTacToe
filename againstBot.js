let freeArray = [0,1,2,3,4,5,6,7,8];
let cell;

function findRandomFreeCell(ar){ 
    let rand = Math.floor(Math.random()*freeArray.length);
    cell = freeArray[rand];
    if(cell!=undefined){
        document.getElementById(`${cell}`).classList.add("p2");
        document.getElementById(`${cell}`).classList.toggle("disabled");
        array[cell] = "p2";
    }
    checkWinner(array, "p2");
    freeArray = ar.filter((value)=>{return value != cell});
}