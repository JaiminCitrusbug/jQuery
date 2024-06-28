// $(document).ready(function () {
//   $("button").click(function () {
//     $.ajax({
//       url: "https://jsonplaceholder.typicode.com/posts",
//       type: "GET",
//       dataType:"json",
//       success: function (result) {
//         $(".tbody").html(result);
        
//       },
//     });
//   });
// });

$(document).ready(function () {
  $(".btn").click(function () {
    // FETCHING DATA FROM JSON FILE
    $.getJSON("https://jsonplaceholder.typicode.com/posts", function (data) {
      var x = "";

      // ITERATING THROUGH OBJECTS
      $.each(data, function (key, value) {
        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
        x += "<tr>";
        x += "<td>" + value.userId + "</td>";

        x += "<td>" + value.id + "</td>";

        x += "<td>" + value.title + "</td>";

        x += "<td>" + value.body + "</td>";
        
        x += "<td>" + value.body + "</td>";

        x += "</tr>";
      });

      //INSERTING ROWS INTO TABLE
      $("#table").append(x);
    });
  });
});
