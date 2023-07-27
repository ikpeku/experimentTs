import React, { createContext, FC } from "react";
import { theme } from "./theme";

export const themeContextProvider = createContext(theme)


type ThemeContextProps = {
    children: React.ReactNode

}



export const ThemeContext: FC<ThemeContextProps> = ({ children }) => {
    return (
        <themeContextProvider.Provider value={theme}>{children}</themeContextProvider.Provider>
    )
}