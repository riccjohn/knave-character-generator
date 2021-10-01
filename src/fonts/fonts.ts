import { createGlobalStyle } from "styled-components"

import SebaldusGotischWOFF from "./Sebaldus-Gotisch.woff"
import SebaldusGotischWOFF2 from "./Sebaldus-Gotisch.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: 'SebaldusGotisch';
        src: local('SebaldusGotisch'), local('SebaldusGotisch'),
        url(${SebaldusGotischWOFF}) format('woff2'),
        url(${SebaldusGotischWOFF2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`
