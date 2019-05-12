
var counter = 60;
var counterNumb;

var correctGuesses = 0;
var wrongGuesses = 0;
var unanswered = 0;
var playerAns = []

var questions = [{
    question: "Which Coen Brothers cult classic film features the principal character hanging out at a bowling alley all the time, but the character never actually bowls?",
    choices: ["Crimewave", "Raising Arizona", "The Big Lebowski", "O Brother, Where Art Thou?",],
    answer: 2,
},
{
    question: "In the first two Jaws films, what was the police chiefs name?",
    choices: ["Jacob Waters", "Martin Brody", "David Jackson", "Peter Messer",],
    answer: 1,
},
{
    question: "What movie character was a cannibal who enjoyed fava beans and a nice chiante?",
    choices: ["Hans Gruber", "Norman Bates", "Buffalo Bill", "Hannibal Lecter",],
    answer: 3,
},
{
    question: "What computer program caused the end of the world in Terminator?",
    choices: ["Skynet", "Umbrella Coprorations", "Ultron", "Project Steel",],
    answer: 0,
},
{
    question: "What does the Predator see?",
    choices: ["Sound", "Heat", "Movement", "Light",],
    answer: 1,
},
{
    question: "Running Man starring Arnold Schwarzenegger is based on a novel by whom?",
    choices: ["Clive Barker", "Tom Sawyer", "Stephen King", "Cormac McCarthy",],
    answer: 2,
},
{
    question: "John Rambo is a veteran of what war?",
    choices: ["Vietnam War", "World War 1", "World War 2", "Korean War",],
    answer: 0,
},
{
    question: "What speed must the bus travel in order to avoid exploding in the movie Speed?",
    choices: ["85mph", "90mph", "75mph", "50mph",],
    answer: 3,
},
{
    question: "In Goodfellas, what is Henry Hill's job as a teenager that gets him involved with the mob?",
    choices: ["Parking Cars", "Picking up Groceries", "Washing Dishes", "selling newspapers",],
    answer: 0,
},
{
    question: "What specific creature does Indiana Jones hate?",
    choices: ["Rats", "Snakes", "Wasps", "Scorpions",],
    answer: 1,
},



];

for (var i = 0; i < questions.length; i++) {
    playerAns[i] = null;
}

$(document).ready(function () {

    $("#startGame").click(function () {
        $('#startGame').hide();
        counterNumb = setInterval(countdown, 1000);
        displayQuestions();
        displaySubmit();

        $("#submitQuiz").click(function () {
            displayResults();
        });

        $("input").click(function () {
            playerAns[this.name] = this.value;

        });
    });
});


function displayQuestions () {
 for (var i = 0; i < questions.length; i++) {
     $("#tempQuiz").append(questions[i].question + "</br>");

     for (var x = 0; x < questions[i].choices.length; x++) {
         $("#tempQuiz").append("<label class='radio inline'><input value='" + x + "' type='radio' name='" + i + "'>" + questions[i].choices[x] + "</label>");
     }

     $("#tempQuiz").append("<br/><br/>");
 
    }

}


function displaySubmit () {
    $("#tempSubmit").append("<button id='submitQuiz' class='btn btn-primary btn-lg'>Submit</button>");
}


function countdown () {
    counter--;
    $("#timeRemaining").html("<h2><mark>" + counter + "seconds remaining.</mark></h2>");
    if (counter === 0) {
        displayResults();
    }

}

function displayResults () {
    $("#tempQuiz").hide();
    $("#tempSubmit").hide();
    $("#submitQuiz").hide();

    for (i = 0; i < questions.length; i++) {
        if (questions[i].answer == playerAns[i]) {
            correctGuesses++;
        }
        else if (playerAns === null) {
            unanswered++;
        }
        else {
            wrongGuesses++;
        }
    }

    var quizResults = $("#Results");
    $(quizResults).append("<p>All Done!</p>");
    $(quizResults).append("<p>Correct Answers: " + correctGuesses + "</p>");
    $(quizResults).append("<p>Incorrect Answers: " + wrongGuesses + "</p>");
    $(quizResults).append("<p>Unanswered: " + unanswered + "</p>");
    clearInterval(counterNumb);
}

