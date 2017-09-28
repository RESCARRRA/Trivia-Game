 $(document).ready(function() {
  // Create a function that creates the start button 
  // and sets up the initial screen
  function startGame() {
    introGame = "<button class='btn btn-lg text-center start-button btn-responsive' href='#' >.:.:.     PLAY     .:.:.</button>";
    $(".gameboard").html(introGame);
  }
  startGame();

// CLICK EVENTS & CONDITIONALS //

// Start Game
  //when user clicks the start button
  //set up gameboard and countdown
  $(".page").on("click", ".start-button", function(event) {
    htmlGameSet();
    countdownTimer();
  });  
  
// Questions
  // when user clicks an answer button
  // value is checked against correxct answer
  // if correct, adds to number correct/wins
  // else adds to number incorrect.losses
  //set up gameboard and countdown
  $(".page").on("click", ".answer-button", function(event) {
    userGuess = $(this).text();
    if (userGuess === correctAnswers[questionNum]) {
      clearInterval(countdown);
      win();
    } else {
      clearInterval(countdown);
      loss();
    }
  });
// Reset Game
  //when user clicks the start button
  //set up gameboard and countdown  
  $(".page").on("click", ".reset-button", function(event) {
    resetGame();
  });
// function for TimeOut!
  function timeOut() {
    unansweredCount++;
    htmlGame = "<h2 class='text-center time'>TIME: <span class='timer'>" + counter + "</span></h2>" + "<h2 class='text-center win-txt'>You ran out of time!"+"<br>" +"ANSWER: " + correctAnswers[questionNum] + "</h2>";
    $(".gameboard").html(htmlGame);
    setTimeout(pause, 4000);
  }
// function for winses
  function win() {
    correctCount++;
    htmlGame = "<h2 class='text-center time'>TIME: <span class='timer'>" + counter + "</span></h2>" + "<h2 class='text-center win-txt'>Correct!"+"<br>" +"ANSWER: " + correctAnswers[questionNum] + "<br>" + image[questionNum] + "</h2>";
    $(".gameboard").html(htmlGame);
    setTimeout(pause, 4000);
  }
// function for losses
  function loss() {
    incorrectCount++;
    htmlGame = "<h2 class='text-center time'>TIME: <span class='timer'>" + counter + "</span></h2>" + "<h2 class='text-center win-txt'>Wrong!"+"<br>" +"ANSWER: " + correctAnswers[questionNum] + "</h2>" + "<img class= 'center-img img-responsive'src='assets/images/brainerr.gif'>";
    $(".gameboard").html(htmlGame);
    setTimeout(pause, 3000);
  }
// function setting up the gameboard 
// time remaaining, questions, and answers that coincide
// with question count/counter
  function htmlGameSet() {
    htmlGame = "<h2 class='text-center time'><strong>COUNTDOWN: </strong><span class='timer'> 30 </span><hr></h2><h3 class='text-center questions-text'>" + questions[questionNum] + "</h3><br><button class='btn btn-lg answer-button'>" + answers[questionNum][0] + "</button>" + "<br><br>" + "<button class='btn btn-lg answer-button'>" + answers[questionNum][1] + "</button>" + "<br><br>" + "<button class='btn btn-lg answer-button'>" + answers[questionNum][2] + "</button>" + "<br><br>" + "<button class='btn btn-lg answer-button'>" + answers[questionNum][3] + "</button>";
    $(".gameboard").html(htmlGame);
  }
// functions controlling the behavior to follow
// pause, countdown, time, and timelimit
  function pause() {
    if (questionNum < 14) {
      questionNum++;
      htmlGameSet();
      counter = 30;
      countdownTimer();
    } else {
      endGame();
    }
  }
//functions controlling the countdown, limout, and pause
  function countdownTimer() {
    countdown = setInterval(timeLimit, 1000);

    function timeLimit() {
      if (counter === 0) {
        clearInterval(countdown);
        timeOut();
      }
      if (counter > 0) {
        counter--;
      }
      $(".timer").html(counter);
    }
  }
  //Should've used objects
  //endGame function shows ther results of the game
  // and updates the html content container in .gameboard
  function endGame() {
    htmlGame = "<h2 class='text-center time'>TIME REMAINING: <span class='timer'>" + counter + "</span></h2>" + "<h2 class='summary-correct'>Correct Answers: " + correctCount + "</h2>" + "<h2>Wrong Answers: " + incorrectCount + "</h2>" + "<h2>Unanswered: " + unansweredCount + "</h2>" + "<h2 class='text-center'><a class='btn btn-lg reset-button' href='#' role='button'>Reset The Quiz!</a></h2>";
    $(".gameboard").html(htmlGame);
  }
//function to reset the counts for the entire game
  function resetGame() {
    questionNum = 0;
    correctCount = 0;
    incorrectCount = 0;
    unansweredCount = 0;
    counter = 30;
    htmlGameSet();
    countdownTimer();
  }
  var introGame;
  var htmlGame;
  var counter = 30;
  //array of questions
  var questions = ["When was the Declaration of Independence approved by the Second Continental Congress?",
"A doctor with a PhD is a doctor of what?", "Scotch whisky and Drambuie make up which cocktail?",
"Which of these companies does NOT manufacture automobiles?", "What is the name of the popular animatronic fish prop that sings songs such as,<br><em> Don`t Worry Be Happy?</em>", "What direction does the Statue of Liberty face?", "Which iconic Disneyland attraction was replaced by the Guardians of the Galaxy themed ride?", "Who sang the 1999 hit entitled, <br><em>I Want It That Way?</em>",'Who played Agent Mulder in the sci-fi drama X-Files?', 'On the show Rick and Morty, who was the parasite in the episode entitled, <em>Total Rickall</em>?', 'In Game of Thrones, what continent lies across the Narrow Sea from Westeros?', 'The Hulu Original Series, <br><em>A Handmaids Tale</em>, <br>is based off a novel written by which author?', 'Who won the 2010 Kennedy Center Mark Twain Prize for American Humour?', 'What was the first living creature in space?', 'Along with Oxygen, which element is primarily responsible for the sky appearing blue?'];
  // array of an array of answers
  var answers = [
  ['July 2 1776', 'July 4 1776', 'July 4th 1777', 'July 17 1492'], ['Philosophy', 'Phrenology', 'Phonetics', 'Physiology'], ['Hardy Hardball', 'Rusty Nail', 'Corpse Reviver', 'Madhatter'], ['Nissan', 'GMC', 'Ducati', 'Fiat'], ['Big Butt Bass', 'Big Mouth Billy Bass', 'Singing Fish', 'Sardeen'], ['Southeast', 'Southwest', 'Northwest', 'Northeast'], ['The Haunted Mansion', 'Pirates of the Caribbean', 'Twilight Zone Tower of Terror', 'Peter Pan`s Flight'], ['N`Sync', '98 Degrees', 'Backstreet Boys', 'Sugar Ray'], ['Gillian Anderson', 'David Duchovny', 'Robert Patrick', 'Mitch Pileggi'], ['Pencilvester', 'Beth Smith', 'Summer Smith', 'Mr. Poopy Butthole'], ['Easteros', 'Essos', 'Westereast', 'Esuntos'], ['Toni Morrison', 'Alice Walker', 'Margaret Atwood', 'Amy Tan'], ['Tina Fey', 'Jay Leno', 'Bill Murray', 'Ellen DeGeneres'], ['Monkey', 'Dog', 'Fruit Flies', 'Mouse'], ['Nitrogen', 'Helium', 'Carbon', 'Hydrogen']

];
// array of correct answers
  var correctAnswers = ['July 2 1776', 'Philosophy', 'Rusty Nail', 'Ducati', 'Big Mouth Billy Bass', 'Southeast', 'Twilight Zone Tower of Terror', 'Backstreet Boys', 'David Duchovny', 'Pencilvester', 'Essos', 'Margaret Atwood', 'Tina Fey', 'Fruit Flies', 'Nitrogen'];
  // array of images that coinside with question number
  var image = [
"<img class='center-img img-responsive' src='assets/images/usaf.jpg'>",
"<img class='center-img img-responsive' src='assets/images/philosophy.jpg'>",
"<img class='center-img img-responsive' src='assets/images/rustynail.jpg'>",
"<img class='center-img img-responsive' src='assets/images/ducati.jpg'>",
"<img class='center-img img-responsive' src='assets/images/billymouthbass.jpg'>",
"<img class='center-img img-responsive' src='assets/images/statueofliberty.jpg'>",
"<img class='center-img img-responsive' src='assets/images/twilightzone.jpg'>",
"<img class='center-img img-responsive' src='assets/images/backstreetboys.jpg'>",
"<img class='center-img img-responsive' src='assets/images/xfiles.jpg'>",
"<img class='center-img img-responsive' src='assets/images/pencilvester.jpg'>",
"<img class='center-img img-responsive' src='assets/images/essos.jpg'>",
"<img class='center-img img-responsive' src='assets/images/atwood.png'>",
"<img class='center-img img-responsive' src='assets/images/fey.jpg'>",
"<img class='center-img img-responsive' src='assets/images/fruitfly.jpg'>",
"<img class='center-img img-responsive' src='assets/images/nitrogen.jpg'>",
"<img class='center-img img-responsive' src='assets/images/x.jpg'>"
];
  var questionNum = 0;
  var userGuess;
  var countdown;
  var correctCount = 0;
  var incorrectCount = 0;
  var unansweredCount = 0
 });