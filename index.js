var myanimal = 'dog'

function myAnimal() {
  return myanimal;
}

function yourAnimal() {
  var youranimal="cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return youranimal
}

function add2(n) {
  const two = 2;
  return two + n;

  // Feel free to move things around!
}
function theFunk(){
function funkyFunction() {
  return function innerr(){
    return "FUNKY!"
  }
}
return innerr()
}
//funkyFunction()
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//function funkyFunction(){
  //return function(){
    //return "FUNKY!"
  //}
//var theFunk = funkyFunction()
  theFunk()



