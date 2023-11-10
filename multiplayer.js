function mP(e){
        e.target.classList.add(player);
        id = e.target.id;        
                //to color a cell before alert message
            if (player == "p1") {
                array[id] = player;
                checkWinner(array, player);
                player = "p2";
            }
            else {
                array[id] = player;
                checkWinner(array, player);
                player = "p1";
            }
            ++result;
            if (result == 9 && winnerExists==false) {
                document.querySelector("#rulesAndMore").innerHTML = ("Draw!");
                showResult();   
            }
        
    }