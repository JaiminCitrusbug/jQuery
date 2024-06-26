$(document).ready(function () {
  $("#hide").click(function () {
    $("p:first").hide();
  });
  $("#show").click(function () {
    $("p:first").show();
  });
  $("#btn1").click(function () {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
    $("#btn2").click(function () {
      $("#div4").fadeTo("fast", 0.15);
      $("#div5").fadeTo("fast", 0.4);
      $("#div6").fadeTo("fast", 0.7);
    
  });
  $("#btn3").click(function(){
    $("#div8").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});
