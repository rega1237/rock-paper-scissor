/* Primero definir que valor numerico le doy a cada elemento usando el metodo Math.random() y
y multiplicarlo por 3, y usando Math.floor() para que arroje numeros enteros.
    - 0 = piedra
    - 1 = papel
    - 2 = tijera
*/

// Juega la computadora

let valueComputer = Math.floor(Math.random() * 3)

//console.log(valueComputer)

let choiceComputer = function(value){

    
    if (valueComputer === 0) {

        choiceComputer = 'Rock';

    }else if (valueComputer === 1){

        choiceComputer = 'Paper';
        

    }else {

        choiceComputer = 'Scissors';

    }

    return choiceComputer;

}

//console.log(choiceComputer(valueComputer));

// Seleccion del jugador

let enterPlayer = prompt(`Let's gonna play, pick a choice:`);
let choicePlayer = enterPlayer[0].toUpperCase() + enterPlayer.slice(1);
console.log(choicePlayer);

let playRound = function(player,computer){

    let resultGame;
    
    if ((player == 'Scissors' && computer == 'Paper') || (player == 'Paper' && computer == 'Rock') || (player == 'Rock' && computer == 'Scissors')) {

        playRound = 'Player wins';

    } else if ((computer == 'Scissors' && player == 'Paper') || (computer == 'Paper' && player == 'Rock') || (computer == 'Rock' && player == 'Scissors')) {

        playRound = 'Machine wins';

    }else {

        playRound = `It's a tie`;

    }

    return playRound;
}

console.log(playRound(choicePlayer,choiceComputer));