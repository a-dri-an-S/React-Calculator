import { useContext } from 'react';
import { NumberContext } from './NumberProvider'

const FunctionButton = ({ btnVal }) => {
    
    const { handleSetCalcFunction } = useContext(NumberContext)

    return ( 
        <button type="button" onClick={() => handleSetCalcFunction(btnVal)}>
            { btnVal }
        </button>
    );
}

export default FunctionButton;