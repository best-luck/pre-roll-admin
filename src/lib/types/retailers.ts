export interface RetailerType {
  address: string;
  deliverySettings: {
    afterHoursOrderingForDelivery: string;
    afterHoursOrderingForPickup: string;
    deliveryArea: string;
    deliveryFee: number;
    deliveryMinimum: number;
    disablePurchaseLimits: number;
    limitPerCustomer: number;
    pickupMinimum: number
    scheduledOrderingForDelivery: number;
    scheduledOrderingForPickup: number;
  };
  fulfillmentOptions: {
    curbsidePickup: string;
    delivery: string;
    driveThruPickup: string;
    pickup: string;
  };
  id: string;
  name: string;
  paymentOptions: {
    aeropay: boolean;
    alt36: boolean;
    canPay: boolean;
    cashless: boolean;
    cashOnly: boolean;
    check: boolean;
    creditCard: boolean;
    creditCardAtDoor: boolean;
    creditCardByPhone: boolean;
    debitOnly: boolean;
    hypur: boolean;
    linx: boolean;
    merrco: boolean;
    payInStore: boolean;
    paytender: boolean;
  };
  [key: string]: any;
}