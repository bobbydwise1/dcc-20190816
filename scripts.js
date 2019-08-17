/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

const easySort = (yourArray) => {
  //This is how you would do it in native Javascript
  let temp = yourArray.slice() //no mutation
  return temp.sort().reverse()
}

const sorter = (yourArray) => {
  let copied = yourArray.slice();
  let temp;
  for (i=1; i<copied.length; i++) {
    if (copied[i-1].charCodeAt(0) < copied[i].charCodeAt(0)) {
      temp = copied[i-1];
      copied[i-1] = copied[i];
      copied[i] = temp;
    }
  }
  return copied;
}

let test1 = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
console.log(sorter(test1))


$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  $('#output-section-1').text(1);
  })
});
