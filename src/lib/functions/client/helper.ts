'use client';

import { RETAILER_ID } from "@src/lib/static/vars";
import { ProductType } from "@src/lib/types/product";

export function getRetailerId (): string {
  return RETAILER_ID;
}

export const convertImage = async (event: any) => {
  const file = event?.target?.files?.[0]||event;

  if (file) {
    try {
      const dataURI: any = await readFileAsync(file);
      const res = dataURI.toString() || '';
      return res
    } catch (error) {
      return null;
    }
  }
};

const readFileAsync = (file: any) => {
  return new Promise((resolve, reject) => {
    const FR = new FileReader();

    FR.addEventListener('load', (evt) => {
      const dataURI = evt?.target?.result;
      resolve(dataURI);
    });

    FR.addEventListener('error', (error) => {
      reject(error);
    });

    FR.readAsDataURL(file);
  });
};

export const calculateDiscount = (product: ProductType) => {
  if (product.variants[0].specialPriceMed) {
    return ((product.variants[0].priceMed - product.variants[0].specialPriceMed) / product.variants[0].priceMed * 100).toFixed(0);
  }
  return 0;
}