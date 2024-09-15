import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; //in this line we have used .Provider before exporting so no need to use while wrapping component with themeProvider

export default function useTheme() {
  return useContext(ThemeContext);
}
