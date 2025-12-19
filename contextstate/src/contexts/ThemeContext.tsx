import {createContext, useContext} from 'react';
import type { Theme } from '../types'; 

export type ThemeContextOfType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextOfType | null>(null);

export function useTheme(){
    const context = useContext(ThemeContext);
        if (!context) {
            throw new Error ("Usetheme");
        }
 
    return context;

}