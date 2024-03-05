export const addItemToCart = async (retailerId: string, productId: String, quantity: number, option: string) => {
  return fetch('/api/dutchie/checkout/add-product', {
    method: 'POST',
    body: JSON.stringify({
      retailerId,
      productId,
      quantity,
      option
    })
  })
}

export const removeItemFromCart = async (retailerId: string, itemId: string) => {
  return fetch('/api/dutchie/checkout/remove-product', {
    method: 'POST',
    body: JSON.stringify({
      retailerId,
      itemId
    })
  })
}