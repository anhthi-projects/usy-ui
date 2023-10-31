import { Color, Space } from "@src/styles";

export interface UsyThemeInstanceProps {
  primaryColor: string;
  primaryDarkColor: string;
  horizontalPadding: string;
  borderRadius: string;
}

class UsyThemeConfig {
  private themeConfig: UsyThemeInstanceProps;

  constructor() {
    this.themeConfig = {
      primaryColor: Color.Teal,
      primaryDarkColor: Color.TealDark,
      horizontalPadding: Space.px16,
      borderRadius: Space.px4,
    };
  }

  init() {
    if (usyThemeConfig) {
      throw new Error("The Usy themeConfig as initialized");
    }

    usyThemeConfig = new UsyThemeConfig();
  }

  getTheme() {
    return this.themeConfig;
  }

  setTheme(customTheme: UsyThemeConfig) {
    this.themeConfig = {
      ...this.themeConfig,
      ...customTheme,
    };
  }
}

export let usyThemeConfig: UsyThemeConfig;
