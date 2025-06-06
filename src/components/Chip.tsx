interface ChipProp {
    skill: string
}

export default function Chip({skill}: ChipProp) {
    return (
        <div className="bg-blue-500 rounded-full px-3.5 pb-0.5 mr-2">
            <span className="text-slate-50 poppins-regular text-sm">{skill}</span>
        </div>
    )
}