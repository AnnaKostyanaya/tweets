import styled from 'styled-components';

const Btn = styled.button`
    position: relative;
    width: 150px;
    height: 40px;
    padding: 14px, 28px;
    border-radius: 10.31px;
    box-shadow: ${({ theme }) => theme.boxShadows.button};
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 21.94px;
    text-transform: uppercase;
    background-color: ${({ text }) => (text === "Filter" ? '#EBD8FF' : '#5CD3A8')};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 196px;
        height: 50px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desctop}) {
        width: 196px;
        height: 50px;
    }
    transition: background-color 0.3s ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
        background-color: ${({ text }) => (text === "Filter" ? '#DDB3FF' : '#47A885')};
    }
`
const Drop = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    width: 150px;
    color: ${({ theme }) => theme.colors.rose};
    border-radius: 20px;
    z-index: 110;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: ${({ theme }) => theme.colors.gradient};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 196px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desctop}) {
        width: 196px;
    }
`
const Menu = styled.ul`
    padding: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
`
const Item = styled.li`
    text-align: center;
`


export {
    Btn,
    Drop,
    Menu,
    Item,
    };