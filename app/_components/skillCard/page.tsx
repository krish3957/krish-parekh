'use client';
import React from 'react'
import { SkillItems } from './skill-items';
import Education from './education';
import { Separator } from '@/components/ui/separator';
import { Fade } from 'react-awesome-reveal';

const SkillsCard = () => {
    return (
        <div id='about' className='w-full block md:flex items-center justify-center h-auto md:h-[100vh] top-[60px] bg-muted'>
            <div className='flex-1 px-[15px] md:px-10'>
                <Fade direction='up' duration={1000} triggerOnce>
                    <h2 className='font-bold text-lg md:text-3xl lg:text-5xl pb-10'>Get to Know me!</h2>
                    <p className='text-muted-foreground text-xl'>
                        I&apos;m a <strong>Full-Stack Web Developer</strong>, transforming ideas into functional projects with a passion for seamless solutions. Eager to learn, I constantly explore new technologies to enhance my skills.
                        My dedication to clean and efficient code ensures projects are both robust and scalable.
                    </p>
                    <p className='text-muted-foreground text-xl mb-3'>
                        Actively seeking exciting Job/Internship opportunities to contribute and grow.Le&apos;s connect on <a className='text-popover-foreground' href='https://www.linkedin.com/in/krish-parekh-19b66b231/'>LinkedIn</a> and explore possibilities together! 💻
                    </p>
                </Fade>
                <Fade direction='up' duration={1000} triggerOnce>
                    <Separator />
                    <h2 className='text-3xl font-bold'>My Education</h2>
                    <Education />
                </Fade>
            </div>
            <Fade direction='up' triggerOnce duration={1000}>
                <div className='flex-1 p-5 md:p-0'>
                    <div className='flex flex-col'>
                        {/* <h2 className='font-bold text-3xl mb-5'>Technologies I&apos;ve been working with recently:</h2> */}
                        <h2 className='font-bold text-3xl'>My Skills</h2>
                        <SkillItems />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default SkillsCard;