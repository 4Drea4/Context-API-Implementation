import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle(){
    const {theme, toggleTheme} = useTheme();

    return(
        <button  className="toggle" onClick={toggleTheme}>
            {theme === "light" ? "Dark": "Light"}
        </button>
    )
}