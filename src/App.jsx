import { useState, useEffect } from "react";
import Button from "./components/Button";

import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("dark");
  };
  const darkTheme = () => {
    setThemeMode("light");
  };

  //theme change
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    // eslint-disable-next-line no-undef
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme btn */}
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
