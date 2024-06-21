import { createContext, useContext, useEffect, useState } from "react";

type Checkout = {
  schemes: {
    id: number;
    quantity: number;
  }[];
  tier: 1 | 2 | 3;
};

interface CheckoutContextType {
  checkout: Checkout;
  setCheckout: React.Dispatch<React.SetStateAction<Checkout>>;
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
  const [checkout, setCheckout] = useState<Checkout>(
    JSON.parse(localStorage.getItem("checkout")!) ?? { schemes: [], tier: 1 },
  );

  useEffect(() => {
    checkout
      ? localStorage.setItem("checkout", JSON.stringify(checkout))
      : localStorage.removeItem("checkout");
  }, [checkout]);

  return (
    <CheckoutContext.Provider value={{ checkout, setCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};
