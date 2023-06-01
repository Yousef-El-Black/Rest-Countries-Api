type Theme = {
  white?: string;
  darkGrayLight: string;
  veryLightGrayLight: string;
};

let theme: Theme;

if (window.localStorage.getItem("theme") === "dark") {
  theme = {
    darkGrayLight: "hsl(0, 0%, 52%)", //  (Light Mode Input)
    veryLightGrayLight: "hsl(207, 26%, 17%)", //  (Light Mode Background)
    white: "hsl(209, 23%, 22%)", //  (Dark Mode Text & Light Mode Elements)
  };
} else {
  theme = {
    darkGrayLight: "hsl(0, 0%, 52%)", //  (Light Mode Input)
    veryLightGrayLight: "hsl(0, 0%, 98%)", //  (Light Mode Background)
    white: "hsl(0, 0%, 100%)", //  (Dark Mode Text & Light Mode Elements)
  };
}

export default theme;
