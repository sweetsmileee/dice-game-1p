let diceImage = document.getElementById("diceImage");
const roll = document.getElementById("roll");
let score = document.getElementById("playerScore");
let output = document.getElementById("output");
let playerScore= 0;

let dice = [
    {value: 1, img:"img/dice1.png"},
    {value: 2, img:"img/dice2.png"},
    {value: 3, img:"img/dice3.png"},
    {value: 4, img:"img/dice4.png"},
    {value: 5, img:"img/dice5.png"},
    {value: 6, img:"img/dice6.png"},
];
diceImage.src= dice[0].img;

function reset() {
    roll.textContent=("Play AGAIN");
    playerScore= 0; 
    score.innerHTML=(playerScore);
}

roll.addEventListener ('click', ()=> {
    let player = dice[Math.floor((Math.random()*dice.length))];
    diceImage.src = player.img;  
    roll.textContent=("Roll the dice");
    output.textContent = ("Keep Rolling");
        if (player.value == 1) {
            output.textContent=("You have lost"); 
            reset();
        } else {
            playerScore += player.value;
            score.textContent=(playerScore);
        }
        if (playerScore >= 20){
            output.textContent=("You have WON!");
            roll.textContent=("Play AGAIN");
            reset();
        }
}); 