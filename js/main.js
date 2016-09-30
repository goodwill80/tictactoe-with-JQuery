$(document).ready(function () {



  var player = 1;

  $(".square").on("click", function(){

    var squareSelected = $(this);

    if (squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
      alert('this sq has already selected');
    } else {
      if(player === 1) {
        squareSelected.addClass('ex');
        player = 2;
      } else {
        squareSelected.addClass('oh');
        player = 1;
      }
    }
  });






});
