import { useContext } from 'react';
import { NumberContext } from './NumberProvider'

const NumberButton = ({ btnVal }) => {
    
    const { handleSetDisplayValue } = useContext(NumberContext);

    return ( 
        <button 
            type="button" 
            className="number-button"    
            onClick={() => handleSetDisplayValue(btnVal)}
        >
            { btnVal }
        </button>
    );
}

export default NumberButton;