import profile from '../assets/profile-picture-1.png'
import HomeButton from '../components/HomeButton'

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center">
            <img className="h-80 rounded-full border-25 border-slate-50/15" src={profile} alt="Profile picture"/>
            <div className="ml-12">
                <span className="text-xl poppins-regular text-slate-50">Hello! This is</span>
                <h1 className="text-6xl text-blue-500 poppins-bold">Jun Nathan Santos.</h1>
                <span className="text-xl poppins-regular text-slate-50">Backend Developer and Aspiring Data Scientist</span>
                <div className="mt-6 flex">
                    <HomeButton href="resume.pdf" text="View resume"/>
                    <HomeButton href="#about" text="More about me"/>
                    <HomeButton href="#contact" text="Contact"/>
                </div>
            </div>
        </section>
    )
}