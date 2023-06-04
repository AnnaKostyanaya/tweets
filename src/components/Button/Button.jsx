import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ type, text, onClick }) => {

    return (
    <Btn key={text} text={text} onClick={onClick} type={type}>{text}</Btn>
)};

export default Button;

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};