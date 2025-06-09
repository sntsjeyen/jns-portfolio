import { useState } from 'react'
import Main from './layout/Main'
import Navbar from './layout/Navbar'

export default function App() {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };

    const toggleDark = darkMode ? "dark" : ""; 

    return (
        <div className={toggleDark}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            <Main/>
        </div>
    )
}