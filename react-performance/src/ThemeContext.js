import { Children, createContext, useMemo, useState } from "react";

export const THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK"
}


export const ThemeContext = createContext(THEMES.LIGHT);

export function ThemeProvider({children}){
  const [theme , setTheme] = useState(THEMES.LIGHT);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}