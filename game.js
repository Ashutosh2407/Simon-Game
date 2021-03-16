var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
  if (!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started =True;

  }

});


function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function nextSequence(){
  level++;
  $("#level-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4) ;
  gamePattern.push(buttonColors[randomNumber]);
  $("#" + buttonColors[randomNumber]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(buttonColors[randomNumber]);


}

function animatePress(currentColor){
  $("#" + currentColor).toggleClass("pressed");
  setTimeout(
  function()
  {
    $("#" + currentColor).toggleClass("pressed");
  }, 100);

}



$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  console.log(userClickedPattern);
});
