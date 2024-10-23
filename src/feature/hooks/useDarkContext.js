import { createContext, useContext } from "react";

export const DarkmodeContext = createContext("");

export function useDarkContext() {
  const { isDark, setIsDark } = useContext(DarkmodeContext);
  return { isDark, setIsDark };
}
