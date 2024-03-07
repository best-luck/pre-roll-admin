import { callDutchie } from "./reqeuest"
import { GET_RETAILERS, GET_RETAILER_DETAILS, GET_SPECIALS_LIST, MENU_BY_CUSTOM_SECTION } from "./schemas/retailers"
import { RETAILER_ID as retailerId } from "../static/vars";

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

export const getRetailerSpecials = async () => {
  try {
    const res = await callDutchie(GET_SPECIALS_LIST, { retailerId })
    return res.data.specials
  } catch (err) {
    return [];
  }
}

export const getRetailerMenu = async(id: string) => {
  try {
    const res = await callDutchie(MENU_BY_CUSTOM_SECTION, { retailerId: id })
    console.log(res)
    return res.data
  } catch (err) {
    console.log(err);
    return {};
  }
}