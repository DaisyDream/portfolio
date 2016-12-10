


var comments = [];
function myFunction() {
var inputOne = document.getElementById('person');
     var a = inputOne.value;   
       var inputTwo = document.getElementById('words');
           var b = inputTwo.value;
  var x;
  if (confirm("send this comment?") == true) {
    var arr = [a, b];
    console.log(arr);
    comments.push(arr);
    console.log(comments);
    x = "Your message has been sent";
  } else {
    x = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = x;
}
function display(){
  for (var i = 0; i<comments.length; i++){
  console.log(comments[i]);}}