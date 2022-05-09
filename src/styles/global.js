import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0
}
    body{
        font-size: 100%;
        list-style-type: none;
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle;