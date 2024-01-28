import Link from "next/link";

interface NavbarItemProps {
    text: string;
    href: string;
}

const NavbarItem = ({
    text,
    href
}: NavbarItemProps) => {
    return (
        <Link className="mr-5 text-lg font-semibold" href={href}>
            {text}
        </Link>
    )
}

export default NavbarItem