var targetNumber = Math.floor(Math.random()* 102) + 19;

$("#goalNumber").text(targetNumber);

var counter = 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var incrementRandom = numberOptions[Math.floor(Math.random())];
var incrementRandomtwo = numberOptions[Math.floor(Math.random())];
var incrementRandomthree = numberOptions[Math.floor(Math.random())];
var incrementRandomfour = numberOptions[Math.floor(Math.random())];

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