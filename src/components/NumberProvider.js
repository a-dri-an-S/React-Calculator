import { createContext, useState } from "react";

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
    const [number, setNumber] = useState(0);

    const handleSetDisplayValue = num => {
        if (!number.includes('.') || num !== '.') {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    };

    return (
        <NumberContext.Provider value={{ 
            number,
            handleSetDisplayValue
        }}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberProvider;