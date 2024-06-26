// window.onload = function () {
//   alert("welcome");
// };

$(document).ready(function () {
  //Selectors and events
  $("#btn1").click(function () {
    $("h2").hide();
  });
  $("button").dblclick(function () {
    $(this).hide();
  });
  $("#btn2").hover(function () {
    $(this).hide();
  });
  $("#btn3").mouseenter(function () {
    $(".para").hide();
  });
  $("#btn3").mouseleave(function () {
    $(".para").show();
  });
  $("#btn5").mousedown(function () {
    $("#p1").hide();
  });
  $("#btn5").mouseup(function () {
    $("#p1").show();
  });
  $("#inp1").focus(function () {
    $(this).css("background-color", "#cccccc");
  });
  $("p").on({
    hover: function(){
      $(this).css("background-color", "lightgrey");
    },
    dblclick: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });
  
});
