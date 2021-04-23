console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// I started off with stretch goals 1 and 2 here
let basket = [];
let maxItems = 5;

function isFull (array) {
  if (array.length >= maxItems) {
    return true; }
  else if (array.length < maxItems) {
    return false;
  }
}
console.log(isFull(basket));

function addItem (item) {
  if (isFull(basket) == false) {
  basket.push(item);
    return true; }
  else {
    return false;
  }
}

function listItems (array) {
  for (let i = 0; i < array.length; i++) {
   console.log(array[i]); }
}

function empty (array) {
  array.length = 0;
}

addItem('pears');
addItem('oranges');
listItems(basket);

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`The updated basket has ${basket}`);
console.log('The basket is now', empty(basket));

// Adding items back into basket
addItem('pears');
addItem('oranges');
addItem('apples');
listItems(basket);

function removeItem (item) {
  let removed = basket.indexOf(item);
  if (removed == basket.indexOf(item)) {
  basket.splice(removed);
  }
}

removeItem('pears');
console.log(basket);
