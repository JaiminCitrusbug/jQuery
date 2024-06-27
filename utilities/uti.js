// $(document).ready(function(){
// $( "#start" ).on( "click", function() {
//     var myDiv = $( "div" );
//     myDiv.show( "slow" );
//     myDiv.animate({
//       left:"+=200"
//     }, 5000 );
   
//     myDiv.queue(function() {
//       var that = $( this );
//       that.addClass( "newcolor" );
//       that.dequeue();
//     });
   
//     myDiv.animate({
//       left:"-=200"
//     }, 1500 );
//     myDiv.queue(function() {
//       var that = $( this );
//       that.removeClass( "newcolor" );
//       that.dequeue();
//     });
//     myDiv.slideUp();
//   });
   
//   $( "#stop" ).on( "click", function() {
//     var myDiv = $( "div" );
//     myDiv.clearQueue();
//     myDiv.stop();
//   });
// });

var myArray = [ 1, 2, 3, 5 ];
 
if ( $.inArray( 4, myArray ) !== -1 ) {
    console.log( "found it!" );
}

// var firstObject = { foo: "bar", a: "b" };
// var secondObject = { foo: "baz" };
 
// var newObject = $.extend( firstObject, secondObject );
 
// console.log( firstObject); // "baz"
// console.log( newObject); // "baz

var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend({}, firstObject, secondObject );
 
console.log( firstObject); // "baz"
console.log( newObject); // "baz

var myFunction = function() {
    console.log( this );
};
var myObject = {
    foo: "bar"
};
 
myFunction(); // window
 
var myProxyFunction = $.proxy( myFunction, myObject );
 
myProxyFunction(); // myObject