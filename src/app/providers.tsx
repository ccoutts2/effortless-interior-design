"use client";

import { CheckoutProvider } from "@/contexts";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CheckoutProvider>{children}</CheckoutProvider>;
};
