import { createGlobalStyle } from "styled-components";

import { FontSize } from "@src/styles";

export const UsyGlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    padding: 0;
    font-size: ${FontSize.Base};
  }

  p, a, span, label, div, button, input, textarea, pre {
    
  }
`;
