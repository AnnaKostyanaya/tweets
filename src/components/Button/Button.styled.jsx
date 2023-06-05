import styled from 'styled-components';

const Btn = styled.button`
    width: 196px;
    height: 50px;
    padding: 14px, 28px;
    border-radius: 10.31px;
    box-shadow: ${({ theme }) => theme.boxShadows.button};
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 21.94px;
    text-transform: uppercase;
    background-color: ${({ text }) => (text === "Following" ? '#5CD3A8' : '#EBD8FF')};
    transition: background-color 0.3s ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
        background-color: ${({ text }) => (text === "Following" ? '#47A885' : '#DDB3FF')};
    }
`


export {
    Btn,
    };