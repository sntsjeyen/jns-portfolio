import type { JSX } from "react"

interface ExperienceCardProps {
    timeframe: string,
    position: string,
    description: JSX.Element,
    skills: JSX.Element
}

export default function ExperienceCard({timeframe, position, description, skills}: ExperienceCardProps) {
    return (
        <div className="bg-slate-50/10 max-w-240 rounded-2xl p-10">
            <p className="text-lg text-slate-50 poppins-regular">{timeframe}</p>
            <p className="text-2xl text-blue-500 poppins-bold">{position}</p>
            {description}
            {skills}
        </div>
    )
}