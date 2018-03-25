$("#Wrapper").hide()

$(document).ready(function () {


    // global variables

    var seconds = 30;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var intervalId;
 


    // Function that starts the clock and shows quiz questions
    function starter() {
        clearInterval(intervalId);
        intervalId = setInterval(countdown, 1000);

        $("#Wrapper").show()
    }

    // Set up clock and show it on the page
    $()
    function countdown() {
        minutes = 0;
        seconds--;
        $("#startButton").html("<h2>" + "Time Left: " + seconds + "<h2>");

        // if time is over, the quiz will end and results will show.
        if (seconds <= 0) {
            timesUp()
        }

    }

    // Increments correct score
    $("body").on("click", ".correctAnswer", function () {
        correctAnswers++;
    })

    //Increments incorrect score
    $("body").on("click", ".incorrect", function () {
        incorrectAnswers++;
    })


    // Clear Interval and display results 
    function timesUp() {

        clearInterval(intervalId);
        var html =
            "<h1>YOUR SCORES!<h!>" +
            "<p>Correct Answers: " + correctAnswers + "</p>" +
            "<p>Incorrect Answers: " + incorrectAnswers + "</p>";


        $("#Wrapper").html(html)
    }

    // on click event allows start button to trigger the beginning of the quiz
    $("#startButton").on("click", starter)

    // submit button allows the user to submit his/her answers if they finish before the countdown
    $("body").on("click", "#submit", function () {
        timesUp();

    })



});







