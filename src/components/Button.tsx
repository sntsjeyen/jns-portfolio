interface ButtonProp {
    //href: string,
    text: string
}

export default function Button({text}: ButtonProp) {
    return (
        <a className="text-slate-950 hover:text-slate-50 dark:text-slate-50 hover:scale-105
                      border-blue-500 border-3 rounded-full text-xl poppins-regular px-4 py-1 duration-300
                      hover:bg-blue-500 hover:duration-300 hover:cursor-pointer min-w-full text-center">
            {text}
        </a>
    )
}