$(document).ready(function(){
    $("#hide").click(function(){
      $("p:first").hide();
    });
    $("#show").click(function(){
      $("p:first").show();
    });
    $("button").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
     
      
    });
  });