import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface ProjectCardProps {
    picture: string,
    name: string,
    description: string,
    link: string
}

export default function ProjectCard({picture, name, description, link}: ProjectCardProps) {
    return (
        <div className="bg-slate-50/10 rounded-2xl p-7 mx-5 max-w-114 mt-10">
            <img className="rounded-lg mb-5" src={picture} alt="" />
            <p className="text-2xl text-slate-50 poppins-semibold">{name}</p>
            <p className="text-base text-slate-50 poppins-regular">{description}</p>
            <div className="flex justify-center items-center float-right mt-3 w-12 h-12 rounded-full duration-300 hover:bg-slate-50/10 hover:duration-300">
                <a className="text-blue-500 text-3xl" href={link}>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </div>
    )
}