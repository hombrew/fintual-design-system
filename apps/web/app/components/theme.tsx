import { createContext, useContext, useState } from "react";

export type Theme = "dark" | "light";

const ThemeContext = createContext<
  [Theme, React.Dispatch<React.SetStateAction<Theme>>]
>(["dark", null!]);

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
