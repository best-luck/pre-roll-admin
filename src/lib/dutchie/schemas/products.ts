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
`;

export const GET_ALL_PRODUCTS = `
${PRODUCT_FRAGMENT}
query GetAllProducts( $retailerId: ID! ) {
  menu( 
    retailerId: $retailerId
    pagination: { offset: 0, limit: 25 }
    sort: { direction: ASC, key: NAME }
  ) {
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
    pagination: { offset: 0, limit: 100 }
    sort: { direction: ASC, key: NAME }
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

export const FILTER_RETAILER_PRODUCTS = (subCategory: string) => `
${PRODUCT_FRAGMENT}
query GetAllProducts(
  $retailerId: ID!
  $categories: [Category!]
  $strainTypes: [StrainType!]
  $brandIds: [String!]
  $effects: [Effects!]
  $weights: [String!]
  $search: String!
  $offset: Int!
  ${subCategory?'$subCategory: Subcategory!':''}
) {
  menu(
    retailerId: $retailerId
    filter: {
      strainTypes: $strainTypes,
      brandIds: $brandIds,
      effects: $effects,
      categories: $categories,
      weights: $weights,
      search: $search
      ${subCategory?',subcategory: $subCategory':''}
  	}
    pagination: {limit: 50, offset: $offset}
    sort: { direction: ASC, key: NAME }
  ) {
    products {
      ...productFragment
    }
  }
}
`;

export const FILTER_RETAILER_PRODUCTS_WEIGHTS = (subCategory: string) => `
${PRODUCT_FRAGMENT}
query GetAllProducts(
  $retailerId: ID!
  $categories: [Category!]
  $strainTypes: [StrainType!]
  $brandIds: [String!]
  $effects: [Effects!]
  $search: String!
  $offset: Int!
  ${subCategory?'$subCategory: Subcategory!':''}
) {
  menu(
    retailerId: $retailerId
    filter: {
      strainTypes: $strainTypes,
      brandIds: $brandIds,
      effects: $effects,
      categories: $categories,
      search: $search
      ${subCategory?',subcategory: $subCategory':''}
  	}
    pagination: {limit: 50, offset: $offset}
    sort: { direction: ASC, key: NAME }
  ) {
    products {
      ...productFragment
    }
  }
}
`;

export const GET_RETAILER_SPECIALS = (subCategory: string) => `
${PRODUCT_FRAGMENT}
query GetAllProducts(
  $retailerId: ID!
  $strainTypes: [StrainType!]
  $brandIds: [String!]
  $effects: [Effects!]
  $weights: [String!]
  $specialIds: [String!]
  $search: String!
  $offset: Int!
  ${subCategory?'$subCategory: Subcategory!':''}
) {
  menu(
    retailerId: $retailerId
    filter: {
      strainTypes: $strainTypes,
      brandIds: $brandIds,
      effects: $effects,
      weights: $weights,
      menuSection: {
        type: SPECIALS,
        specialId: $specialIds
      },
      search: $search
      ${subCategory?',subcategory: $subCategory':''}
  	}
    pagination: {limit: 50, offset: $offset}
    sort: { direction: ASC, key: NAME }
  ) {
    products {
      ...productFragment
    }
  }
}
`;

export const GET_RETAILER_SPECIALS_WITHOUT_WEIGHTS = (subCategory: string) => `
${PRODUCT_FRAGMENT}
query GetAllProducts(
  $retailerId: ID!
  $strainTypes: [StrainType!]
  $brandIds: [String!]
  $effects: [Effects!]
  $specialIds: [String!]
  $search: String!
  $offset: Int!
  ${subCategory?"$subCategory: Subcategory!":""}
) {
  menu(
    retailerId: $retailerId
    filter: {
      strainTypes: $strainTypes,
      brandIds: $brandIds,
      effects: $effects,
      menuSection: {
        type: SPECIALS,
        specialId: $specialIds
      },
      search: $search
      ${subCategory?",subcategory: $subCategory":""}
  	}
    pagination: {limit: 50, offset: $offset}
    sort: { direction: ASC, key: NAME }
  ) {
    products {
      ...productFragment
    }
  }
}
`;

export const STRING_SERACH_PRODUCTS = `
${PRODUCT_FRAGMENT}
query GetAllProducts(
  $retailerId: ID!
  $search: String!
) {
  menu(
    retailerId: $retailerId
    filter: { search: $search }
  ) {
    products {
      ...productFragment
    }
  }
}
`;