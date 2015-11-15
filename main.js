$('#switch').click(function() {
  $('.everything').addClass('hide-me');
  $('.game-container').removeClass('hide-me');
});
$('#button-instructions').click(function() {
  $('.game-container').addClass('hide-me');
  $('.everything').removeClass('hide-me');
});
