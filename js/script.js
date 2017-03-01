$(window).resize(function(){

  if($(window).width()<838){
    $( ".spaceLeft" ).addClass("collapse");
  }
  else
  {
    $( ".spaceLeft" ).removeClass("collapse");
  }
});
