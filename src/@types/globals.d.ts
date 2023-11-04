import "styled-components";
import { UsyThemeProps } from "@src/components/ThemeProvider";

declare module "styled-components" {
  export interface DefaultTheme extends UsyThemeProps {}
}

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: string };

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
