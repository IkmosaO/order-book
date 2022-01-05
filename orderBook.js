const reconcileOrder = (bookOrders, incomingOrder) => {
  let bookOrdersArray = []
  let mismatchedOrdersArray = []

  if (bookOrders.length === 0) {
    bookOrdersArray.push(incomingOrder)

    return bookOrdersArray
  }

  for (let index = 0; index < bookOrders.length; index++) {
    const bookOrder = bookOrders[index]

    if (orderType(bookOrder, incomingOrder) && orderPrice(bookOrder, incomingOrder)) {
      const completedOrder = matchedOrder(bookOrder, incomingOrder)

      if (completedOrder.quantity > 0) {
        bookOrdersArray.push(completedOrder)
      }
    } else {
      mismatchedOrdersArray.push(bookOrder)
    }
  }

  if (incomingOrder.quantity > 0) {
    bookOrdersArray.push(incomingOrder)
  }

  let newOrderBook = [...mismatchedOrdersArray, ...bookOrdersArray]

  return newOrderBook
}

const matchedOrder = (bookOrder, incomingOrder) => {
  const lesserQuantity = Math.min(bookOrder.quantity, incomingOrder.quantity)

  incomingOrder.quantity -= lesserQuantity
  bookOrder.quantity -= lesserQuantity

  return bookOrder
}

const orderType = (bookOrder, incomingOrder) => {
  return bookOrder.type !== incomingOrder.type
}

const orderPrice = (bookOrder, incomingOrder) => {
  return bookOrder.price === incomingOrder.price
}


module.exports = reconcileOrder
