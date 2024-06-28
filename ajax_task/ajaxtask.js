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

        x += "<td>" + $(`<button id="icon">Icons</button>`) + "</td>";

        // x += "<td>" + $(`<button id="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
        //     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
        //     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
        //   </svg></button>`) + "</td>";

        x += "</tr>";
      });

      //INSERTING ROWS INTO TABLE
      $("#table").append(x);
    });
  });
});
