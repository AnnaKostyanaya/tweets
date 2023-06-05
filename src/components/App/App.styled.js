import styled from 'styled-components';

const Error = styled.p`
    display: flex;
    justify-content: center;
    margin: 5px 0px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    color: ${({ theme }) => theme.colors.grey};
    text-transform: uppercase; 
`

export {
    Error,
    };