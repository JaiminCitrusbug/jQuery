// $(document).ready(function () {
//     $("input.checks").click(function dis(e)
//      {
//     if(e.target.checked==false)
//     {
//         e.target.prev().attr("disabled","true");
//     }
//         else{
//             e.target.prev().attr("disabled","false") ;
//     }});
// });




// $(document).ready(function () {
//     $("input.checks").click(function dis(e)
//      {
//          console.log(e.target)
//      });
// });



// $(document).ready(function () {
//     $("input.checks").click(function dis(e)
//      {
//          console.log($(e.target).prev()[0])
//      });
// });


$(document).ready(function () {
    $("input.checks").click(function dis(e)
     {
        if(e.target.checked==false){
            $(e.target).prev().attr("disabled","true")
        }
        else if(e.target.checked==true){
            $($(e.target).prev()[0]).removeAttr("disabled")
        }
     });
});
