$(document).ready(function () { 
  // create variables for values
  var randomNumber = 0;  
  var randomCrystalValue = 0;
  var crystals = [0, 0, 0, 0];
  var totalScore = 0;

  var wins = 0;
  var losses = 0;

  // function to generate random number and crystal values
  function valuesSet() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(randomNumber);    
        
    for (var i = 0; i < crystals.length; i++) {
      randomCrystalValue = Math.floor(Math.random() * 12) + 1;
      crystals[i] = randomCrystalValue;

      console.log("Random value: " + crystals[i]);
      
    };

    totalScore = 0;
    $("#total-score").text(totalScore);
  };

  valuesSet();

  // create on click function for each crystal image to add to total score
  $(".crystalimg").on("click", function () {

    totalScore += crystals[parseInt($(this).attr("id"))];
    $("#total-score").text(totalScore);
    
    // need to check total score with random number
    // if total score === random number, increase to wins counter
    // if total score > random number, increase to loss counter

    if (totalScore === randomNumber) {
      wins++;
      $("#wins-count").html("Wins: " + wins);
      $("#loss-count").html("Losses: " + losses);
      alert("You win!");

      // reset random number and values
      valuesSet();

    } else if (totalScore > randomNumber) {
      losses++;
      $("#wins-count").html("Wins: " + wins);
      $("#loss-count").html("Losses: " + losses);
      alert("Sorry, you busted! Try again.");

      valuesSet();

    };


  });
  
  
  

  
  // reset random number and crystal value








});