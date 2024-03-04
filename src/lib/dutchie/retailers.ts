import { callDutchie } from "./reqeuest"
import { GET_RETAILERS, GET_RETAILER_DETAILS, GET_SPECIALS_LIST } from "./schemas/retailers"

export const getRetailers = async () => {
  try {
    const res = await callDutchie(GET_RETAILERS, {});
    return res.data.retailers;
  } catch (err) {
    return [];
  }
}

export const getRetailerDetails = async (id: string) => {
  try {
    const res = await callDutchie(GET_RETAILER_DETAILS, { retailerId: id })
    return res.data.retailer
  } catch (err) {
    return {};
  }
}

export const getRetailerSpecials = async (id: string) => {
  try {
    const res = await callDutchie(GET_SPECIALS_LIST, { retailerId: id })
    return res.data.retailers
  } catch (err) {
    return {};
  }
}