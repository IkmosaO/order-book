/* eslint-disable no-console */
/* 1. This function compares an incoming transaction order to orders 
    placed in an existing order book and acts accoringly after comparing them.
2. This function accepts 1 array and 1 object
3. This function returns an array
*/



// create function test is calling for
const reconcileOrder = (existingBook, incomingOrder) => {
// adds an order to book when book is empty
  if (existingBook.length === 0) {
    return emptyBookOrder(existingBook, incomingOrder)
  }

  // adds an order to book when incomingOrder type + existingBook  
  // types matches IE; when BOTH types are sell or buy
  for (let index = 0; index < existingBook.length; index++) {
    if (incomingOrder.type === existingBook[index].type) {
      return matchingTypes(existingBook, incomingOrder)
    }
  }

  for (let index = 0; index < existingBook.length; index++) {
    if (incomingOrder.type !== existingBook[index].type && incomingOrder.quantity !== existingBook[index].quantity) {
      return correspondingTypes(existingBook, incomingOrder)
    }
  }

  for (let index = 0; index < existingBook.length; index++) {
    if (incomingOrder.type !== existingBook[index].type && incomingOrder.quantity === existingBook[index].quantity && incomingOrder.price === existingBook[index].price) {
      // remove existingBook[index] from existingBook array
      existingBook.splice(existingBook[index], 1)

      return existingBook
    }
  }
}



const emptyBookOrder = (emptyExistingBook, incomingOrder) => {
  emptyExistingBook.push(incomingOrder)


  return emptyExistingBook
}

const matchingTypes = (existingBook, incomingOrder) => {
  existingBook.push(incomingOrder)


  return existingBook
}

const correspondingTypes = (existingBook, incomingOrder) => {
  existingBook.push(incomingOrder)

  return existingBook
}

// const fufillMatchingOrder = (existingBook,) => {
//   return existingBook
// }



// export the function being called for
module.exports = reconcileOrder
