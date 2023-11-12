function mP(e){
    let role = whosTurn == player1.name ? player1.role : player2.role;
    let name = whosTurn == player1.name ? player1.name : player2.name;
    console.log(whosTurn)
        e.target.classList.add(role);
        id = e.target.id;        
                array[id] = role;
                checkWinner(array, name);    
            
            ++result;
            if (result == 9 && winnerExists==false) {
                textDiv.innerHTML = "Draw!";
                showResult();   
            }
            whosTurn = whosTurn == player1.name ? player2.name : player1.name;
    }





