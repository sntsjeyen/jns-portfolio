import profile from '../assets/profile-picture-2.jpg'
import Button from '../components/Button'
import PrincipleCard from '../components/PrincipleCard'

export default function About() {
    const jLogo = <img className="w-20" src="src/assets/j-logo.svg" alt="Excellence" />
    const nLogo = <img className="h-20" src="src/assets/n-logo.svg" alt="Elevation" />
    const sLogo = <img className="h-20" src="src/assets/s-logo.svg" alt="Experience" />

    return (
        <section id="about" className="pt-25 flex flex-col justify-center items-center">
            <h2 className="text-6xl text-blue-500 poppins-bold mb-10">About Me</h2>
            <div className="flex flex-row justify-center items-center">
                <div className="w-140 mr-20">
                    <p className="poppins-regular text-base text-slate-50 text-justify mt-2 mb-5"><strong className="poppins-semi-bold text-blue-500">Hello, World! I'm Jun Nathan</strong>, a highly committed computer science fresh graduate who is eager to <strong className="poppins-semi-bold text-blue-500">excellently elevate experiences</strong> in the progressive field of technology.</p>
                    <p className="poppins-regular text-base text-slate-50 text-justify mb-5">My academic pursuits have equipped me with foundational knowledge in <strong className="poppins-semi-bold text-blue-500">Python and Java programming, web development, database management, and natural language processing</strong> while improving my skills in <strong className="poppins-semi-bold text-blue-500">documentation and designing diagrams</strong>.</p>
                    <p className="poppins-regular text-base text-slate-50 text-justify">Moreover, my journey as a backend developer intern gave me the opportunity to gain hands-on experience and further learn about <strong className="poppins-semi-bold text-blue-500">APIs, low code development, and Git version control</strong>. As a budding tech professional, I am ready to leverage my capabilities to develop solutions as I put my work principles in practice.</p>
                </div>
                <div className="relative">
                    <img className="h-80 rounded-2xl z-10 relative" src={profile} alt="Profile picture" />
                    <div className="min-h-80 min-w-80 bg-blue-500 rounded-2xl z-0 inset-0 absolute mt-5 ml-5"></div>
                </div>
            </div>
            <div className="mt-10 flex justify-center items-center">
                <div className="min-w-140 mr-12 flex">
                    <PrincipleCard logo={jLogo}></PrincipleCard>
                    <PrincipleCard logo={nLogo}></PrincipleCard>
                    <PrincipleCard logo={sLogo}></PrincipleCard>
                </div>
                <div className="w-80 flex flex-col">
                    <Button text="View skills"></Button>
                    <div className="mb-2.5"></div>
                    <Button text="Check certifications"></Button>
                </div>
            </div>
        </section>
    )
}