function playCellAudio (){
    for (let cell of cells){
        cell.addEventListener('click', ()=>{
            cellClick.play();
        })
    }
    for(let cell of cells){
        cell.addEventListener('mouseover', ()=>{
            cellHover.play();
        })
    }
}
