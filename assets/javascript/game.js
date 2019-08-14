var targetNumber = Math.floor(Math.random()* 102) + 19;

$("#goalNumber").text(targetNumber);

var counter = 0;
var counterWin = 0;
var counterLose = 0;
var incrementOne = 1;

var incrementRandom = Math.floor(Math.random()* 11) + 1;
var incrementRandomtwo = Math.floor(Math.random()* 11) + 1;
var incrementRandomthree = Math.floor(Math.random()* 11) + 1;
var incrementRandomfour = Math.floor(Math.random()* 11) + 1;

var reset = function(){
    var targetNumber = Math.floor(Math.random()* 102) + 19;

    var counter = 0;

    var incrementRandom = Math.floor(Math.random()* 11) + 1;
    var incrementRandomtwo = Math.floor(Math.random()* 11) + 1;
    var incrementRandomthree = Math.floor(Math.random()* 11) + 1;
    var incrementRandomfour = Math.floor(Math.random()* 11) + 1;


};
$(".greenJewel").on("click", function(){
    counter += incrementRandom;
    $("#scoreTotal").text(counter);

});
$(".redJewel").on("click", function(){
    counter += incrementRandomtwo;
    $("#scoreTotal").text(counter);

});
$(".diamondJewel").on("click", function(){
    counter += incrementRandomthree;
    $("#scoreTotal").text(counter);

});
$(".starJewel").on("click", function(){
    counter += incrementRandomfour;
    $("#scoreTotal").text(counter);

});

if (scoreTotal = goalNumber) {
    counterWin += incrementOne
    $("#")
    alert("You Win!!")

}