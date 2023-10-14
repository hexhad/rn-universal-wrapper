import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const toggleState = () => {
    setSelectedTheme(prevState => prevState === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleState }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
