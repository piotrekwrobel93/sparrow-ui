import { createTheme, ThemeOptions } from "@material-ui/core/styles";


export interface IColors {
  black: string
  grey: string
  greyDark: string
  greyLight: string
  white: string
}

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    colors: IColors;
  }


  interface ThemeOptions {
    colors?: {
      black ?: string
      grey ?: string
      greyDark ?: string
      greyLight ?: string
      white ?: string
    };
  }
}

export default function defaultCreateTheme(opts: ThemeOptions) {
  return createTheme(opts);
}
