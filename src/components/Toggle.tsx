import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Toggle() {
    return (
        <div className="px-4">
            <button className="inline-flex relative h-6 w-11 rounded-full bg-slate-50 transition-colors duration-300 ease-in-out group">
                <div className="absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 shadow-xs transition-transform duration-300 ease-in-out translate-x-5">
                    <FontAwesomeIcon className="text-slate-50" icon={faMoon}/>
                </div>
            </button>
        </div>
    )
}