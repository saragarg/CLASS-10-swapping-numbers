

var a = prompt('Enter the first variable: ');

function setup(){
  var b2 = createButton("click here to Swap");

  }


function draw()
{
}
var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');
function setup(){
var b2 = createButton("Click here to swap the numbers.");
  b2.mousePressed(swap);
  }

  
function draw()
{
}
function swap(){
[a, b] = [b, a];

console.log("The value of a after swapping:" ,+a);
console.log("The value of b after swapping:",+b);
}
