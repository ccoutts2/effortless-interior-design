"use client";
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
  setCheckout: React.Dispatch<React.SetStateAction<Checkout | null>>;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const useCheckoutContext = () => {
  return useContext(CheckoutContext) as CheckoutContextType;
};

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [checkout, setCheckout] = useState<Checkout | null>(null);
  const [storageChecked, setStorageChecked] = useState<boolean>(false);

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
    <CheckoutContext.Provider value={{ checkout, setCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};
