import { createContext } from "react";

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
    const number = 0;
    return (
        <NumberContext.Provider value={{ number }}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberProvider;