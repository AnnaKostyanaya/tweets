import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        min-width: 480px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-width: 768px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        min-width: 1280px;
    }
`
export {
    ContentWrapper
    };
