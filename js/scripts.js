$(document).ready(function() {
  $("form#animal").submit(function(event) {
    event.preventDefault();
    var animalChoice = $("#animalSelection").val();
    if (animalChoice === "Turtle") {
      $("#turtleInfo").show();
      $("#snakeInfo").hide();
      $("#insectInfo").hide();
    } else if (animalChoice === "Snakes") {
      $("#snakeInfo").show();
      $("#turtleInfo").hide();
      $("#insectInfo").hide();
    } else if (animalChoice === "Insects") {
      $("#insectInfo").show();
      $("#snakeInfo").hide();
      $("#turtleInfo").hide();
    } else {
      $("#turtleInfo").hide();
      $("#snakeInfo").hide();
      $("#insectInfo").hide();
    }
  });
});
