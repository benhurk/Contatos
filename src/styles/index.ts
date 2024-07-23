import { createGlobalStyle } from "styled-components";

export const colors = {
    default: '#2F3640',
    green: '#44BD32',
    red: '#C23616'
}

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    #root {
        display: grid;
        grid-template-columns: 280px auto;
    }

    main {
        padding: 40px;
        overflow-y: scroll;
    }
    `

export default GlobalStyles;