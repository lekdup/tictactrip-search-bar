import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    // if the count is = 0 than return nothing
    if (count === 0) {
     return;
   }
   setCount(prevCount => prevCount - 1);
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return { count, decrement, increment }
}

export default useCounter;
