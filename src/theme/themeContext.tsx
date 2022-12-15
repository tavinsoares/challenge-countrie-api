import { createContext } from 'react';

interface ThemeContext {
    theme: 'light' | 'dark',
    changeTheme: () => void
}

export default createContext<ThemeContext | null>(null);



