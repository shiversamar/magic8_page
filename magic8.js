

// function greet () {

function answer () {
  // Get question
  var question = document.getElementById("question").value;
  // Clear question field
  document.getElementById("question").value = "";

  // Create random number to select the answer
  var random = Math.floor(Math.random()*8);
  var answer;
  // "Find" an answer
  if (random === 0) {
    answer = "Yes!";
  }
  if (random === 1) {
    answer = "No!";
  }
  if (random === 2) {
    answer = "Maybe!";
  }
  if (random === 3) {
    answer = "It is certain";
  }
  if (random === 4) {
    answer = "Ask Again";
  }
  if (random === 5) {
    answer = "Ask Me Later";
  }
  if (random === 6) {
    answer = 'Ask <a href="http://google.com">Google</a>';
  }
  if (random === 7) {
    answer = "You will die a horrible death";
  }


  // Display the question
  document.getElementById("questionField").innerHTML = question;
  document.getElementById("questionField").style.visibility='visible';
  document.getElementById("questionlabel").style.visibility='visible';
  // Display the answer
  document.getElementById("answerField").innerHTML = answer;
  document.getElementById("answerField").style.visibility='visible';
  document.getElementById("answerlabel").style.visibility='visible';
}
