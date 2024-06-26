// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").load("assets\\files\\demo_test.txt");
//     });
//   });

  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").load("assets\\files\\demo_test.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });