$(function(){
  var maxWidth = $(window).width();
  var maxHeight = $(window).height();
  var minWidth = 0;
  var stepX = 0;
  var tailleCarre = $('rectangle').outerWidth(true);
  alert(maxWidth + '\n' + maxHeight);
  $(document).keydown(function(touche){
    var appui = touche.which || touche.keyCode;
    //alert(appui);
    switch (appui){
      var positionX = $('#rectangle').offset().left + $('#rectangle').outerWidth(true);
      case 37: // fleche gauche
        $("#rectangle").finish().animate({right:"+=20px"},"fast");
        break;
      case 38: // fleche haut
        $("#rectangle").finish().animate({bottom:"+=20px"},"fast");
        break;
      case 39: // fleche droite
      var stop = (positionX <= largeur_fenetre ? '+=10' : '0');
        $("#rectangle").finish().animate({right:"-=20px"},"fast");
        break;
      case 40: // fleche bas
        $("#rectangle").finish().animate({bottom:"-=20px"},"fast");
        break;
      default:
        alert('coucou');
    }
  });
  if($('#rectangle').offset().left < 8)
  {
    alert($('#rectangle').offset().top +'\n'+$('#rectangle').offset().left);
  }
});
