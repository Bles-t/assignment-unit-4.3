console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


basket = []
const maxItems = 5
function addItem(item) {
    if (basket.push(item) >= maxItems) {
        return true
    }
    return true
}
console.log();
console.log(addItem("lion"));
console.log(addItem("bats"));
console.log(addItem("tiger"));
console.log(addItem("pig"));


function listItems(basket) {
    for (element of basket) {
        console.log(element);
    }
    return basket
}
console.log(listItems(basket));
////  this is comm
// function empty() {
//     basket = []
//     return basket
// }
// console.log(empty(basket));

// Stretch Goals


function isFull() {
    if (basket.length < maxItems) {
        return false

    } else (basket.length >= maxItems); {
        return true
    }
}
console.log(isFull(this.basket));





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
