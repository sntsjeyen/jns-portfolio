interface ButtonProp {
    href: string,
    text: string
}

export default function HomeButton({href, text}: ButtonProp) {
    return (
        <a className="border-blue-500 border-3 rounded-full text-xl text-slate-50 poppins-regular px-4 py-1 mr-2 duration-300
                      hover:bg-blue-500 hover:duration-300 hover:cursor-pointer" href={href}>
            {text}
        </a>
    )
}