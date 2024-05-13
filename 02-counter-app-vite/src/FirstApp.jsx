/* import { Fragment } from 'react'

export const FirstApp = () => {
    return (
        <Fragment>
            <h1>First App Erik Ruben Cruz Cortes!</h1>
            <p>Soy un subtítulo</p>
        </Fragment>
    );
};
 */
import PropTypes from 'prop-types';

function getMeesage() {
    return 'Hola Mundo';
}
//const newMessage = 'Hola Mundo';

export const FirstApp = ({ title, subtitle }) => {
    subtitle = getMeesage();
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

FirstApp.defaultProps = {
    title: 'There is no title',
    subtitle: 'There is no subtitle'
}

