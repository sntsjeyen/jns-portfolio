interface ChipProp {
    skill: string
}

export default function Chip({skill}: ChipProp) {
    return (
        <div className="bg-blue-500 rounded-full px-3.5 pb-0.5 mr-2">
            <span className="poppins-regular text-slate-50 text-sm">{skill}</span>
        </div>
    )
}