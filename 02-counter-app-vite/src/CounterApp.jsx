import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    
    const clickCounterButton = () => {
        console.log('+1');
        value = 100000;
    };
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            {/* <button onClick={(event) => clickCounterButton(event)}>
                +1
            </button> */}

            <button onClick={clickCounterButton}>
                +1
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