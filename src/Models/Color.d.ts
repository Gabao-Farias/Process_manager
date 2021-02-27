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
  text: string;
  primary: ColorSetVariant;
  secondary?: ColorSetVariant;
  tertiary?: ColorSetVariant;
  environment: ColorSetVariant;
}

declare type DarkLightTheme = {
  light?: ColorTheme;
  dark: ColorTheme;
}
