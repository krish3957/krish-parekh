import { InstagramIcon, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SocialIcons = () => {
    return (
        <div className="flex">
            <Link href='mailto:kpparekh81602@gmail.com/'>
                <Image src='https://img.icons8.com/color/48/000000/gmail.png' width={40} height={40} alt="Mail" />
            </Link>
            <Link href='https://www.linkedin.com/in/krish-parekh-19b66b231/'>
                <Image src='https://img.icons8.com/color/48/000000/linkedin.png' width={40} height={40} alt="LinkedIn" />
            </Link>
            <Link href='https://github.com/krish3957'>
                <Image src='https://img.icons8.com/color/48/dark/github.png' width={40} height={40} alt="Github" />
            </Link>
            <Link href='https://www.instagram.com/_parekh_krish_//'>
                <Image src='https://img.icons8.com/color/48/instagram-new--v1.png' width={40} height={40} alt="Instagram" />
            </Link>
        </div>
    )
}

export default SocialIcons