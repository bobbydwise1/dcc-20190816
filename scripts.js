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

//Below is my solution to the problem
const sorter = (yourArray) => {
  if (!Array.isArray(yourArray)) {return 'Invalid data'}
  let copied = yourArray.slice();
  let temp;
  let count;
  let sorted;
  //parent loop - runs until array is sorted
  while (sorted != true) {
    //fixer loop - rearranges array
    for (i=1; i<copied.length; i++) {
      if (copied[i-1].charCodeAt(0) < copied[i].charCodeAt(0)) {
        temp = copied[i-1];
        copied[i-1] = copied[i];
        copied[i] = temp;
      }
    }
    count = 0;
    //checker loop - sees if the array is sorted
    for (let j=1; j<copied.length; j++) {
      if (copied[j-1].charCodeAt(0) < copied[j].charCodeAt(0)) {
        count++;
      }
    }
    if (count === 0) {sorted = true}
    console.log('This time is: ', copied)
  }
  return copied;
}

// let test1 = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
// console.log(sorter(test1))


$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let preinput1 = $('#input1').val();
  preinput1 = preinput1.replace(/\'/gi,'"'); //for some reason, JSON.parse does not like single quotes, so replace them.
  console.log(preinput1)
  let input1 = JSON.parse(preinput1);
  $('#output-section-1').text(JSON.stringify(sorter(input1)));
  })
});
