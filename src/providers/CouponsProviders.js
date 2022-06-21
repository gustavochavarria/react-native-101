import { createContext, useContext, useState } from "react";

const defaultValues = { redeemed: [], handleRedeemIt: () => {} };
const Context = createContext(defaultValues);

export default function CouponsProviders({ children }) {
  const [redeemed, setRedeemed] = useState([]);

  const handleRedeemIt = (item) => {
    setRedeemed((prev) => {
      if (prev.includes(item)) {
        return prev.filter((p) => p != item);
      }

      return [...prev, item];
    });
  };

  return (
    <Context.Provider value={{ redeemed, handleRedeemIt }}>
      {children}
    </Context.Provider>
  );
}

export const useCouponsContext = () => useContext(Context);
