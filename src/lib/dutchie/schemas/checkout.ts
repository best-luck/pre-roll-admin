export const ADDRESS_FRAGMENT = `
fragment addressFragment on CheckoutAddress {
  city
  deliverable
  formatted
  geometry {
    coordinates
    type
  }
  state
  street1
  street2
  valid
  zip
}
`;

export const ITEM_FRAGMENT = `
fragment itemFragment on Item {
  id
  errors
  option
  product {
    ...productFragment
  }
  productId
  quantity
  valid
  isDiscounted
  basePrice
  discounts {
    total
  }
  taxes {
    total
    cannabis
    sales
  }
}
`;

export const PRICE_SUMMARY_FRAGMENT = `
fragment priceSummaryFragment on PriceSummary {
  discounts
  fees
  mixAndMatch
  rewards
  subtotal
  taxes
  total
}
`;

export const CHECKOUT_FRAGMENT = `
fragment checkoutFragment on Checkout {
  address {
    ...addressFragment
  }
  createdAt
  id
  items {
    ...itemFragment
  }
  orderType
  priceSummary {
    ...priceSummaryFragment
  }
  pricingType
  redirectUrl
  updatedAt
}
`;

export const CREATE_CHECKOUT = `
fragment addressFragment on CheckoutAddress {
  city
  deliverable
  formatted
  geometry {
    coordinates
    type
  }
  state
  street1
  street2
  valid
  zip
}

fragment productFragment on Product {
  brand {
    id
    name
  }
  category
  description
  descriptionHtml
  id
  image
  slug
  images {
    id
    url
    label
    description
  }
  name
  posId
  potencyCbd {
    formatted
    range
    unit
  }
  potencyThc {
    formatted
    range
    unit
  }
  staffPick
  strainType
  subcategory
  variants {
    id
    option
    priceMed
    priceRec
    specialPriceMed
    specialPriceRec
  }
}

fragment itemFragment on Item {
  id
  errors
  option
  product {
    ...productFragment
  }
  productId
  quantity
  valid
  isDiscounted
  basePrice
  discounts {
    total
  }
  taxes {
    total
    cannabis
    sales
  }
}

fragment priceSummaryFragment on PriceSummary {
  discounts
  fees
  mixAndMatch
  rewards
  subtotal
  taxes
  total
}

${CHECKOUT_FRAGMENT}

mutation createCart(
  $retailerId: ID!
  $orderType: OrderType!
  $pricingType: PricingType!
) {
  createCheckout(
    retailerId: $retailerId
    orderType: $orderType
    pricingType: $pricingType
  ) {
    ...checkoutFragment
  }
}
`;

export const PRODUCT_FRAGMENT = `
fragment productFragment on Product {
  brand {
    id
    name
  }
  category
  description
  descriptionHtml
  id
  image
  images {
    id
    url
    label
    description
  }
  name
  posId
  potencyCbd {
    formatted
    range
    unit
  }
  potencyThc {
    formatted
    range
    unit
  }
  staffPick
  strainType
  subcategory
  variants {
    id
    option
    priceMed
    priceRec
    specialPriceMed
    specialPriceRec
  }
}
`;

export const ADD_TO_CART = `
${ADDRESS_FRAGMENT}
${ITEM_FRAGMENT}
${PRODUCT_FRAGMENT}
${PRICE_SUMMARY_FRAGMENT}
${CHECKOUT_FRAGMENT}
mutation addItemToCart(
  $retailerId: ID!
  $checkoutId: ID!
  $quantity: Int!
  $option: String!
  $productId: ID!
) {
  addItem(
    retailerId: $retailerId
    checkoutId: $checkoutId
    quantity: $quantity
    option: $option
    productId: $productId
  ) {
    ...checkoutFragment
  }
}
`;

export const GET_CART_CONTENTS = `
${ADDRESS_FRAGMENT}
${ITEM_FRAGMENT}
${PRODUCT_FRAGMENT}
${PRICE_SUMMARY_FRAGMENT}
${CHECKOUT_FRAGMENT}
query GetCartContents(
  $retailerId: ID!
  $checkoutId:ID!
) {
  checkout(
    retailerId: $retailerId
    id: $checkoutId
  ) {
    ...checkoutFragment
  }
}
`;

export const REMOVE_ITEM_FROM_CART = `
${ADDRESS_FRAGMENT}
${ITEM_FRAGMENT}
${PRICE_SUMMARY_FRAGMENT}
${PRODUCT_FRAGMENT}
${CHECKOUT_FRAGMENT}
mutation removeItemFromCart(
  $retailerId: ID!
  $checkoutId:ID!
  $itemId: ID!
) {
  removeItem(
    retailerId: $retailerId
    checkoutId: $checkoutId
    itemId: $itemId
  ) {
    ...checkoutFragment
  }
}
`;