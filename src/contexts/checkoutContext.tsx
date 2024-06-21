"use client";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Checkout = {
  schemes: {
    id: number;
    quantity: number;
  }[];
  tier: 1 | 2 | 3;
};

interface CheckoutContextType {
  checkout: Checkout | null;
  setCheckout: Dispatch<SetStateAction<Checkout | null>>;
  showBasket: boolean;
  setShowBasket: Dispatch<SetStateAction<boolean>>;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const useCheckoutContext = () => {
  return useContext(CheckoutContext) as CheckoutContextType;
};

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [checkout, setCheckout] = useState<Checkout | null>(null);
  const [storageChecked, setStorageChecked] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  useEffect(() => {
    setCheckout(JSON.parse(window.localStorage.getItem("checkout")!) ?? null);
    setStorageChecked(true);
  }, []);

  useEffect(() => {
    if (storageChecked)
      checkout
        ? window.localStorage.setItem("checkout", JSON.stringify(checkout))
        : window.localStorage.removeItem("checkout");
  }, [checkout, storageChecked]);

  return (
    <CheckoutContext.Provider
      value={{ checkout, setCheckout, showBasket, setShowBasket }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
