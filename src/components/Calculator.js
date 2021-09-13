import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import { CalculatorStyles } from './styles/Styles';

const Calculator = () => {
    return ( 
        <CalculatorStyles>
            <div className="display">
                <h1>Lemme get yo' digitz</h1>
                <Display />
            </div>
            <div className="number-pad">
                <ClearButton />
                <BackButton />
                <NegativeButton />
                <FunctionButton btnVal="/" />
                <NumberButton btnVal={ 7 } />
                <NumberButton btnVal={ 8 } />
                <NumberButton btnVal={ 9 } />
                <FunctionButton btnVal="*" />
                <NumberButton btnVal={ 4 } />
                <NumberButton btnVal={ 5 } />
                <NumberButton btnVal={ 6 } />
                <FunctionButton btnVal="-" />
                <NumberButton btnVal={ 1 } />
                <NumberButton btnVal={ 2 } />
                <NumberButton btnVal={ 3 } />
                <FunctionButton btnVal="+" />
                <div className="zero-button">
                    <NumberButton btnVal={ 0 } />
                </div>
                <NumberButton btnVal="." />
                <EqualButton />
            </div>
        </CalculatorStyles>
    );
}

export default Calculator;