import designTheme from "./theme";
import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components";

import { createContext, useState, useContext } from "react";

export interface ProviderProps {
  resetCSS?: boolean;
  children?: any;
  defaultTheme?: any;
}

interface ContextProps {
  theme: any;
  setTheme: any;
}

const ThemeContext = createContext({
  theme: (): any => {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  },
  setTheme: (theme: any): any => {
    throw new Error(`useTheme must be used within a ThemeProvider: ${theme}`);
  },
});

export const ThemeProvider: React.FC<ProviderProps> = ({
  children,
  defaultTheme,
}) => {
  const [theme, setTheme] = useState(defaultTheme || designTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderStyledComponents theme={theme}>
        {children}
        <div id="modal-root"></div>
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
