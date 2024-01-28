import Image from "next/image";

interface SkillItemCardProps {
    src: string;
    alt: string;
    title: string;
    className?:string;
}
const SkillItemCard = ({
    src,
    alt,
    title,
    className,
}:SkillItemCardProps) => {
    return (
        <div className='flex items-center'>
            <Image className={className} src={src} width={50} height={50} alt={alt} />
            <p className='text-lg '>{title}</p>
        </div>
    )
}

export default SkillItemCard