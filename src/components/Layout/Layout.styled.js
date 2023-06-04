import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 480px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 768px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 1280px;
    }
`
export {
    ContentWrapper
    };
