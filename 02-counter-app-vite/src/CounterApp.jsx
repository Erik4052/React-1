import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);
    const clickCounterButton = (tipo) => {
        //setCounter(counter + 1);
       /*  setCounter((c) => {
            return c + 2000;
        
        });   */
        if(tipo === 'suma'){
            setCounter(counter + 1);
        }

        if (tipo === 'resta'){
            setCounter(counter - 1);
        }

        if (tipo === 'reset'){
            setCounter(value);
        }
        console.log(tipo);
    };
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* <button onClick={(event) => clickCounterButton(event)}>
                +1
            </button> */}

            <button onClick={() => clickCounterButton('suma')}>
                +1
            </button>

            <button onClick={() => clickCounterButton('resta')}>
                -1
            </button>

            <button onClick={() => clickCounterButton('reset')}>
                Reset
            </button>
        </>
    );
};



CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 0
};