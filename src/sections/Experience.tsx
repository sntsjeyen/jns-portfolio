import ExperienceCard from "../components/ExperienceCard"
import Chip from '../components/Chip'

export default function Experience() {
    const description = <ul className="ml-5">
        <li className="text-slate-950 dark:text-slate-50
                       text-base poppins-regular list-disc">Explored low-code development and API integration in Martini; developed a POC for demonstrating the use of AI functions.</li>
        <li className="text-slate-950 dark:text-slate-50
                       text-base poppins-regular list-disc">Utilized Groovy, Java, and Maven to accomplish duties while preparing documentations to record progress in project tasks.</li>
        <li className="text-slate-950 dark:text-slate-50
                       text-base poppins-regular list-disc">Worked in an Agile development environment and participated in sprints and daily standups.</li>
        <li className="text-slate-950 dark:text-slate-50
                       text-base poppins-regular list-disc">Acquired experience in utilizing Git and Bitbucket for version control and managing repositories.</li>
    </ul>

    const skills = <div className="flex mt-5">
        <Chip skill="Low Code Development"></Chip>
        <Chip skill="API Development"></Chip>
        <Chip skill="Groovy"></Chip>
        <Chip skill="Git"></Chip>
        <Chip skill="Agile Methodologies"></Chip>
    </div>

    return (
        <section id="experience" className="pt-25 flex flex-col justify-center items-center">
            <h2 className="text-6xl text-blue-500 poppins-bold mb-10">Experience</h2>
            <ExperienceCard timeframe="DEC 2024 – APR 2025" position="Backend Developer Intern • Toro Cloud" description={description} skills={skills}/>
        </section>
    )
}