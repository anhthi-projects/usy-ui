import styled from "styled-components";

import { usyThemeConfig } from "../ThemeConfig";

const { borderRadius } = usyThemeConfig.getTheme();

export const StyledToggleSectionContainer = styled.div`
  border-radius: ${borderRadius};
`;
