import { usySpacing } from "@src/styles";

type unit = "%" | "px" | "em" | "rem" | "vw" | "vh";
export type MeasureUnit = `${number}${unit}` | keyof typeof usySpacing;
