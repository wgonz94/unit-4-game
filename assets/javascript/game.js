var targetNumber = Math.floor(Math.random()* 102) + 19;

$("#goalNumber").text(targetNumber);

var counter = 0;
var counterWin = 0;
var counterLose = 0;


var incrementRandom = Math.floor(Math.random()* 11) + 1;
var incrementRandomtwo = Math.floor(Math.random()* 11) + 1;
var incrementRandomthree = Math.floor(Math.random()* 11) + 1;
var incrementRandomfour = Math.floor(Math.random()* 11) + 1;

var reset = function(){
    targetNumber = Math.floor(Math.random()* 102) + 19;
    $("#goalNumber").text(targetNumber)
    counter = 0;
    $("#scoreTotal").text(counter)

    incrementRandom = Math.floor(Math.random()* 11) + 1;
    incrementRandomtwo = Math.floor(Math.random()* 11) + 1;
    incrementRandomthree = Math.floor(Math.random()* 11) + 1;
    incrementRandomfour = Math.floor(Math.random()* 11) + 1;


};
$(".greenJewel").on("click", function(){
    counter += incrementRandom;
    $("#scoreTotal").text(counter);

    if (targetNumber == counter) {
        counterWin ++;
        $("#winSpot").text(counterWin);
        reset();
    } else if (targetNumber < counter) {
        counterLose ++;
        $("#loseSpot").text(counterLose);
        alert("You Lose!!");
        reset();
    };

});
$(".redJewel").on("click", function(){
    counter += incrementRandomtwo;
    $("#scoreTotal").text(counter);

    if (targetNumber == counter) {
        counterWin ++;
        $("#winSpot").text(counterWin);
        reset();
    } else if (targetNumber < counter){
        counterLose ++;
        $("#loseSpot").text(counterLose);
        alert("You Lose!!");
        reset();
    };

});
$(".diamondJewel").on("click", function(){
    counter += incrementRandomthree;
    $("#scoreTotal").text(counter);

    if (targetNumber == counter) {
        counterWin ++;
        $("#winSpot").text(counterWin);
        reset();
    } else if (targetNumber < counter){
        counterLose ++;
        $("#loseSpot").text(counterLose);
        alert("You Lose!!");
        reset();
    };

});
$(".starJewel").on("click", function(){
    counter += incrementRandomfour;
    $("#scoreTotal").text(counter);

    if (targetNumber == counter) {
        counterWin ++;
        $("#winSpot").text(counterWin);
        reset();
    } else if (targetNumber < counter){
        counterLose ++;
        $("#loseSpot").text(counterLose);
        alert("You Lose!!");
        reset();
    };
});

    

 