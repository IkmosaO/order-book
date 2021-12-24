/* eslint-disable no-console */
/* 1. This function compares an incoming transaction order to orders 
    placed in an existing order book and acts accoringly after comparing them.
2. This function accepts 1 array and 1 object
3. This function returns an array
*/


// create function test is calling for
const reconcileOrder = (existingBook, incomingOrder) => {
  let bookArray = []


  // if the existing book is empty, push the incoming order into the empty book
  if (existingBook.length === 0) {
    bookArray.push(incomingOrder)

    return bookArray
  }

  for (let index = 0; index < existingBook.length; index++) {
    const bookOrder = array[index];
    
  }
}

// export the function being called for
module.exports = reconcileOrder
