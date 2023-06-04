import styled from 'styled-components';

import Logo1x from '../../image/Logo1x.png';
import Logo2x from '../../image/Logo2x.png';
import Logo3x from '../../image/Logo3x.png';
import Logo4x from '../../image/Logo4x.png';

import picture1x from '../../image/Fon1x.png';
import picture2x from '../../image/Fon2x.png';
import picture3x from '../../image/Fon3x.png';
import picture4x from '../../image/Fon4x.png';

const ContentWrapper = styled.div`
    width: 100%;
    height: 100vh;
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


const MainContainer = styled.div`
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
export {
    MainContainer,
    Image,
    ContentWrapper
    };
