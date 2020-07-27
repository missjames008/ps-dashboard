import React, { createContext, useState } from "react";

// Create Context Object
export const TestContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const TestContextProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <TestContext.Provider value={[count, setCount]}>
      {props.children}
    </TestContext.Provider>
  );
};
