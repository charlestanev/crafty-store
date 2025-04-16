import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="btn-theme">
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
            <span className="capitalize">{theme}</span>
        </button>

    )
}