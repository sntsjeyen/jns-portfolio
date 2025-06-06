import Logo from '../components/Logo'
import NavbarItem from '../components/NavbarItem'
import Toggle from '../components/Toggle'

export default function Navbar() {
    return (
        <nav className="bg-slate-50/75 dark:bg-slate-950/75
                        min-w-full backdrop-blur-lg
                        flex p-5 fixed justify-between items-center z-20">
            <Logo></Logo>
            <div className="flex">
                <NavbarItem href="#about" text="About"/>
                <NavbarItem href="#experience" text="Experience"/>
                <NavbarItem href="#work" text="Work"/>
                <NavbarItem href="#contact" text="Contact"/>
                <Toggle></Toggle>
            </div>
        </nav>
    )
}