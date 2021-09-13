import { Backspace } from "@styled-icons/bootstrap/Backspace";
import { useContext } from 'react';
import { NumberContext } from './NumberProvider'

const BackButton = () => {

    const { handleBackButton } = useContext(NumberContext);

    return (
        <button 
            type="button" 
            className="operation-button"  
            onClick={() => handleBackButton()}
        >
            <Backspace size="48"/>
        </button>
    );
}

export default BackButton;