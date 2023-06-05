import styled, { keyframes } from 'styled-components';

import Logo1x from '../../image/Logo1x.png';
import Logo2x from '../../image/Logo2x.png';
import Logo3x from '../../image/Logo3x.png';
import Logo4x from '../../image/Logo4x.png';

import picture1x from '../../image/Fon1x.png';
import picture2x from '../../image/Fon2x.png';
import picture3x from '../../image/Fon3x.png';
import picture4x from '../../image/Fon4x.png';

const ContentWrapper = styled.div`
    position: relative;
    padding: 20px;
    min-height: 100vh;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 97;
    background-image: ${({ theme }) => theme.colors.gradient};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 480px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 768px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 1280px;
    }
    `;

const PictureContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const Picture = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 308px;
    height: 168px;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 98;
    background-image: url('${picture1x}');

    @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${picture1x}');
    }
    @media (min-device-pixel-ratio: 3),
        (-webkit-min-device-pixel-ratio: 3),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${picture1x}');
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 308px;
        height: 168px;
        background-image: url('${picture2x}');

        @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${picture2x}');
        }
        @media (min-device-pixel-ratio: 3),
        (-webkit-min-device-pixel-ratio: 3),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${picture3x}');
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 616px;
        height: 336px;
        background-image: url('${picture3x}');

        @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${picture3x}');
        }
        @media (min-device-pixel-ratio: 3),
        (-webkit-min-device-pixel-ratio: 3),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${picture4x}');
        }
    }
`;

const Image = styled.img`
    width: 76px;
    height: 22px;
    content: url('${Logo1x}');
    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${Logo2x}');
    }
    @media (min-device-pixel-ratio: 3),
        (-webkit-min-device-pixel-ratio: 3),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        content: url('${Logo3x}');
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 114px;
        height: 33px;
        content: url('${Logo2x}');

        @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        content: url('${Logo2x}');
    }
    @media (min-device-pixel-ratio: 3),
        (-webkit-min-device-pixel-ratio: 3),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        content: url('${Logo3x}');
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 114px;
        height: 33px;
        content: url('${Logo3x}');

        @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        content: url('${Logo4x}');
        }
        @media (min-device-pixel-ratio: 3),
        (-webkit-min-device-pixel-ratio: 3),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        content: url('${Logo4x}');
        }
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const List = styled.ul`
    position: relative;
    width: 100%;
    margin-top: 110px;
    z-index: 99;
    opacity: 0;
    animation: ${fadeIn} 1s ${({ theme }) => theme.transition} forwards;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 90px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        display: flex;
        margin-top: 90px;
    }
`
const Items = styled.li`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
            width: 100%;
    }
`
const Card  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    margin: 20px;
    border: 3px;
    background-color: ${({ theme }) => theme.colors.rose};
    box-shadow: ${({ theme }) => theme.boxShadows.avatar};
    border-radius: 20px;
    transition: background-color 0.3s ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.purple};
    }
`
const Avatar  = styled.img`
    border-radius: 20px;
    width: 100%;
`
const TextName  = styled.p`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    color: ${({ theme }) => theme.colors.grey};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 7px;
`
const TextTweet = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    color: ${({ theme }) => theme.colors.grey};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 7px;
`
const TextFollowers = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    color: ${({ theme }) => theme.colors.grey};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 7px;
`
const TextContainer = styled.div`
    margin: 26px 0;
    box-shadow: ${({ theme }) => theme.boxShadows.main};
`

const DropdownContainer  = styled.div`
    position: relative;
    width: 150px;
    z-index: 99;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 196px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desctop}) {
        width: 196px;
    }
`

export {
    Picture,
    Image,
    ContentWrapper,
    List,
    Items,
    DropdownContainer,
    PictureContainer,
    Avatar,
    Card,
    TextName,
    TextContainer,
    TextFollowers,
    TextTweet
    };
