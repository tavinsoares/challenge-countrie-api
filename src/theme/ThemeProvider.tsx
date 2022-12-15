import { useEffect } from 'react';
import ThemeContext from './themeContext';
import useLocalStorage from '../utils/useLocalStorage';

const useProviderTheme = (initialTheme: 'light' | 'dark' ) => {
    const [theme, setTheme] = useLocalStorage({
        initialValue: initialTheme,
        propStorage: 'theme'
    });

    useEffect(() => {
        if(theme === 'dark'){
            return document.documentElement.classList.add('dark')
        } 

        return document.documentElement.classList.remove('dark')
    }, [theme]);

    return {
        theme,
        setTheme
    }
}



const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme, setTheme } = useProviderTheme('light');

    const changeTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
            return;
        }

        setTheme('light');
        return;
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider