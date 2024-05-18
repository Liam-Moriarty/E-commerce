"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPEKEY as string}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
      currency="USD"
    >
      {children}
    </USCProvider>
  );
}
