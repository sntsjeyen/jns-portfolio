import type { JSX } from "react"

interface PrincipleCardProp {
    logo: JSX.Element
}

export default function PrincipleCard({logo}: PrincipleCardProp) {
    return (
        <div className="bg-slate-950/5 dark:bg-slate-50/10
                        rounded-2xl px-12 py-4 mr-6">
            {logo}
        </div>
    )
}