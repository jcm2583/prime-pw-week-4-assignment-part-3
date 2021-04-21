console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item) {
  basket.push(item);
  return true;
}

function listItems (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]); }
}

function empty (array) {
  array.length = 0;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

let maxItems = 5;

function isFull (array) {
  if (array.length >= maxItems) {
    return true; }
  else if (array.length < maxItems) {
    return false;
  }
}
console.log(isFull(basket));
