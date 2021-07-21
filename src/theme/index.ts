import createTheme, { IColors } from "./theme";

  
export const colors: IColors = {
  black: '#000',
  greyLight: '#555',
  grey: '#333',
  greyDark: '#111',
  white: '#fff'
};

const theme = createTheme({
  colors,
  typography: {
    fontFamily: "Poppins, Arial",
  },
});

export default theme;
