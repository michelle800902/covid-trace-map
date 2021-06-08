import { createGlobalStyle } from 'styled-components';

import iconWoff2 from './fonts/fontello.woff2';
import iconWoff from './fonts/fontello.woff';
import iconTtf from './fonts/fontello.ttf';
import iconEot from './fonts/fontello.eot';

import montserratCyrillicExt from './fonts/montserrat_cyrillic-ext.woff2';
import montserratCyrillic from './fonts/montserrat_cyrillic.woff2';
import montserratVietnamese from './fonts/montserrat_vietnamese.woff2';
import montserratLatinExt from './fonts/montserrat_latin-ext.woff2';
import montserratLatin from './fonts/montserrat_latin.woff2';

import robotoCyrillicExt from './fonts/roboto_cyrillic-ext.woff2';
import robotoCyrillic from './fonts/roboto_cyrillic.woff2';
import robotoGreek from './fonts/roboto_greek.woff2';
import robotoVietnamese from './fonts/roboto_vietnamese.woff2';
import robotoLatinExt from './fonts/roboto_latin-ext.woff2';
import robotoLatin from './fonts/roboto_latin.woff2';

interface Props {
    theme?: string;
}
export default createGlobalStyle<Props>`
    /* Icon Font */
    @font-face {
        font-family: 'fontello';
        src: url(${iconWoff2}) format('woff2'),
            url(${iconWoff}) format('woff'),
            url(${iconTtf}) format('truetype'),
            url(${iconEot}) format('embedded-opentype');
        font-weight: normal;
        font-style: normal;
    }
    [class^="icon-"] {
        line-height: 1em;
    }
    [class^="icon-"]::before {
        display: inline-block;
        width: 23px;
        text-align: center;
        vertical-align: baseline;
        font: normal normal normal 14px/1em fontello;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-apps::before { content: '\\e800'; }
    .icon-bullseye::before { content: '\\e801'; }
    .icon-category::before { content: '\\e802'; }
    .icon-chart_1::before { content: '\\e803'; }
    .icon-chart_2::before { content: '\\e804'; }
    .icon-chart_3::before { content: '\\e805'; }
    .icon-chart_4::before { content: '\\e806'; }
    .icon-chart_5::before { content: '\\e807'; }
    .icon-chart_6::before { content: '\\e808'; }
    .icon-chart_7::before { content: '\\e809'; }
    .icon-checkbox_checked::before { content: '\\e80a'; }
    .icon-checkbox_somechecked::before { content: '\\e80b'; }
    .icon-checkbox_uncheck::before { content: '\\e80c'; }
    .icon-collapsepanel::before { content: '\\e80d'; }
    .icon-collapse_1::before { content: '\\e80e'; }
    .icon-collapse_2::before { content: '\\e80f'; }
    .icon-control::before { content: '\\e810'; }
    .icon-csv::before { content: '\\e811'; }
    .icon-draw::before { content: '\\e812'; }
    .icon-date::before { content: '\\e813'; }
    .icon-delete_1::before { content: '\\e814'; }
    .icon-delete_2::before { content: '\\e815'; }
    .icon-delete_3::before { content: '\\e816'; }
    .icon-settingalarm::before { content: '\\e817'; }
    .icon-detail::before { content: '\\e818'; }
    .icon-divider_h::before { content: '\\e819'; }
    .icon-drill::before { content: '\\e81a'; }
    .icon-drilldownarrow_right::before { content: '\\e81b'; }
    .icon-edit_1::before { content: '\\e81c'; }
    .icon-edit_2::before { content: '\\e81d'; }
    .icon-expand_1::before { content: '\\e81e'; }
    .icon-expand_2::before { content: '\\e81f'; }
    .icon-expand_3::before { content: '\\e820'; }
    .icon-favorite_1::before { content: '\\e821'; }
    .icon-favorite_2::before { content: '\\e822'; }
    .icon-filter::before { content: '\\e823'; }
    .icon-fitscreen::before { content: '\\e824'; }
    .icon-format_number::before { content: '\\e825'; }
    .icon-format_text::before { content: '\\e826'; }
    .icon-geo-analysis::before { content: '\\e827'; }
    .icon-grouping::before { content: '\\e828'; }
    .icon-history::before { content: '\\e829'; }
    .icon-home::before { content: '\\e82a'; }
    .icon-layer::before { content: '\\e82b'; }
    .icon-lte-signaling::before { content: '\\e82c'; }
    .icon-lte-unknown::before { content: '\\e82d'; }
    .icon-lte-volte::before { content: '\\e82e'; }
    .icon-mapsource::before { content: '\\e82f'; }
    .icon-more::before { content: '\\e830'; }
    .icon-multimap::before { content: '\\e831'; }
    .icon-notification::before { content: '\\e832'; }
    .icon-operation_1::before { content: '\\e833'; }
    .icon-operation_2::before { content: '\\e834'; }
    .icon-spin5::before { content: '\\e838'; }
    .icon-operation_3::before { content: '\\e839'; }
    .icon-operation_4::before { content: '\\e83a'; }
    .icon-operation_5::before { content: '\\e83b'; }
    .icon-operation_6::before { content: '\\e845'; }
    .icon-optimization::before { content: '\\e84a'; }
    .icon-ping::before { content: '\\e859'; }
    .icon-radio_n::before { content: '\\e869'; }
    .icon-radio_y::before { content: '\\e86a'; }
    .icon-reset::before { content: '\\e86b'; }
    .icon-report::before { content: '\\e86c'; }
    .icon-save_1::before { content: '\\e86d'; }
    .icon-save_2::before { content: '\\e86e'; }
    .icon-search::before { content: '\\e86f'; }
    .icon-searchfly::before { content: '\\e870'; }
    .icon-setting::before { content: '\\e871'; }
    .icon-sizing_1::before { content: '\\e872'; }
    .icon-sizing_2::before { content: '\\e873'; }
    .icon-sort_1::before { content: '\\e874'; }
    .icon-sort_2::before { content: '\\e875'; }
    .icon-sort_3::before { content: '\\e87a'; }
    .icon-sort_4::before { content: '\\e87b'; }
    .icon-sort_5::before { content: '\\e87c'; }
    .icon-tile::before { content: '\\e87d'; }
    .icon-time::before { content: '\\e87e'; }
    .icon-toolbox::before { content: '\\e87f'; }
    .icon-undo-1::before { content: '\\e880'; }
    .icon-user::before { content: '\\e881'; }
    .icon-world::before { content: '\\e882'; }
    .icon-download::before { content: '\\e883'; }
    .icon-upload::before { content: '\\e884'; }
    .icon-cell_config::before { content: '\\e885'; }
    .icon-cell::before { content: '\\e886'; }
    .icon-chart_8::before { content: '\\e887'; }
    .icon-polygon::before { content: '\\e888'; }
    .icon-location::before { content: '\\e889'; }
    .icon-extend::before { content: '\\e88a'; }
    .icon-dual::before { content: '\\e88b'; }
    .icon-reload::before { content: '\\e88c'; }
    .icon-report_small::before { content: '\\e88d'; }
    .icon-ruler::before { content: '\\e88e'; }
    .icon-subscriber::before { content: '\\e88f'; }
    .icon-zoom_in::before { content: '\\e890'; }
    .icon-zoom_out::before { content: '\\e891'; }
    .icon-expand_4::before { content: '\\e892'; }
    .icon-expand_5::before { content: '\\e893'; }
    .icon-collapse_4::before { content: '\\e894'; }
    .icon-collapse_5::before { content: '\\e895'; }
    .icon-analysis::before { content: '\\e896'; }
    .icon-condition::before { content: '\\e897'; }
    .icon-scope::before { content: '\\e898'; }
    .icon-menu::before { content: '\\e899'; }
    .icon-chart_9::before { content: '\\e89a'; }
    .icon-check::before { content: '\\e89b'; }
    .icon-circle::before { content: '\\e89c'; }
    .icon-drag::before { content: '\\e89d'; }
    .icon-flyto::before { content: '\\e89e'; }
    .icon-line::before { content: '\\e89f'; }
    .icon-map_2::before { content: '\\e8a0'; }
    .icon-map_1::before { content: '\\e8a1'; }
    .icon-redo::before { content: '\\e8a2'; }
    .icon-operation_9::before { content: '\\e8a3'; }
    .icon-search_location::before { content: '\\e8a4'; }
    .icon-undo::before { content: '\\e8a5'; }
    .icon-hide::before { content: '\\e8a6'; }
    .icon-divider_v::before { content: '\\e8a7'; }
    .icon-mask::before { content: '\\e8a8'; }
    .icon-roll::before { content: '\\e8a9'; }
    .icon-show::before { content: '\\e8aa'; }
    .icon-database::before { content: '\\e8ab'; }
    .icon-empty_data::before { content: '\\e8ac'; }
    .icon-property::before { content: '\\e8ad'; }
    .icon-legend::before { content: '\\e8ae'; }
    .icon-callsymbol_1::before { content: '\\e8af'; }
    .icon-callsymbol_3::before { content: '\\e8b0'; }
    .icon-callsymbol_5::before { content: '\\e8b1'; }
    .icon-callsymbol_6::before { content: '\\e8b2'; }
    .icon-callsymbol_7::before { content: '\\e8b3'; }
    .icon-callsymbol_9::before { content: '\\e8b4'; }
    .icon-access::before { content: '\\e8b5'; }
    .icon-freehand::before { content: '\\e8b6'; }
    .icon-lock::before { content: '\\e8b7'; }
    .icon-polyline::before { content: '\\e8b8'; }
    .icon-sort_6::before { content: '\\e8b9'; }
    .icon-unlock::before { content: '\\e8ba'; }
    .icon-warning::before { content: '\\e8bb'; }
    .icon-ranking::before { content: '\\e8bc'; }
    .icon-arrow_up::before { content: '\\e8bd'; }
    .icon-arrow_right::before { content: '\\e8bf'; }
    .icon-arrow_left::before { content: '\\e8c0'; }
    .icon-arrow_down::before { content: '\\e8c1'; }
    .icon-callsymbol_4::before { content: '\\e8c2'; }
    .icon-brench::before { content: '\\e8c4'; }
    .icon-callend::before { content: '\\e8e1'; }
    .icon-callstart::before { content: '\\e914'; }
    .icon-link::before { content: '\\e915'; }
    .icon-unlink::before { content: '\\e916'; }
    .icon-arrow_toend::before { content: '\\e917'; }
    .icon-arrow_tostart::before { content: '\\e918'; }
    .icon-lasso::before { content: '\\e919'; }
    .icon-robot-1::before { content: '\\e91a'; }
    .icon-robot-2::before { content: '\\e91b'; }
    .icon-sequence::before { content: '\\e91c'; }
    .icon-summary::before { content: '\\e91d'; }
    .icon-robot-3::before { content: '\\e91e'; }
    .icon-information-1::before { content: '\\e91f'; }
    .icon-policy::before { content: '\\e920'; }
    .icon-callsymbol_8::before { content: '\\e938'; }
    .icon-callsymbol_2::before { content: '\\e939'; }
    .icon-creatfile::before { content: '\\e93c'; }
    .icon-creatfolder::before { content: '\\e940'; }

    /* cyrillic-ext */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url(${montserratCyrillicExt}) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url(${montserratCyrillic}) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url(${montserratVietnamese}) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url(${montserratLatinExt}) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url(${montserratLatin}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic-ext */
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${robotoCyrillicExt}) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${robotoCyrillic}) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${robotoGreek}) format('woff2');
        unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${robotoVietnamese}) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${robotoLatinExt}) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${robotoLatin}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);

    :root {
        /* size */
        --min-width: 10vw;
        --small: calc(0.25rem - 1px) calc(0.375rem - 1px);
        --medium: calc(0.25rem - 1px) calc(0.5rem - 1px);
        --large: calc(0.5rem - 1px);
        --lineHeight: 1.5;

        /* Global colors */
        --black: #000000;
        --dark-one: #333333;
        --dark-two: #222222;
        --dark-hover: #2a2a2a;
        --dark-inactive: #555555;
        --gart-one: #aaaaaa;
        --gray-two: #999999;
        --white: #ffffff;
        --white-one: #ffffff;
        --white-two: #eeeeee;
        --white-three: #f7f7f7;
        --disabled: #cccccc;
        --blue-one: #3196ff;
        --green-one: #73a63f;
        --success: hsl(var(--success-hsl));
        --success-lighter: hsl(var(--success-hsl-h), var(--success-hsl-s), calc(var(--success-hsl-l) + 5%));
        --success-darker: hsl(var(--success-hsl-h), var(--success-hsl-s), calc(var(--success-hsl-l) - 5%));
        --danger: hsl(var(--danger-hsl));
        --danger-lighter: hsl(var(--danger-hsl-h), var(--danger-hsl-s), calc(var(--danger-hsl-l) + 5%));
        --danger-darker: hsl(var(--danger-hsl-h), var(--danger-hsl-s), calc(var(--danger-hsl-l) - 5%));

        /* Theme */
        --blue-hsl-h: 211;
        --blue-hsl-s: 100%;
        --blue-hsl-l: 60%;

        ${(props) => (`
            --themeColor-hsl-h: var(--${props.theme}-hsl-h);
            --themeColor-hsl-s: var(--${props.theme}-hsl-s);
            --themeColor-hsl-l: var(--${props.theme}-hsl-l);
            --themeColor-top: var(--${props.theme}-top, hsl(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l)));
        `)}

        --themeColor: hsl(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l));
        --themeColor-10: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.1);
        --themeColor-20: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.2);
        --themeColor-30: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.3);
        --themeColor-40: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.4);
        --themeColor-50: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.5);
        --themeColor-60: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.6);
        --themeColor-70: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.7);
        --themeColor-80: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.8);
        --themeColor-90: hsla(var(--themeColor-hsl-h), var(--themeColor-hsl-s), var(--themeColor-hsl-l), 0.9);
        --themeColor-dark: hsl(var(--themeColor-hsl-h), var(--themeColor-hsl-s), calc(var(--themeColor-hsl-l) - 5%));

        /* hsl */
        --success-hsl: var(--success-hsl-h), var(--success-hsl-s), var(--success-hsl-l);
        --success-hsl-h: 90;
        --success-hsl-s: 45%;
        --success-hsl-l: 45%;
        --danger-hsl: var(--danger-hsl-h), var(--danger-hsl-s), var(--danger-hsl-l);
        --danger-hsl-h: 354;
        --danger-hsl-s: 70%;
        --danger-hsl-l: 54%;
    }

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
