import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  maxWidth: 1440     ,
  fonts: {
    roboto_condensend: "Roboto Condensend",
  },
  colors: {
    spinnerBase: "#0000ff",

    black: "#000000",
    white: "#ffffff",

    black_primary: "#000",
    black_secondary: "#333",
    black_third: "#232323",

    gray_primary: "#eee",
    red_primary: "#d70000",
    
  },
  breakpoints: {
    mobile: "320px",
    mobile_sm: "375px",
    mobile_md: "420px",
    tablet: "480px",
    tablet_sm: "570px",
    tablet_md: "660px",
    laptop: "768px",
    desktop: "1024px",
    desktop_lg: "1280px",
    desktop_ml: "1440px",
    desktop_xl: "1920px",
  },
  zIndexes: {
    headerBar: 100,
    text: 20,
    main_layout: 80,
    footer_layout: 70,
    hover_mask: 10,
    full_menu: 90,
  },
  margins: {
    primary: 20,
    secondary: 15,
  },
};

export default theme;
