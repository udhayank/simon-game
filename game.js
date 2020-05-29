var gamePattern =[];
var userClickPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = 0;



  $(document).keypress(function(){
    nextSequence();
  });

  $(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
    checkAnswer((userClickPattern.length)-1);
    animatePress(userChosenColor);
    playSound(userChosenColor);


  })



  function nextSequence() {
    userClickPattern = [];
    var randomNumber = Math.floor(4*Math.random());
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("." + randomChosenColor).fadeTo(100,0.3).fadeTo(100,1);
    playSound(randomChosenColor);
    level++;
    $("h1").text("Level " + level);
  }

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100)
}

function checkAnswer(curentLevel){

  if (userClickPattern[curentLevel] == gamePattern[curentLevel]){

    if (userClickPattern.length == gamePattern.length){

      setTimeout(function () {
        nextSequence();
      },1000);
    }else{

    }
  }else{
    // wrong
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },400)
    $("h1").text("Game over! Press any key to restart.");
    startOver();
  }
}

function startOver(){
  gamePattern =[];
  level = 0;
}
