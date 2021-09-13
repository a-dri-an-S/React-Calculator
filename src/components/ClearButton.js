import { Delete } from "@styled-icons/typicons/Delete";
import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const ClearButton = () => {

    const { handleClearValue } = useContext(NumberContext);

    return ( 
        <button type="button" onClick={() => handleClearValue()}>
            <Delete size="60"/>
        </button>
    );
}

export default ClearButton;