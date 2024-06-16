import { FC, ReactNode, useEffect } from "react";

import { toCssVariable } from "@src/utils/format";

type ThemeProps =
  | "colorPrimary"
  | "colorPrimaryLight"
  | "colorPrimaryDark"
  | "elementHeight"
  | "elementRadius";

interface ProviderProps {
  children: ReactNode;
  theme?: Partial<Record<ThemeProps, string>>;
}

export const UsyProvider: FC<ProviderProps> = ({ children, theme }) => {
  useEffect(() => {
    if (!theme) {
      return;
    }

    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
      const varName = toCssVariable(key);
      root.style.setProperty(varName, value);
    });
  }, [theme]);

  return <>{children}</>;
};
