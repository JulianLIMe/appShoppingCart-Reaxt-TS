import { useState, useEffect } from "react";

/* T: whatever type passed for useLocalStorage*/
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    // Checking if there is something in sessionStorage, it will be saved in value(Satate)
    const jsonValue = sessionStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    /* 
    In case that there is nothing in sessionStorage, then:
    If initialValue is a function, the value(state) will be the result of this function.
    Otherwise (OUR CASE: initialValue = [], sessionStorage: shopping-cart), value(satate) will be the value of initialValue
    */
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // This is the same that [cartItems, setCartItems] in ShopingCartContext
  return [value, setValue] as [T /* typeof value */, typeof setValue];
}
