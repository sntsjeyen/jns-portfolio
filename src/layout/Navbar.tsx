import Logo from '../components/Logo'
import NavbarItem from '../components/NavbarItem'
import Toggle from '../components/Toggle'

interface NavbarProps {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function Navbar({toggleDarkMode, darkMode}: NavbarProps) {
    return (
        <nav className="bg-slate-50/50 dark:bg-slate-950/75
                        min-w-full backdrop-blur-lg
                        flex p-5 fixed justify-between items-center z-20">
            <Logo></Logo>
            <div className="flex">
                <NavbarItem href="#about" text="About"/>
                <NavbarItem href="#experience" text="Experience"/>
                <NavbarItem href="#work" text="Work"/>
                <NavbarItem href="#contact" text="Contact"/>
                <Toggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} ></Toggle>
            </div>
        </nav>
    )
}