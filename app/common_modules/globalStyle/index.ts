import { createGlobalStyle } from 'styled-components';

interface Props {
    // theme?: string;
}
export default createGlobalStyle<Props>`
    html {
        height: 100%;
        box-sizing: border-box;
    }
    body {
        height: 100%;
        margin: 0;
        color: #222;
        font-size: 12px;
        font-family: Montserrat;
        user-select: none;
        overflow: hidden;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        font-size: 12px;
    }
    h1 {
        font-size: 13px;
    }
    div, p, i {
        outline: 0;
    }
    i {
        cursor: pointer;
    }
    #root {
        position: relative;
        height: 100%;
        overflow: auto;
    }
    .wrapper {
        position: relative;
        min-width: 640px;
        min-height: 550px;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow: hidden;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`;
