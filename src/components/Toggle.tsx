import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ToggleProps {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function Toggle({toggleDarkMode, darkMode}: ToggleProps) {
    return (
        <div className="px-4">
            <button className="bg-slate-950 dark:bg-slate-50
                               inline-flex relative h-6 w-11 rounded-full bg-slate-50 transition-colors duration-300 ease-in-out group hover:cursor-pointer"
                    onClick={toggleDarkMode}>
                <div className="bg-slate-50 dark:bg-slate-950 dark:translate-x-5
                                absolute top-0.5 flex h-5 w-5 left-0.5 items-center justify-center rounded-full shadow-xs transition-transform duration-300 ease-in-out">
                    <FontAwesomeIcon className="text-slate-950 dark:text-slate-50" icon={darkMode ? faMoon : faLightbulb}/>
                </div>
            </button>
        </div>
    )
}