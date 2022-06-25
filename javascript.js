
let viableChoices = ["rock", "paper", "scissors"]
let playerSelection
let playerInput = ""
let cpuSelection
let outcome = document.getElementById("outcome")
let cpuChoice = document.getElementById("cpuChoice")
let playerChoice = document.getElementById("playerChoice")



function game(){

    for (i=0; i<=5; i++)
    {

        cpuSelection = computerPlay()
        validChoiceTest()

        if(playerSelection===cpuSelection){

            playerChoice.textContent = "Player chose: " + viableChoices[playerSelection] + "!"
            cpuChoice.textContent = "CPU chose: " + viableChoices[cpuSelection] + "!"
            return outcome.textContent = "Outcome: Draw!"

        } else if(playerSelection===0 && cpuSelection===2){
            playerChoice.textContent = "Player chose: " + viableChoices[playerSelection] + "!"
            cpuChoice.textContent = "CPU chose: " + viableChoices[cpuSelection] + "!"
            
            return outcome.textContent = "Outcome: Player WINS!"

        }
        else if(playerSelection===2 && cpuSelection===0){
            playerChoice.textContent = "Player chose: " + viableChoices[playerSelection] + "!"
            cpuChoice.textContent = "CPU chose: " + viableChoices[cpuSelection] + "!"
            
            return outcome.textContent = "Outcome: CPU WINS!"

        }

        else if(playerSelection>cpuSelection){
            playerChoice.textContent = "Player chose: " + viableChoices[playerSelection] + "!"
            cpuChoice.textContent = "CPU chose: " + viableChoices[cpuSelection] + "!"
            
            return outcome.textContent = "Outcome: Player WINS!"

        } 

        else{
            playerChoice.textContent = "Player chose: " + viableChoices[playerSelection] + "!"
            cpuChoice.textContent = "CPU chose: " + viableChoices[cpuSelection] + "!"
            
            return outcome.textContent = "Outcome: CPU WINS! You LOST!"

        }
    }

}



function computerPlay(){

    return Math.floor(Math.random()* 3)
}



function validChoiceTest(){
for(let i=0; i<2; i++){
playerInput = prompt("Rock, paper or scissors?").toLowerCase()

if (viableChoices.includes(playerInput)){
    playerSelection = viableChoices.indexOf(playerInput)
    return playerSelection
} else {
    console.log("Please choose between rock, paper scissors.")
    i=0
}
}
}





