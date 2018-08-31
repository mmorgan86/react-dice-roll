// requires
let $ = require('jquery');
require("lodash");
require("./computerRoll.js");
// import { computerRoll } from './computerRoll.js';


// selectors
let intro = $("#intro")
let score = $("#score")

// score variables
let playerScore = 0
let computerScore = 0

// click roll button action
$("#roll-btn").on("click", function rollDice() {
  let dice = _.random(1,6)
  let computerDice = _.random(1,6)
  // let newNum = intro.html(`You rolled a <span>${dice}</span> and the cpu rolled a <span>${computerDice}</span><br /><h4> click roll to play again </h4>`)
  if (dice > computerDice) {
    intro.html(`<h2>You WIN</h2> <h3>You rolled a <span>${dice}</span> vs <span>${computerDice}</span> The computer rolled</h3>`)
    playerScore += 1
  } else if (dice == computerDice) {
    intro.html(`<h2>TIE</h2> <h3>You a <span>${dice}</span> vs <span>${computerDice}</span> The computer rolled</h3>`)
  } else {
    intro.html(`<h2>You LOST</h2> <h3>You rolled a <span>${dice}</span> vs <span>${computerDice}</span> The computer rolled</h3>`)
    computerScore += 1
  }
  score.html(`<h4>The Score is Player: ${playerScore} Computer: ${computerScore} </h4>`)
  $("#roll-btn").text("Roll Again")
})




