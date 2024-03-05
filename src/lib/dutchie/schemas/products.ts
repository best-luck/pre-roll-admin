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

export const GET_ALL_PRODUCTS = `
${PRODUCT_FRAGMENT}
query GetAllProducts( $retailerId: ID! ) {
  menu( retailerId: $retailerId ) {
    products {
      ...productFragment
    }
  }
}
`;

export const GET_CATEGORIZRD_PRODUCT = `
${PRODUCT_FRAGMENT}
query GetProductsInACategory(
  $retailerId: ID!
  $category: Category
) {
  menu(
    retailerId: $retailerId
    filter: { category: $category }
  ) {
    products {
      ...productFragment
    }
  }
}
`;

export const GET_PRODUCT_DATA = `
${PRODUCT_FRAGMENT}
# Return data on a single product

query GetProductData(
  $retailerId: ID!
  $productId: ID!
) {
  product(
    retailerId: $retailerId
  	id: $productId
  ) {
    ...productFragment
  }
}
`;