$(".play").click(function(){
    $(".play").css("-webkit-box-shadow","inset 1px 1px 2px #555");
    $(".pause").css("-webkit-box-shadow","-1px 0 2px #555");

  $(".record").css("-webkit-animation","spin 1.81s linear infinite running");
});


$(".pause").click(function(){
  $(".pause").css("-webkit-box-shadow","inset 1px 1px 2px #555");
    $(".play").css("-webkit-box-shadow","-1px 0 2px #999");
  $(".record").css("-webkit-animation","spin 1.81s linear infinite paused");
});
