import { screen } from "./screen";

// Ready made media queries
export const responsive = {
  xs: `@media (max-width: ${screen.xsMax}px)`,
  smAndLess: `@media (max-width: ${screen.smMax}px)`,
  smPlus: `@media (min-width: ${screen.smMin}px)`,
  sm: `@media (min-width: ${screen.smMin}px) and (max-width: ${screen.smMax}px)`,
  mdAndLess: `@media (max-width: ${screen.mdMax}px)`,
  mdPlus: `@media (min-width: ${screen.mdMin}px)`,
  md: `@media (min-width: ${screen.mdMin}px) and (max-width: ${screen.mdMax}px)`,
  lg: `@media (min-width: ${screen.lgMin}px) and (max-width: ${screen.lgMax}px)`,
  lgPlus: `@media (min-width: ${screen.lgMin}px)`,
  xl: `@media (min-width: ${screen.xlMin}px)`,
};
