import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
    0% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.5);
    }
    100% {
        opacity: 0.3;
        transform: scale(1);
    }
`;

const Loader = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
`
const LoaderDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 50%;
    margin: 0 4px;
    animation: ${loaderAnimation} 1s infinite ${({ theme }) => theme.transition};
`

export {
    Loader,
    LoaderDot
    };