import { PRODUCT_FRAGMENT } from "./checkout";

export const GET_RETAILERS = `
  query GetRetailerIds {
    retailers {
      name
      id
    }
  }
`;

export const GET_RETAILER_DETAILS = `
fragment hoursDayFragment on HoursDay {
  active
  start
  end
}

fragment hoursFragment on Hours {
  Sunday {
    ...hoursDayFragment
  }
  Monday {
    ...hoursDayFragment
  }
  Tuesday {
    ...hoursDayFragment
  }
  Wednesday {
    ...hoursDayFragment
  }
  Thursday {
    ...hoursDayFragment
  }
  Friday {
    ...hoursDayFragment
  }
  Saturday {
    ...hoursDayFragment
  }
}

fragment bannerColorsFragment on BannerColorConfiguration {
  background
  border
  color
  id
}

fragment retailerFragment on Retailer {
  address
  banner {
    colors {
      ...bannerColorsFragment
    }
    html
  }
  deliverySettings {
    afterHoursOrderingForDelivery
    afterHoursOrderingForPickup
    deliveryArea
    deliveryFee
    deliveryMinimum
    disablePurchaseLimits
    limitPerCustomer
    pickupMinimum
    scheduledOrderingForDelivery
    scheduledOrderingForPickup
  }
  fulfillmentOptions {
    curbsidePickup
    delivery
    driveThruPickup
    pickup
  }
  hours {
    delivery {
      ...hoursFragment
    }
    pickup {
      ...hoursFragment
    }
    regular {
      ...hoursFragment
    }
    special {
      startDate
      endDate
      hoursPerDay {
        date
        deliveryHours {
          ...hoursDayFragment
        }
        pickupHours {
          ...hoursDayFragment
        }
      }
      name
    }
  }
  id
  menuTypes
  name
  paymentOptions {
    aeropay
    alt36
    canPay
    cashless
    cashOnly
    check
    creditCard
    creditCardAtDoor
    creditCardByPhone
    debitOnly
    hypur
    linx
    merrco
    payInStore
    paytender
  }
  settings {
    menuWeights
  }
}
  query GetRetailerDetails( $retailerId: ID! ) {
    retailer( id: $retailerId ) {
      ...retailerFragment
    }
  }
`;

export const GET_SPECIALS_LIST = `
fragment specialFragment on Special {
  id
  name
  type
  redemptionLimit
  menuType
  emailConfiguration {
    description
    descriptionHtml
    subject
    heading
    enabled
  }
  scheduleConfiguration {
    startStamp
    endStamp
    days
    startTime
    endTime
    setEndDate
    endDate
  }
  menuDisplayConfiguration {
    name
    description
    image
  }
}
query GetSpecialsList( $retailerId: ID! ) {
  specials( retailerId: $retailerId ) {
    ...specialFragment
  }
}
`;

export const GET_SPECIAL_FRAGMENT = `
fragment specialFragment on Special {
  id
  name
  type
  redemptionLimit
  menuType
  emailConfiguration {
    description
    descriptionHtml
    subject
    heading
    enabled
  }
  scheduleConfiguration {
    startStamp
    endStamp
    days
    startTime
    endTime
    setEndDate
    endDate
  }
  menuDisplayConfiguration {
    name
    description
    image
  }
}
`;

export const MENU_BY_CUSTOM_SECTION = `
${PRODUCT_FRAGMENT}
query MenuByCustomSection(
  $retailerId: ID!
) {
  menu(
    retailerId: $retailerId
    filter: { menuSection: { type: CUSTOM_SECTION, name: "Popular Flower" } }
    pagination: {limit: 50, offset: 0}
    sort: { direction: ASC, key: NAME }
  ) {
    products {
      ...productFragment
    }
  }
}
`