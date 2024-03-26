import data from '@/public/data'
import React from 'react'
import ProjectItem from './project-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

export const Projects = () => {
    return (
        <div id='projects' className='w-full h-full flex flex-col items-center justify-center 2xl:min-h-[100vh] bg-muted relative py-[50px]'>
            <Fade direction='up' triggerOnce duration={1} cascade>
                <h2 className='font-bold text-3xl pb-[10px]'>Projects</h2>
            </Fade>
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {data.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
            <Fade direction='up' triggerOnce duration={1000}>
                <Link href='https://github.com/krish3957'>
                    <Button className='hover:bg-muted hover:text-primary transition-transform hover:scale-125 border border-solid'>
                        View All Projects
                    </Button>
                </Link>
            </Fade>
        </div>
    )
}
