import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 border rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
            {theme === "light"
                ? <><Sun size={20} /> light </>
                : <><Moon size={20} /> dark </>
            }
        </button>
    )
}