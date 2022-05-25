import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Colors from "./colors";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html {
        font-family: 'Poppins', 'Spoqa Han Sans Neo', -apple-system, 'Segoe UI', sans-serif;
        font-size: 62.5%;
        
        background-color: ${Colors.Background};
    }

    * {
        box-sizing: border-box;
    }
`;
