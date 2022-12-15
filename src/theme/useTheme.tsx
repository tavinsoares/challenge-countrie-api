import { useContext } from 'react';
import ThemeContext from './themeContext';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error("useTheme need a ThemeProvider!");
    }

    const { theme, changeTheme } = context;

    const inversedTheme = theme === 'dark' ? 'light' : 'dark';

    return { theme, changeTheme, inversedTheme }
}
