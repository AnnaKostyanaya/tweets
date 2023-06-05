import styled from 'styled-components';

import Logo1x from '../../image/Logo1x.png';
import Logo2x from '../../image/Logo2x.png';
import Logo3x from '../../image/Logo3x.png';
import Logo4x from '../../image/Logo4x.png';

import picture1x from '../../image/Fon1x.png';
import picture2x from '../../image/Fon2x.png';
import picture3x from '../../image/Fon3x.png';
import picture4x from '../../image/Fon4x.png';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const ContentWrapper = styled.div`
    position: relative;
    width: 380px;
    height: 460px;
    border-radius: 20px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: ${({ theme }) => theme.colors.gradient};
`
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
        content: url('${Logo3x}');

        @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        content: url('${Logo3x}');
        }
        @media (min-device-pixel-ratio: 3),
        (-webkit-min-device-pixel-ratio: 3),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        content: url('${Logo4x}');
        }
    }
`;


const MainContainer = styled.div`
    position: absolute;
    top: 26px;
    left: 35px;
    width: 308px;
    height: 168px;
    margin-left: auto;
    margin-right: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('${picture1x}');
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
    background-image: url('${picture2x}');
}

@media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
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

const AvatarContainer = styled.div`
    margin-top: 158px;
    position: relative;
    width: 80px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.rose};
    box-shadow: ${({ theme }) => theme.boxShadows.avatar};
    z-index: 99;
`

const Avatar = styled.img`
    position: absolute;
    top: 9.42px;
    left: 8.45px;
    width: 62px;
    height: 62px;
    border-radius: 50%; 
`
const Line = styled.div`
    position: absolute;
    top: 195px;
    left: -35px;
    width: 380px;
    height: 8px;
    box-shadow: ${({ theme }) => theme.boxShadows.avatar};
    z-index: ;
`
const LinkToBack = styled.span`
    position: absolute;
    top: 18px;
    left: -15px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    color: ${({ theme }) => theme.colors.rose};
    text-transform: uppercase;
    align-items: flex-end;
    justify-content: space-evenly;
`
const TextTweet = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    color: ${({ theme }) => theme.colors.rose};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
`
const TextFollowers = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    color: ${({ theme }) => theme.colors.rose};
    text-transform: uppercase;
    text-align: center;
`
const TextContainer = styled.div`
    margin: 26px 0;
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
`
const Error = styled.p`
    display: flex;
    justify-content: center;
    margin: 5px 0px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    color: ${({ theme }) => theme.colors.rose};
    text-transform: uppercase; 
`



export {
    Container,
    MainContainer,
    Image,
    ContentWrapper,
    AvatarContainer,
    Avatar,
    LinkToBack,
    Line,
    TextFollowers,
    TextTweet,
    TextContainer,
    Btn,
    Error,
    };