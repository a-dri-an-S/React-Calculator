import styled from 'styled-components';

export const CalculatorStyles = styled.div`
    background-color: #1d1d2c;
    max-width: 100%;
    height: 100vh;
    display: grid;
    justify-items: center;
    grid-template-areas:
        'display'
        'numbers';
    button {
        width: 100%;
        height: 80px;
        border-radius: 20px;
        border: 3px solid #f7f4e9;
        font-size: 2.5rem;
        color: #1d1d2c;
        font-family: 'Sarpanch', sans-serif;
        &:focus {
        outline: none;
        }
    }
    button:hover {
        background-color: #f7f4e9;
    } 
    button:active {
        background-color: #e40c2b;
        color: #f7f4e9;
        border-color: #f7f4e9;
    }
    .display {
        font-family: 'Sarpanch', sans-serif;
        font-weight: 700;
        grid-area: display;
        h1 {
        font-size: 4rem;
        color: #e40c2b;
        text-align: center;
        margin: 40px 0;
        }
    }
    .number-pad {
        grid-area: numbers;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        padding: 0px 0px 30px;
        width: 450px;
        .button-div:focus {
        outline: none;
        }
    }
    .zero-button {
        grid-column: 1/3;
    }
    .function-button {
        background-color: #438945;
    }
    .number-button {
        background-color: #3cbcc3
    }
    .operation-button {
        background-color: #eba63f
    }
    
    
`;


export const DisplayStyles = styled.div`
    display: grid;
    grid-template-rows: 90px 50px;
    grid-template-columns: 1fr;
    border: 4px solid #f7f4e9;
    margin: 10px;
    width: 700px;
    align-items: center;
    border-radius: 20px;
    background: #eba63f;
    h2,
    p {
        text-align: center;
        color: #1d1d2c;
    }
    h2 {
        font-size: 3.5rem;
        margin: 0;
        text-align: right;
        padding: 0px;
        border-bottom: 4px solid #f7f4e9;
        padding: 5px 20px;
    }
    p {
        margin: 5px 0;
        font-size: 1.5rem
    }
`;