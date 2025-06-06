import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profile from '../assets/profile-picture-1.png'
import HomeButton from '../components/HomeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center">
            <img className="h-80 rounded-full border-25 border-slate-50/15" src={profile} alt="Profile picture"/>
            <div className="ml-12">
                <span className="text-xl poppins-regular text-slate-50">Hello! This is</span>
                <h1 className="text-6xl text-blue-500 poppins-bold">Jun Nathan Santos.</h1>
                <span className="text-xl poppins-regular text-slate-50">Backend Developer and Aspiring Data Scientist</span>
                <div className="mt-3 flex">
                    <HomeButton href="resume.pdf" text="View resume"/>
                    <HomeButton href="#about" text="More about me"/>
                    <HomeButton href="#contact" text="Contact"/>
                </div>
                <div className="mt-3">
                    <a className="text-blue-500 text-3xl mr-3" href="https://linkedin.com/in/jun-nathan-santos">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a className="text-blue-500 text-3xl" href="https://github.com/sntsjeyen">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
            </div>
        </section>
    )
}