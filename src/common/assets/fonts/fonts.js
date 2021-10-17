import { createGlobalStyle } from 'styled-components';

import Montserrat from './montserratRegular.woff'
import MontserratLight from './Montserrat-Light.ttf'
export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${Montserrat}) format('woff'),
        url(${MontserratLight}) format('ttf');
        font-weight: 100;
        font-style: normal;
    }
`;