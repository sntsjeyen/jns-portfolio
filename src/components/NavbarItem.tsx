interface NavbarItemProps {
    href: string,
    text: string
}

export default function NavbarItem({href, text}: NavbarItemProps) {
    return (
        <div className="px-4">
            <a className="text-slate-50 poppins-regular navbar-item relative" href={href}>{text}</a>
        </div>
    )
}