import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Fade, Slide, Zoom } from "react-awesome-reveal"

interface ProjectItemProps {
    project: {
        name: string,
        description: string,
        link: string,
    }
};
const ProjectItem = ({
    project
}: ProjectItemProps) => {
    return (
        <div className="group relative w-90 md:w-45 lg:w-30 h-auto md:h-45 bg-border cursor-pointer m-5 hover:text-white p-2 hover:transition-transfrom hover:bg-blue-700 hover:scale-105 transition-all hover:shadow-slate-500 shadow-lg">
            <Fade direction='up' triggerOnce duration={1000}>
                <h2 className="font-semibold text-xl">{project.name}</h2>
                <p className="text-sm  md:text-lg">{project.description}</p>
            </Fade>
            <Link href={project.link}>
                <Button variant='link' className="md:absolute bottom-2 right-2 text-sm md:text-lg group-hover:text-white">
                    <Fade direction='up' triggerOnce duration={1000}>
                        View Project
                    </Fade>
                </Button>
            </Link>
        </div>
    )
}

export default ProjectItem