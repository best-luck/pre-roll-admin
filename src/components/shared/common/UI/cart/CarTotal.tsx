'use client';

import { PriceSummaryType } from "@src/lib/types/checkout";

export default function CartTotal({ summary }: { summary: PriceSummaryType }) {
  return (
    <div>
      <div className="flex justify-between py-3 border-y">
        <span>Subtotal</span>
        <span className="font-bold">$ {(summary.subtotal / 100).toFixed(2)}</span>
      </div>
      <div className="flex justify-between py-3">
        <span>Tax</span>
        <span className="font-bold">$ {(summary.taxes / 100).toFixed(2)}</span>
      </div>
      <div className="flex justify-between py-3 border-t">
        <span>Total</span>
        <span className="font-bold">$ {(summary.total / 100).toFixed(2)}</span>
      </div>
      <div className="mt-10">
        <button className="w-full bg-black text-white py-3">Proceed to checkout</button>
      </div>
    </div>
  );
}