import { AddSubtractCircle } from "@styled-icons/fluentui-system-regular/AddSubtractCircle";
import { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = () => {

    const { handleToggleNegative } = useContext(NumberContext)

    return ( 
        <button type="button" onClick={() => handleToggleNegative()}>
            <AddSubtractCircle size="48"/>
        </button>
    );
}

export default NegativeButton;