import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: #111;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
    body, button, input{
        font-family: 'Roboto', sans-serif;
    }

    .container-modalOverlay{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-modal{
        position: relative;
        width: 100%;
        max-width: 576px;
        background-color: #fff;
        padding:3rem;
        border-radius: 4px;
        display: flex;
        gap: 2rem;
        outline: none;
    }

    .closeIcon{
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }

`;
