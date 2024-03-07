import { RETAILER_ID as retailerId } from "@src/lib/static/vars"

export const addItemToCart = async (productId: String, quantity: number, option: string) => {
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

export const removeItemFromCart = async (itemId: string) => {
  return fetch('/api/dutchie/checkout/remove-product', {
    method: 'POST',
    body: JSON.stringify({
      retailerId,
      itemId
    })
  })
}