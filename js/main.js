$(document).ready(function () {



  var player = 1;
  var square = $(".square");
  var score = 1;
  var player1 = parseInt($("#play1score").text());
  var player2 = parseInt($("#play2score").text());
  //adding class on click and identifying if sq has been selected

  $(".square").on("click", function(){

    var squareSelected = $(this);

    if (squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) {
      alert('this sq has already selected');
    } else {
      if(player === 1) {
        squareSelected.addClass('fa fa-times');
        if(checkIfPlayerWon('fa fa-times')) {
          alert('congrats! Player ' + player + ' has won!');
          $("#play1score").text(player1 += score);
        } else {
          player = 2;
        }
      } else {
        squareSelected.addClass('fa fa-circle-o');
        if(checkIfPlayerWon('fa fa-circle-o')) {
          alert('congrats! Player ' + player + ' has won!');
          $("#play2score").text(player2 += score);
        } else {
          player = 1;
        }
      }
    }
  });

//check winning
  function checkIfPlayerWon (symbol) {

    if ( $('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol) ) {
      return true;

    } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
      return true;

    } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;

    } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true;

    } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
      return true;

    } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;

    } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;

    } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true;

    } else {
      return false;

    }

  }

$('#continue').on("click", function(){
  $(".square").removeClass('fa fa-times').removeClass('fa fa-circle-o');
  $('#msg').text("");
})

$('#reset').on("click", function(){
   window.location.reload();
})






});
