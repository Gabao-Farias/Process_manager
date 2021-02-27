type ColorSetVariant = {
  darker?: string;
  dark: string;
  main: string;
  light: string;
  lighter?: string;
};

declare type ColorTheme = {
  error: string;
  warning: string;
  success: string;
  info: string;
  text: ColorSetVariant;
  primary: ColorSetVariant;
  secondary?: ColorSetVariant;
  tertiary?: ColorSetVariant;
  accent?: ColorSetVariant;
  environment: ColorSetVariant;
};

declare type DarkLightTheme = {
  light?: ColorTheme;
  dark: ColorTheme;
};

declare type ThemeChoice = {
  choice: "dark" | "light";
}
