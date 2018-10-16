//put all of your global variables here
var goalNumber = $("#goalNumber");
var currentScore = $("#scoreDisplay");
var wins = 0;
var losses = 0;
var goalNumber = Math.floor(Math.random() * 100) + 20;

$("#goalNumber").text(goalNumber);
var currentScore = 0;
$("#scoreDisplay").text(currentScore);



function winLose() {
    if (currentScore === goalNumber) {
        alert("you win");
        wins++
        $("#wins").text(wins);
        resetEverything();
    };
    if (currentScore >= goalNumber) {
        alert("you lose");
        losses++
        $("#losses").text(losses);
        resetEverything();
    };

}



//put all of your functions here
//reset is most important function. update this continuously as I work.
function resetEverything() {
    goalNumber = Math.floor(Math.random()* 100) + 20;
    $("#goalNumber").text(goalNumber);
    currentScore = 0;
    $("#scoreDisplay").text(currentScore);
};


//put your onclick here
//aqua1 opal5 ruby7 diamond9

$("#aqua1").on("click", function() {
    //add corresponding number to currentScore
    currentScore += 1;
    $("#scoreDisplay").text(currentScore);
    console.log(currentScore)
    winLose()

});

$(".opal5").on("click", function() {
    //add corresponding number to currentScore
    currentScore += 5;
    $("#scoreDisplay").text(currentScore);
    winLose()
});

$(".ruby7").on("click", function() {
    //add corresponding number to currentScore
    currentScore += 7;
    $("#scoreDisplay").text(currentScore);
    winLose()
});

$(".diamond9").on("click", function() {
    //add corresponding number to currentScore
    currentScore += 9;
    $("#scoreDisplay").text(currentScore);
    winLose()
});

console.log(currentScore);
console.log(goalNumber)








