import { createContext, useState } from "react";

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
    const [number, setNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('');
    const [functionType, setFunctionType] = useState('');

    const handleSetDisplayValue = num => {
        if (!number.includes('.') || num !== '.') {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    };

    const handleSetStoredValue = () => {
        setStoredNumber(number);
        setNumber('');
    };

    const handleClearValue = () => {
        setNumber('');
        setStoredNumber('');
        setFunctionType('');
    };

    const handleBackButton = () => {
        if (number !== '') {
            const deletedNumber = number.slice(0, number.length - 1);
            setNumber(deletedNumber);
        }
    }

    const handleSetCalcFunction = type => {
        if (number) {
            setFunctionType(type);
            handleSetStoredValue();
        }
        if (storedNumber) {
            setFunctionType(type);
        }
    };

    const handleToggleNegative = () => {
        if (number) {
            if (number > 0) {
                setNumber(`-${number}`)
            } else {
                const positiveNumber = number.slice(1);
                setNumber(positiveNumber)
            }
        } else if (storedNumber > 0) {
            setStoredNumber(`-${storedNumber}`);
        } else {
            const positiveNumber = storedNumber.slice(1);
            setStoredNumber(positiveNumber);
        }
    };

    const handleMathOperations = () => {
        if (number && storedNumber) {
            switch (functionType) {
                case '+':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
                    break;
                case '-':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '/':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '*':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) * parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                default:
                    break;
            }
        }
        setNumber('')
    }

    return (
        <NumberContext.Provider value={{ 
            number,
            storedNumber,
            setNumber,
            functionType,
            handleSetDisplayValue,
            handleSetStoredValue,
            handleBackButton,
            handleClearValue,
            handleSetCalcFunction,
            handleToggleNegative,
            handleMathOperations
        }}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberProvider;