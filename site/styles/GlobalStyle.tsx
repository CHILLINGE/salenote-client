import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html {
        font-family: 'Poppins', 'Spoqa Han Sans Neo', -apple-system, 'Segoe UI', sans-serif;
        font-size: 62.5%;
        
    }

    * {
        box-sizing: border-box;
    }
`;
