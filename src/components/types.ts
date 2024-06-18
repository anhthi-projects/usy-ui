import { usySpacing } from "../index";

type unit = "%" | "px" | "em" | "rem" | "vw" | "vh";
export type MeasureUnit = `${number}${unit}` | keyof typeof usySpacing;
