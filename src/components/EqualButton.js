import { Equals } from "@styled-icons/typicons/Equals";
import { useContext } from 'react';
import { NumberContext } from './NumberProvider'

const EqualButton = () => {

    const { handleMathOperations } = useContext(NumberContext);

    return ( 
        <button type="button" onClick={() => handleMathOperations()}>
            <Equals size="36"/>
        </button>
    );
}

export default EqualButton;