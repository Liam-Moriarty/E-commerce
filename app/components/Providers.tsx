"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPEKEY as string}
      successUrl="https://e-commerce-i9by.vercel.app//stripe/success"
      cancelUrl="https://e-commerce-i9by.vercel.app//stripe/error"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
      currency="USD"
    >
      {children}
    </USCProvider>
  );
}
